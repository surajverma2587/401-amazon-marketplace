import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useApp } from "../context/AppProvider";

export const CheckoutItem = ({ item }) => {
  const { dispatch } = useApp();

  return (
    <Card sx={{ display: "flex", my: 2, width: "100%" }}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: "contain" }}
        image={item.imageUrl}
        alt={item.title}
      />
      <Box sx={{ width: "100%" }}>
        <CardContent>
          <Stack spacing={4}>
            <Stack>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  Item price
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.price}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  Quantity
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.quantity}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  Item sub-total
                </Typography>
                <Typography component="div" variant="h6">
                  {item.price}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Box>
              <IconButton
                color="error"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: item.ASIN,
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
            <Box>
              <Stack direction="row">
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </CardActions>
      </Box>
    </Card>
  );
};
