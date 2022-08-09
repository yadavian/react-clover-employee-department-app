import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";

const SnackbarComponent = (props) => {
  /**
   * TODO : TO Call From Other component write this
   */

  // const [openSnackbar, setOpenSnackbar] = useState(false);
  // const handleSnackbar = () => {
  //   setOpenSnackbar(!openSnackbar);
  // };

  const { msg, type = "info", autoHideDuration = 6000 } = props;
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* /**
       * TODO : TO Call From Other component write this
       */}

      {/* <Button onClick={handleSnackbar}>Open simple snackbar</Button> */}
      {/* {openSnackbar && (
        <SnackbarComponent
          msg={"Successully added"}
          open={openSnackbar}
          type={"info"}
        />
      )} */}
      <Box>
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={() => setOpen(false)}
        >
          <MuiAlert elevation={6} variant="filled" severity={type}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                minWidth: "200px",
              }}
            >
              {msg}
              <CloseIcon
                fontSize="small"
                style={{ marginLeft: "50px", cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            </div>
          </MuiAlert>
        </Snackbar>
      </Box>
    </>
  );
};

export default SnackbarComponent;
