const { createPlacesPages } = require('./src/server/generators');

exports.createPages = async ({ graphql, actions }) => {
  const categories = ['restaurant', 'home', 'park', 'supermarket'];

  await Promise.all(
    categories.map(
      async (category) =>
        await createPlacesPages({ graphql, actions }, category)
    )
  );
};
