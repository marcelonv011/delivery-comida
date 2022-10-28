import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Candadorecovery from "../../components/recovery/Candadorecovery";
import { Input, Icon, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Cambiocontraseña() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={styles.fondo}>
      <Candadorecovery />
      <Text style={styles.codigocontraseña}>
        {" "}
        Introduzca su nueva contraseña
      </Text>
      <Text style={styles.subtitulo}>
        {" "}
        Su contraseña nueva debe ser diferente a la anterior.
      </Text>
      <Input
        placeholder="Coloque su contraseña"
        containerStyle={styles.containerinput}
        password={true}
        secureTextEntry={showPassword ? false : true}
        leftIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconoestilo}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Confirme su contraseña"
        containerStyle={styles.containerinput}
        password={true}
        secureTextEntry={showPassword ? false : true}
        leftIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconoestilo}
            onPress={() => setShowPassword(!showPassword)}
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
        onPress={() => navigation.navigate("login")}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "white",
  },
  codigocontraseña: {
    fontSize: 24,
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
  iconoestilo: {
    color: "black",
  },
  containerinput: {
    width: "85%",
    marginLeft: 30,
    marginTop: 5,
  },
});
