import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ScreenData from "./ScreenData";

import StyledButton from "../ButtonComponent";

export default function index() {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [currentButton, setCurrentButton] = useState(null);

  const clickHandler = (button, setbutton) => {
    resetButtons();
    button ? setbutton(false) : setbutton(true);
  };

  const resetButtons = () => {
    setButton1(false), setButton2(false), setButton3(false);
  };

  return (
    <View Style={styles.container}>
      <ScreenData
        type={button1}
        style={{ position: "absolute", elevation: 1 }}
      />
      {/* <Logo style={{ elevation: 100 }} /> */}
      <View style={styles.buttonContainer}>
        <StyledButton
          type={"palvelut"}
          isClicked={button1}
          buttonTitle="Palvelut"
          onPress={() => {
            clickHandler(button1, setButton1);
          }}
        />
        <StyledButton
          type="henkilökunta"
          isClicked={button2}
          buttonTitle="Henkilökunta"
          onPress={() => {
            clickHandler(button2, setButton2);
          }}
        />
        <StyledButton
          isClicked={button3}
          buttonTitle="kartoitus"
          onPress={() => {
            clickHandler(button3, setButton3);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    elevation: 100,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
});
