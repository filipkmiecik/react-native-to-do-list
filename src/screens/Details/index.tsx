import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Header from "../../components/Header";

interface IDetailsProps {}

const Details: FC<IDetailsProps> = (props) => {
  return (
    <View>
      <Header title="TodoApp" />
      <View style={styles.detailsContainer}>
        {/* <View style={styles.row}>
          <Image
            source={require("../../assets/poppy_field.jpg")}
            style={styles.poppyImage}
          />
        </View> */}
        <View style={styles.row}>
          <Text style={styles.text}>
            Quisque nec elit tellus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Quisque
            laoreet, turpis eu blandit rutrum.
          </Text>
          {/* <Image
            source={require("../../assets/lily.jpg")}
            style={styles.lilyImage}
          /> */}
        </View>
        {/*
        <View style={styles.row}>
          <Image
            source={require("../../assets/geranium.jpg")}
            style={styles.geraniumImage}
          />
          <Text style={styles.text}>
            {" "}
            Integer lobortis nec enim id pretium. Vestibulum fermentum pulvinar
            turpis nec mattis. Nunc in dictum velit. Morbi nec eleifend erat.
            Vivamus non est turpis.
          </Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  text: { flex: 5, paddingRight: 15 },
  geraniumImage: { width: 100, height: 130 },
  lilyImage: { flex: 5, width: "10%", height: 130 },
  poppyImage: { width: "100%", height: 165 },
  row: {
    flexDirection: "row",
    width: "100%",
  },
});

export default Details;
