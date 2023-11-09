import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { useApp } from "../context/AppProvider";
import { useState } from "react";
import { AddToWishListModal } from "./AddToWishListModal";

export const ProductCard = ({ product }) => {
  const { dispatch } = useApp();
  const [showModal, setShowModal] = useState(false);

  return (
    <Card sx={{ maxWidth: 345, my: 3, position: "relative" }}>
      <AddToWishListModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
      {product.isPrimeEligible === "1" && (
        <LoyaltyIcon sx={{ position: "absolute", top: "10px", left: "10px" }} />
      )}
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.title}
        sx={{ objectFit: "contain" }}
      />
      <Stack justifyContent="space-between" sx={{ minHeight: 280 }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {product.price}
            </Typography>
            <Stack spacing={1} alignItems="end">
              <Rating precision={0.1} value={+product.rating} readOnly />
              <Typography gutterBottom variant="caption" component="div">
                {product.rating} ({product.totalReviews} reviews)
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Typography variant="body2" color="text.secondary" sx={{ pt: 3 }}>
            {product.title}
          </Typography>
        </CardContent>

        <CardActions sx={{ backgroundColor: "rgb(245, 245, 245)" }}>
          <Grid container>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton href={product.detailPageURL} target="_blank">
                <VisibilityIcon />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  dispatch({
                    type: "ADD_ITEM",
                    payload: product,
                  });
                }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Stack>
    </Card>
  );
};
