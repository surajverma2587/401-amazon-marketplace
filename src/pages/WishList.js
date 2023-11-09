import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useApp } from "../context/AppProvider";
import { ProductCard } from "../components/ProductCard";

export const WishList = () => {
  const { wishListId } = useParams();
  const { state } = useApp();

  const currentWishList = state.wishlists.find((wishlist) => {
    return wishlist.id === wishListId;
  });

  return (
    <Stack spacing={3}>
      <Box sx={{ p: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {currentWishList.label}
            </Typography>
            {currentWishList.items.length === 0 && (
              <Alert severity="warning" sx={{ my: 2 }}>
                You have no items in your wish list!
              </Alert>
            )}
          </CardContent>
        </Card>
      </Box>
      {currentWishList.items.length > 0 && (
        <Box sx={{ p: 3 }}>
          <Card>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              flexWrap="wrap"
            >
              {currentWishList.items.map((item) => {
                return (
                  <ProductCard
                    key={item.ASIN}
                    product={item}
                    showDelete
                    wishListId={currentWishList.id}
                  />
                );
              })}
            </Stack>
          </Card>
        </Box>
      )}
    </Stack>
  );
};
