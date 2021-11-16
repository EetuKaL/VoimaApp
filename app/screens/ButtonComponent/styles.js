import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#04ECF0",
    bottom: 0,
    height: 70,
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  button: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#059DC0",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    color: "#B4FEE7",
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
export default styles;
