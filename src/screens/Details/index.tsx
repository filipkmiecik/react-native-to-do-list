import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Header from "../../components/Header";

interface IDetailsProps {}

const Details: FC<IDetailsProps> = (props) => {
  return (
    <View>
      <Header title="TodoApp" />
      <View>
        <View style={styles.row}>
          <Image
            source={require("../../assets/poppy_field.jpg")}
            style={styles.poppyImage}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Quisque nec elit tellus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Quisque
            laoreet, turpis eu blandit rutrum.
          </Text>
          <Image
            source={require("../../assets/lily.jpg")}
            style={styles.lilyImage}
          />
        </View>

        <View style={styles.row}>
          <Image
            source={require("../../assets/geranium.jpg")}
            style={styles.geraniumImage}
          />
          <Text style={styles.text}>
            Integer lobortis nec enim id pretium. Vestibulum fermentum pulvinar
            turpis nec mattis. Nunc in dictum velit. Morbi nec eleifend erat.
            Vivamus non est turpis.
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Quisque laoreet, turpis eu blandit rutrum.
            Integer lobortis nec enim id pretium. Vestibulum fermentum pulvinar
            turpis nec mattis.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { flex: 5, textAlign: "justify" },
  geraniumImage: { width: 100, height: 130, marginRight: 10 },
  lilyImage: { flex: 5, width: "10%", height: 130, marginLeft: 10 },
  poppyImage: { width: "100%", height: 165 },
  row: {
    flexDirection: "row",
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: "100%",
  },
});

export default Details;
