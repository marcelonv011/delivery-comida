import { StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Button } from "@rneui/themed";

export default function Registro() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAwareScrollView>
      <Text style={styles.registrotexto}>Registrarme</Text>
      <Text style={styles.subtitulo}>
        Rellene todos los campos para continuar
      </Text>
      <Input
        placeholder="Nombre completo"
        containerStyle={styles.containerinput}
        leftIcon={
          <Icon
            type="material-community"
            name="account"
            iconStyle={styles.iconoestilo}
          />
        }
      />
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
      <Input
        placeholder="Fecha de nacimiento"
        containerStyle={styles.containerinput2}
        leftIcon={
          <Icon
            type="material-community"
            name="calendar"
            iconStyle={styles.iconoestilo}
          />
        }
      />
      <Input
        placeholder="DNI"
        containerStyle={styles.containerinput2}
        leftIcon={
          <Icon
            type="material-community"
            name="card-account-details-outline"
            iconStyle={styles.iconoestilo}
          />
        }
      />
      <Input
        placeholder="Número de teléfono"
        containerStyle={styles.containerinput2}
        leftIcon={
          <Icon
            type="material-community"
            name="cellphone"
            iconStyle={styles.iconoestilo}
          />
        }
      />
      <Input
        placeholder="Coloque su contraseña"
        containerStyle={styles.containerinput2}
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
        placeholder="Confirmar contraseña"
        containerStyle={styles.containerinput2}
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
        title="REGISTRARSE"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          marginTop: 0,
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
  registrotexto: {
    fontSize: 30,
    marginTop: 60,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    color: "#CF3C28",
  },
  iconoestilo: {
    color: "#0b205b",
  },
  containerinput: {
    width: "85%",
    marginLeft: 30,
    marginTop: 10,
  },
  containerinput2: {
    width: "85%",
    marginLeft: 30,
    marginTop: -5,
  },
});
