import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function TodoDetails({
  todoDetails,
  openDialog,
  set_openDetails,
  set_todoDetails,
}) {
  return (
    <Fragment>
      <Dialog open={openDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions
          onClick={() => {
            set_openDetails(false);
            set_todoDetails([]);
          }}
        >
          <Button>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
export default TodoDetails;
