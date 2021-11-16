import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const [currentbackgroundColor, setCurrentbackgroundcolor] = useState("white");
  const { isClicked, buttonTitle, onPress } = props;

  useEffect(() => {
    if (isClicked) {
      setCurrentbackgroundcolor("#059DC0");
    } else {
      setCurrentbackgroundcolor("#04D4F0");
    }
  });

  /* currentbackgroundColor = isClicked === "true" ? "black" : "white"; */
  /* const currentOpacity = type === "primary" ? 1 : 0; */
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: currentbackgroundColor }]}
        onPress={() => {
          console.log(
            "komponentin sisällä " + isClicked + currentbackgroundColor
          );
          onPress();
        }}
      >
        <Text style={styles.text}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
/*  : ; */
