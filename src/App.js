import "./App.scss";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import Router from "./router";

function App({theme}) {
  return (
    <Provider store={store}>
        <Router />
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </Provider>
  );
}


export default App;

