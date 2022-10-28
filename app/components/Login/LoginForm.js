import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Button } from "@rneui/themed";

export default function LoginForm() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Input
        placeholder="Coloque su email"
        containerStyle={styles.containerinput}
        leftIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconoestilo}
          />
        }
      />
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
      <Text
        style={styles.recuperarcontraseña}
        onPress={() => navigation.navigate("recovery")}
      >
        ¿Olvido su contraseña?
      </Text>
      <Button
        title={"Iniciar sesión"}
        containerStyle={styles.botoncontainerlogin}
        buttonStyle={styles.botonlogin}
        onPress={() => navigation.navigate("navigationdrawer")}
      />
      <Text style={styles.noregistrado}>
        ¿Aún no tiene cuenta?{" "}
        <Text
          style={styles.registreseahora}
          onPress={() => navigation.navigate("registro")}
        >
          Registrarme ahora
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconoestilo: {
    color: "#0b205b",
  },
  containerinput: {
    width: "85%",
    marginLeft: 30,
    marginTop: 20,
  },
  botoncontainerlogin: {
    marginTop: 30,
    marginLeft: 135,
    width: "35%",
  },
  botonlogin: {
    backgroundColor: "black",
    borderRadius: 30,
  },
  recuperarcontraseña: {
    color: "#868392",
    fontSize: 14,
    marginLeft: 230,
    marginTop: 0,
  },
  noregistrado: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
  },
  registreseahora: {
    color: "#0078D7",
  },
});
