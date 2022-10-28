import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import { Button, Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function MyModal({ isModalOpen, setIsModalOpen }) {
  const navigation = useNavigation();
  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={"slide"}>
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalStyle}>
            <Text style={styles.modaltitulo}>
              {" "}
              ¿Quieres cambiar la ubicación de envio?
            </Text>
            <Text style={styles.ubicacionactual}> *ubicación actual*</Text>
            <Button
              buttonStyle={{
                backgroundColor: "#dddddd",
                borderRadius: 30,
              }}
              containerStyle={{
                marginTop: 20,
                alignSelf: "center",
                width: 400,
                height: 45,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate("apimap")}
            >
              <Icon type="material-community" name="map-marker" />
              <Text style={styles.estilobotondireccion}>Dirección nueva</Text>
            </Button>
            <Button
              title="Cerrar"
              titleStyle={{ fontWeight: "700", color: "white" }}
              buttonStyle={{
                backgroundColor: "#CF3C28",
                borderRadius: 30,
              }}
              containerStyle={{
                marginTop: 20,
                alignSelf: "center",
                width: 180,
                height: 45,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => setIsModalOpen(!setIsModalOpen)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalStyle: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modaltitulo: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  ubicacionactual: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  estilobotondireccion: {
    fontWeight: "700",
    marginTop: 2,
  },
});
