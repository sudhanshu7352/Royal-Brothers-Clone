import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { DatePicker } from "./DatePicker";
import { useNavigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export function SchedulePopUp({isAvailable,item}) {

  const navigate = useNavigate()



  const [open, setOpen] = React.useState(false);

   const [Schedule, setSchedule] = React.useState({
     pickUpDate: "",
     pickUpTime: "",
     dropOffDate: "",
     dropOffTime: "",
   });

   const handleChange = (event) => {
     setSchedule({
       ...Schedule,
       [event.target.name]: event.target.value,
     });
   };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log(Schedule);

    const newSchedule = {
      pickUpDate: new Date(Schedule.pickUpDate).toUTCString(),
      pickUpTime: new Date(Schedule.pickUpTime).toTimeString(),
      dropOffDate: new Date(Schedule.dropOffDate).toUTCString(),
      dropOffTime: new Date(Schedule.dropOffTime).toTimeString(),
    };

    console.log(newSchedule);
    localStorage.setItem("bikeScheduleDetails", JSON.stringify(Schedule));
    localStorage.setItem("bikeDetails", JSON.stringify(item));
    setSchedule({
     pickUpDate: "",
     pickUpTime: "",
     dropOffDate: "",
     dropOffTime: "",
   })
    setOpen(false);
    navigate("/product")

  };

  return (
    <div>
      <Button
        // variant="outlined"
        onClick={handleClickOpen}
        sx={{
          width: "100%",
          backgroundColor: "#fed250",
          color: "black",
          fontWeight: "500",
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: "#fed250c9",
          },
        }}
        disabled={!isAvailable}
        variant="contained"
      >
        {isAvailable ? "Book Now" : "Not Available"}
      </Button>
      <BootstrapDialog
        sx={{
          width: "370px",
          minWidth: "370px",
          margin: "0 auto",
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h6">Search your next ride</Typography>
          <DatePicker Schedule={Schedule} handleChange={handleChange} />
        </BootstrapDialogTitle>

        <DialogActions>
          <Button
          disabled={Schedule.pickUpDate === "" || Schedule.pickUpTime === "" || Schedule.dropOffDate === "" || Schedule.dropOffTime === ""}
            autoFocus
            onClick={handleClose}
            sx={{
              width: "100%",
              backgroundColor: "#fed250",
              color: "black",
              fontWeight: "500",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#fed250c9",
              },
            }}
          >
            Search
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
