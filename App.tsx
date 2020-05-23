import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import store from "./src/redux/store/store";
import Main from "./src/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
