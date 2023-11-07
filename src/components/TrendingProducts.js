import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { ProductCard } from "./ProductCard";

export const TrendingProducts = ({ trendingProducts }) => {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        {trendingProducts.map((trendingProduct) => {
          return (
            <ProductCard key={trendingProduct.ASIN} product={trendingProduct} />
          );
        })}
      </Stack>
    </Card>
  );
};
