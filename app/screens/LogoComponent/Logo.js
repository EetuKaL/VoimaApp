import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

function Logo() {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.logoPic}
        source={require("../../assets/voimaks-oy-logo.png")}
      />
      <Text style={styles.logoText}>Voimakas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    elevation: 100,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",
    height: 60,
    width: 60,
    /* paddingHorizontal: 20, */
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginTop: 70,
    textAlign: "center",
  },
  logoPic: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
  },
  logoText: {
    top: 0,
    backgroundColor: "#6AF2F050",
    color: "violet",
    position: "absolute",
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    fontSize: 10,
  },
});

export default Logo;
