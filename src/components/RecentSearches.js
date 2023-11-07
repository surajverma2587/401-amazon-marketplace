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
import { useNavigate } from "react-router-dom";

export const RecentSearches = ({ recentSearches, handleClearLocalStorage }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Recent Searches
        </Typography>
        {recentSearches.length === 0 && (
          <Alert severity="warning" sx={{ my: 2 }}>
            You have no recent searches!
          </Alert>
        )}
        {recentSearches.length !== 0 && (
          <List>
            {recentSearches.map((recentSearch) => {
              return (
                <ListItem disablePadding key={crypto.randomUUID()}>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/search?q=${recentSearch}`);
                    }}
                  >
                    <ListItemText primary={recentSearch} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem("recentSearches");

            handleClearLocalStorage();
          }}
        >
          Clear
        </Button>
      </CardActions>
    </Card>
  );
};
