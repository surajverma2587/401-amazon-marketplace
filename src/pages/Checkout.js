import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useApp } from "../context/AppProvider";
import { CheckoutItem } from "../components/CheckoutItem";

export const Checkout = () => {
  const { state } = useApp();

  return (
    <Stack spacing={3}>
      <Box sx={{ p: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Checkout
            </Typography>
            {state.basket.length === 0 && (
              <Alert severity="warning" sx={{ my: 2 }}>
                You have no items in your basket!
              </Alert>
            )}
            {state.basket.length > 0 && (
              <List>
                {state.basket.map((item) => {
                  return (
                    <ListItem disablePadding key={crypto.randomUUID()}>
                      <CheckoutItem item={item} />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </CardContent>
          {state.basket.length > 0 && (
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => {
                  localStorage.removeItem("basket");
                }}
              >
                Clear Basket
              </Button>
            </CardActions>
          )}
        </Card>
      </Box>
    </Stack>
  );
};
