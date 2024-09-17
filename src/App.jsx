import { useEffect, useState } from "react";
import styles from "./style.module.css";
import TodoItem from "./components/todo-item/index.jsx";
import TodoDetails from "./components/todo-details/index.jsx";
import { Skeleton, CircularProgress, Box } from "@mui/material";
function App() {
  const [List_Todo, UpdateTodo] = useState([]);
  const [loading, update_loading] = useState(false);
  const [todoDetails, set_todoDetails] = useState([]);
  const [openDialog, set_openDetails] = useState(false);
  async function FetchTodoList() {
    try {
      update_loading(true);
      const resluts = await fetch("https://dummyjson.com/todos");
      const apiResponse = await resluts.json();
      if (apiResponse?.todos && apiResponse?.todos.length > 0) {
        UpdateTodo(apiResponse?.todos);
      }
      update_loading(false);
    } catch (e) {
      console.log(e);
    }
  }
  async function FetchDetails(getCurrentId) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentId}`
      );
      const results = await apiResponse.json();
      if (results) {
        set_todoDetails(results);
        set_openDetails(true);
        console.log(results);
      } else {
        set_todoDetails([]);
        set_openDetails(false);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    FetchTodoList();
  }, []);
  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.headerTitle}>welcome to todo list</h1>
      <div className={styles.todoListWrapper}>
        {List_Todo && List_Todo.length > 0
          ? List_Todo.map((todoItem, i) => {
              return <TodoItem FetchDetails={FetchDetails} todo={todoItem} />;
            })
          : null}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        set_openDetails={set_openDetails}
        set_todoDetails={set_todoDetails}
      ></TodoDetails>
    </div>
  );
}

export default App;
