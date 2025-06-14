import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bounce, ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
