import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Icon, Button } from "@rneui/base";
import MyModal from "../../components/modal/MyModal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

export default function PantallaInicial() {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fondo = {
    flex: 1,
    backgroundColor: isModalOpen ? "#9c9a9c" : "white",
  };

  return (
    <KeyboardAwareScrollView style={fondo}>
      <Icon
        type="material-community"
        name={"menu"}
        iconStyle={styles.iconoestilo}
        size={40}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.ubicacionactual}> *ubicación actual* </Text>
      <Text style={styles.saludo}> Hola *Nombre* </Text>
      <Text style={styles.subtitulo}>Agregué su ubicación de envio</Text>

      <Button
        title="Ubicación"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "#03B5AA",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          marginTop: 20,
          alignSelf: "center",
          marginLeft: 50,
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => setIsModalOpen(!isModalOpen)}
      />
      <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <View style={styles.containerservicio}>
        <Text style={styles.servicio}> Servicios</Text>
      </View>
      <TouchableOpacity
        style={styles.botonesservicios}
        onPress={() => navigation.navigate("comida")}
      >
        <Image
          source={require("../../../assets/botonhamburguesa.png")}
          resizeMode="contain"
          style={styles.hamburguesa}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botonesservicios}
        onPress={() => navigation.navigate("farmacia")}
      >
        <Image
          source={require("../../../assets/farmaciaboton.png")}
          resizeMode="contain"
          style={styles.farmacia}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonesservicios}>
        <Image
          source={require("../../../assets/botonsupermercado.png")}
          resizeMode="contain"
          style={styles.supermercadoboton}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonesservicios}>
        <Image
          source={require("../../../assets/otrosboton.png")}
          resizeMode="contain"
          style={styles.otrosboton}
        />
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  iconoestilo: {
    color: "black",
    marginTop: 20,
    marginLeft: 2,
    alignSelf: "flex-start",
  },
  ubicacionactual: {
    fontSize: 18,
    marginTop: -25,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  saludo: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 50,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#CF3C28",
  },
  containerservicio: {
    width: 338,
    height: 65,
    marginLeft: 44,
    marginTop: 5,
    backgroundColor: "#CF3C28",
  },
  servicio: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
    color: "white",
  },
  hamburguesa: {
    width: "40%",
    height: 280,
    marginLeft: 40,
  },
  farmacia: {
    width: "40%",
    height: 280,
    marginLeft: 220,
    marginTop: -280,
  },
  supermercadoboton: {
    width: "40%",
    height: 280,
    marginLeft: 40,
    marginTop: 10,
  },
  otrosboton: {
    width: "40%",
    height: 280,
    marginLeft: 220,
    marginTop: -280,
  },
});
