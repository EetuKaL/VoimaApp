import React, { useState, useEffect } from "react";
import { View, Animated, Easing } from "react-native";

const SpinImage = (props) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.Image
        style={{ transform: [{ rotate: spin }] }}
        source={{
          uri: "./assets/test2.png",
        }}
      />
    </View>
  );
};

export default SpinImage;
