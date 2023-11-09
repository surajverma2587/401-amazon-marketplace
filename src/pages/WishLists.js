import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import AddIcon from "@mui/icons-material/Add";
import { useApp } from "../context/AppProvider";
import { WishListItem } from "../components/WishListItem";
import { CreateWishListModal } from "../components/CreateWishListModal";

export const WishLists = () => {
  const { state } = useApp();
  const [showModal, setShowModal] = useState(false);

  return (
    <Stack spacing={3}>
      <Box sx={{ p: 3 }}>
        <CreateWishListModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h5" component="div">
                Wish Lists
              </Typography>
              <Button
                variant="contained"
                color="success"
                startIcon={<AddIcon />}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Create Wish List
              </Button>
              {state.wishlists.length === 0 && (
                <Alert severity="warning" sx={{ my: 2 }}>
                  You have no wish lists!
                </Alert>
              )}
              {state.wishlists.length > 0 && (
                <List>
                  {state.wishlists.map((wishlist) => {
                    return (
                      <WishListItem key={wishlist.id} wishlist={wishlist} />
                    );
                  })}
                </List>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};
