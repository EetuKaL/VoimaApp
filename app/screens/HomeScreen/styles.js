import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#04ECF0",
    width: "100%",
    height: Dimensions.get("window").height,
    flexDirection: "column",
  },

  textContainer: {
    top: "35%",
    elevation: 100,
    backgroundColor: "#A16AE870",
    position: "absolute",
    textAlign: "center",
    borderRadius: 3,
    marginLeft: 5,
  },
  describingText: {
    top: 10,
    backgroundColor: "#A16AE870",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    minHeight: "30%",
  },

  image: {
    top: 0,
    borderWidth: 5,
    borderColor: "#059DC0",
    borderRadius: 30,
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    position: "relative",
  },
  textBox: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#04ECF0",
  },

  /*  pictureAndText: {
    flexDirection: "row",
  }, */
});

export default styles;
