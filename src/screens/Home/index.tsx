import React, { FC } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";

import Header from "../../components/Header";

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Header title="TodoApp" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/rose_bud.jpg")}
        />
      </View>
      <Text style={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis est
        a leo lacinia mattis. Morbi viverra est sodales nunc euismod pulvinar.
      </Text>
      <Text style={styles.bodyText}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Curabitur turpis sapien, euismod eu mi vitae,
        malesuada auctor magna. Cras sed ipsum tincidunt, tincidunt risus ut,
        feugiat nunc. In posuere arcu vel sem bibendum, nec iaculis metus
        gravida. Aliquam mattis et nisi vel feugiat. Curabitur in sollicitudin
        justo. Pellentesque cursus erat nisl, ut consectetur nisi fringilla
        quis. Nunc accumsan porttitor lorem. Donec sit amet nisi sit amet magna
        ullamcorper tempus. Cras felis velit, porttitor ut dolor vel, volutpat
        elementum odio. Ut nec egestas nunc. Etiam ultrices malesuada placerat.
        Fusce id ante vitae erat elementum porta in non sapien. Sed rutrum in
        massa non mollis. Nulla eu tempor mauris, quis volutpat dui. Proin nibh
        odio, rhoncus in dolor sagittis, ultricies tincidunt nunc.
      </Text>
      <Text style={styles.bodyText}>
        {" "}
        Fusce at felis vel sapien pellentesque ullamcorper. Mauris ac erat
        tortor. In hac habitasse platea dictumst. Ut nec iaculis enim. Vivamus
        id suscipit libero. Sed in imperdiet lorem. In vestibulum gravida
        eleifend. Aenean ut pellentesque sem. Nulla porttitor, urna eu hendrerit
        rhoncus, metus enim scelerisque est, quis aliquam purus risus sit amet
        est. Proin mollis ligula a mattis elementum. Vestibulum finibus posuere
        venenatis. Sed ornare accumsan ligula, ac tristique augue bibendum eget.
        Donec sit amet luctus magna. Nunc at mauris dolor. Vestibulum eu laoreet
        dolor. Aenean ipsum orci, ultrices vel urna finibus, pharetra viverra
        arcu. Fusce ultrices orci vel mi rhoncus molestie. Sed posuere metus
        orci, iaculis viverra mauris varius ac. Sed pellentesque velit porta
        erat porta aliquet. Vivamus pellentesque purus eu tortor dignissim, ut
        efficitur odio commodo.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    paddingVertical: 20,
    paddingRight: 130,
    paddingLeft: 20,
    textAlign: "justify",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imageContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default Home;
