import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import IntroductionData from "./Data/IntroductionData";
import StaffData from "./Data/StaffData";
import Screen from "./Screen.js";

export default function ScreenData(props) {
  const { type } = props;

  const currentPageData = type === true ? IntroductionData : StaffData;
  return (
    <View>
      <FlatList
        styles={styles.container}
        data={currentPageData}
        renderItem={({ item }) => <Screen screen={item} />}
        snapToAlignment={"start"}
        showsVerticalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
