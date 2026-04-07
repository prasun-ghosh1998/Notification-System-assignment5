// import './App.css'
import Navbar from "./layout/Navbar";
import NotificationContainer from "./Components/NotificationContainer";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <NotificationContainer />
      </Provider>
    </>
  );
}

export default App;
