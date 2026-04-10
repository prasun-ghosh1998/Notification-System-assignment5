import { addNotification } from "../store/slice/notification.slice";
import { Box, Button } from "@mui/material";
import type { NotificationType } from "../typeScript/type/type";
import { useAppDispatch } from "../service/helper/redux";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const showNotification = (type: NotificationType) => {
    dispatch(
      addNotification({
        message: `This is ${type} notification`,
        type,
      }),
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        p: 2,
      }}
    >
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
    </Box>
  );
};

export default Navbar;
