import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { ProductCard } from "./ProductCard";

export const SearchResults = ({ results }) => {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        {results.map((result) => {
          return <ProductCard key={result.ASIN} product={result} />;
        })}
      </Stack>
    </Card>
  );
};
