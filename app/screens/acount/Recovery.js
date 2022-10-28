import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Button } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Buzonrecovery from "../../components/recovery/Buzonrecovery";

export default function Recovery() {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={styles.fondo}>
      <Buzonrecovery />
      <Text style={styles.olvidocontraseña}> ¿Olvidaste tu contraseña?</Text>
      <Text style={styles.subtitulo}>
        {" "}
        Introduzca su email y recibirá un codigo para restablecer tu contraseña
      </Text>
      <Input
        placeholder="Email"
        containerStyle={styles.containerinput2}
        leftIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconoestilo}
          />
        }
      />
      <Button
        title="CONFIRMAR"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          marginTop: 10,
          alignSelf: "center",
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("recoverycodigo")}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "white",
  },
  olvidocontraseña: {
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
