import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import VocabularyContainer, {
  SearchContainer,
  SearchInputWrapper,
} from './styles';
import VocabularyItem from './VocabularyItem';
import { sortedByEnHanzis } from '../../redux/modules/hanzis';
import Input from '../../components/core/Form/Input';
import Button from '../../components/core/Button/Button';
import { ColorPalette } from '../../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function VocabularyList() {
  const { context } = useSelector((state: RootState) => state.filters);
  const hanzis = useSelector(sortedByEnHanzis);

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState<string>('');
  const [isSearch, setSearch] = useState<boolean>(false);

  useEffect(() => {
    if (context && hanzis) {
      setList(
        hanzis.filter(
          (hanzi) =>
            hanzi.translation.en.includes(filter) &&
            hanzi.tags.includes(context.category.value)
        )
      );
    }
  }, [context, hanzis, filter]);

  return (
    <>
      <VocabularyContainer
        fluid
        direction="column"
        padding="15px 30px 140px 30px"
      >
        {list.map((item) => (
          <VocabularyItem key={item.id} hanzi={item} />
        ))}
      </VocabularyContainer>
      <SearchContainer open={isSearch}>
        <Button
          radius="300px"
          padding="20px"
          backgroundColor={ColorPalette.DARKER_BLUE}
          backgroundHoverColor={ColorPalette.DARK_GREY}
          style={{
            fontSize: 14,
            fontWeight: 400,
            width: 55,
            height: 55,
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          }}
          onClick={() => setSearch(!isSearch)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color={ColorPalette.WHITE}
            size="lg"
          />
        </Button>
        <SearchInputWrapper open={isSearch}>
          <Input
            placeholder="Search..."
            initialValue=""
            onChange={(value: string) => setFilter(value.toLowerCase())}
            style={{ width: 'calc(100% - 80px)' }}
          />
        </SearchInputWrapper>
      </SearchContainer>
    </>
  );
}

export default VocabularyList;
