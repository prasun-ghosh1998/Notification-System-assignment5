import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../store/slice/notification.slice";

import {
  Alert,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  id: number;
  message: string;
  type: "success" | "error" | "info" | "warning";
};

const NotificationItem = ({ id, message, type }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(id));
    }, 3000);
    return () => clearTimeout(timer);
  }, [id, dispatch]);

  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      <Alert
        severity={type}
        variant="filled"
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          fontSize: "0.9rem",
          alignItems: "center",
        }}
        action={
          <IconButton
            size="small"
            onClick={() => dispatch(removeNotification(id))}
            sx={{ color: "#fff" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Stack>
  );
};

export default NotificationItem;