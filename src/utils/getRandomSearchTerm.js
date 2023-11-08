const TRENDING_PRODUCTS = ["shoes", "keyboard", "laptop", "games", "watch"];

export const getRandomSearchTerm = () => {
  const randomIndex = Math.floor(Math.random() * TRENDING_PRODUCTS.length);

  return TRENDING_PRODUCTS[randomIndex];
};
