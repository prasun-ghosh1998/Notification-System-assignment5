import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import NotificationItem from './NotificationItem';
import { Box } from '@mui/material';

const NotificationContainer = () => {
 const { notifications } = useSelector(
    (state: RootState) => state.notification
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1300,
        width: 320,
      }}
    >
      {notifications.map((n) => (
        <NotificationItem
          key={n.id}
          id={n.id}
          message={n.message}
          type={n.type}
        />
      ))}
    </Box>
  );
};

export default NotificationContainer