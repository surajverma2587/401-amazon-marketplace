const TRENDING_PRODUCTS = [
  "shoes",
  "mobile phones",
  "makeup",
  "games",
  "sauce pans",
];

export const getRandomSearchTerm = () => {
  const randomIndex = Math.floor(Math.random() * TRENDING_PRODUCTS.length);

  return TRENDING_PRODUCTS[randomIndex];
};
