import { useDispatch } from "react-redux";
import { addNotification } from "../store/slice/notification.slice";
import { Button, Stack } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();

  const showNotification = (type: any) => {
    dispatch(
      addNotification({
        message: `This is ${type} notification`,
        type,
      })
    );
  };

  return (
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ p: 2 }}>
      <Button
        variant="contained"
        color="success"
        onClick={() => showNotification("success")}
      >
        Success
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={() => showNotification("error")}
      >
        Error
      </Button>

      <Button
        variant="contained"
        color="info"
        onClick={() => showNotification("info")}
      >
        Info
      </Button>

      <Button
        variant="contained"
        color="warning"
        onClick={() => showNotification("warning")}
      >
        Warning
      </Button>
    </Stack>
  );
};

export default Navbar;