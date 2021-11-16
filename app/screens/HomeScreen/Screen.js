import styles from "./styles";
import React from "react";
import { View, Image, Text } from "react-native";

const Screen = (props) => {
  const { name, subtitle, image, introduction } = props.screen;

  return (
    <View style={styles.background}>
      <View style={styles.textContainer}>
        <Text style={{ color: "#B4FEE7", fontSize: 35 }}>{name}</Text>
        <Text style={{ color: "#B4FEE7", fontSize: 20 }}>{subtitle}</Text>
      </View>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textBox}>
        <View style={styles.describingText}>
          <Text style={{ color: "#B4FEE7", fontSize: 15 }}>{introduction}</Text>
        </View>
      </View>
    </View>
  );
};

export default Screen;
