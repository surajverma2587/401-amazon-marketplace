import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import ListItemButton from "@mui/material/ListItemButton";

export const WishListItem = ({ wishlist }) => {
  const navigate = useNavigate();

  return (
    <ListItem>
      <ListItemButton
        onClick={() => {
          navigate(`/wishlist/${wishlist.id}`);
        }}
      >
        <ListItemIcon>
          <Badge badgeContent={wishlist.items.length} color="primary">
            <ShoppingBasketIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary={wishlist.label} secondary={wishlist.createdOn} />
      </ListItemButton>
    </ListItem>
  );
};
