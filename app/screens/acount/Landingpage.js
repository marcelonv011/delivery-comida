import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Inicialimagen from "../../components/landingpage/Inicialimagen";

export default function Landingpage() {
  const navigation = useNavigation();

  return (
    <View style={styles.fondo}>
      <Text style={styles.mensaje}>Bienvenido</Text>
      <Text style={styles.mensaje2}> Logueaté o registraté para comenzar</Text>
      <Inicialimagen />
      <Button
        title="REGISTRARSE"
        titleStyle={{ fontWeight: "700", color: "black" }}
        buttonStyle={{
          backgroundColor: "#eae9ef",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
        }}
        containerStyle={{
          marginTop: 20,
          marginLeft: 20,
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("registro")}
      />
      <Button
        title="LOGIN"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 0,
          borderRadius: 5,
        }}
        containerStyle={{
          marginTop: -55,
          marginLeft: 220,
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "white",
  },
  mensaje: {
    fontSize: 40,
    marginTop: 60,
    textAlign: "center",
    fontWeight: "bold",
  },
  mensaje2: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    color: "#CF3C28",
    fontWeight: "bold",
  },
});
