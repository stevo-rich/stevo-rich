import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
function TodoItem({ todo, FetchDetails }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography varient="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => FetchDetails(todo?.id)}
          sx={{
            backgroundColor: "black",
            color: "white",
            opacity: 0.9,
            "&:hover": { backgroundColor: "black", color: "white", opacity: 1 },
          }}
        >
          show Details
        </Button>
      </CardActions>
    </Card>
  );
}
export default TodoItem;
