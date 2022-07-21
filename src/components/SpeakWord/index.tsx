import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Button from '../core/Button/Button';
import { ColorPalette } from '../../constant';

interface SpeakButtonProps {
  value: any;
  style?: any;
}

function SpeakButton(props: SpeakButtonProps) {
  const { style } = props;

  function getVoices() {
    return new Promise((resolve) => {
      let voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        resolve(voices);
        return;
      }

      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        resolve(voices);
      };
    });
  }

  async function chooseVoice(language, voiceIndex) {
    const allVoices = await getVoices();
    // @ts-ignore
    const voices = allVoices.filter((voice) => voice.lang === language);
    return new Promise((resolve) => {
      resolve(voices[voiceIndex]);
    });
  }

  async function handleOnClick() {
    const { value } = props;
    const message = new SpeechSynthesisUtterance(value);
    const language = 'zh-CN';
    // @ts-ignore
    message.voice = await chooseVoice(language, 0);
    speechSynthesis.speak(message);
  }

  return !speechSynthesis ? null : (
    <Button
      padding="10px 20px 5px 20px"
      onClick={handleOnClick}
      backgroundColor="transparent"
      style={style}
    >
      <FontAwesomeIcon
        icon={faVolumeHigh}
        size="lg"
        color={ColorPalette.GREEN}
      />
    </Button>
  );
}

export default SpeakButton;
