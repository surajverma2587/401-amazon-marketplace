import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ErrorPanel = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Failed to load this section...
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Please refresh the page and try again.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            navigate(0);
          }}
        >
          Refresh
        </Button>
      </CardActions>
    </Card>
  );
};
