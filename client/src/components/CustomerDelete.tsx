import React, { useState, Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";

interface CustomerDeleteState {
  id: number;
  stateRefresh: () => void;
}

const CustomerDelete = (props: CustomerDeleteState) => {
  const [state, setState] = useState({ open: false });

  const handleClickOpen = () => {
    setState({
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      open: false,
    });
  };

  const deleteCustomer = (id: number): void => {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    props.stateRefresh();
  };

  return (
    <Fragment>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        삭제
      </Button>
      <Dialog open={state.open} onClose={handleClose}>
        <DialogTitle>삭제 경고</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              deleteCustomer(props.id);
            }}
          >
            삭제
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default CustomerDelete;
