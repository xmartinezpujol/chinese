const path = require(`path`);

exports.createPlacesPages = async ({ graphql, actions }, category) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMongodbChineseHanzi(filter: { tags: { in: "${category}" } }) {
        nodes {
          coordinates {
            lat
            lng
          }
          id
          mongodb_id
          name
          pinyin
          tags
          translation {
            en
            es
          }
          type
        }
      }
    }
  `);
  const templatePath = path.resolve(`src/templates/places.tsx`);

  createPage({
    path: `/places/${category}`,
    component: templatePath,
    context: {
      list: result,
    },
  });
};
