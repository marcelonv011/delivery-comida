import { StyleSheet, View, Image } from "react-native";
import React from "react";

export default function Inicialimagen() {
  return (
    <View style={styles.fondoimagen}>
      <Image
        source={require("../../../assets/recovery2.png")}
        resizeMode="contain"
        style={styles.imageninicial}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fondoimagen: {
    marginLeft: 5,
    marginTop: 10,
    width: 405,
    borderRadius: 40,
  },
  imageninicial: {
    width: 400,
    height: 300,
    marginTop: 40,
    marginLeft: 0,
  },
});
