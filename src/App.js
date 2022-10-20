import React from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store.js";
import User from "./Pages/Home/User.jsx";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <User/>
    </Provider>
  );
}

export default App;
