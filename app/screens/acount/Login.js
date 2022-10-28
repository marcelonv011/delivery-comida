import { StyleSheet, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/logofacifood.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.texto}>Login</Text>
      <Text style={styles.subtitulo}>por favor logueate para continuar.</Text>
      <LoginForm />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 40,
    marginTop: 20,
    marginLeft: 40,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 5,
    color: "#CF3C28",
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    height: 190,
    marginTop: 40,
  },
});
