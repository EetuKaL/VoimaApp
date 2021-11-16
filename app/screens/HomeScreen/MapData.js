import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import IntroductionData from "./IntroductionData";
import StaffData from "./StaffData";
import styles from "./styles.js";
import Screen from "./index";
import Logo from "../LogoComponent/Logo";

export default function MapData(props) {
  const { type } = props;

  /* const currentbackgroundColor = type === "primary" ? "#603F8B" : "#A16AE8"; */
  const currentPageData = type === true ? IntroductionData : StaffData;
  console.log(type);
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
