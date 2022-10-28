import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Correorecovery from "../../components/recovery/Codigorecovery";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function RecoveryCodigo() {
  const navigation = useNavigation();
  return (
    <View style={styles.fondo}>
      <Correorecovery />
      <Text style={styles.codigocontraseña}> restablecer contraseña</Text>
      <Text style={styles.subtitulo}>
        {" "}
        Confirmar restablecimiento de contraseña
      </Text>
      <Button
        title="CONFIRMAR"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          marginTop: 80,
          alignSelf: "center",
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("cambiocontraseña")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "white",
  },
  codigocontraseña: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30,
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#CF3C28",
  },
  containerinput2: {
    width: "85%",
    marginLeft: 30,
    marginTop: 20,
  },
  iconoestilo: {
    color: "black",
  },
});
