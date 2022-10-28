import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../../enviroments";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";

export default function ApiMap() {
  const navigation = useNavigation();
  const [mapRegion, setMapRegion] = useState({
    latitude: -25.611963,
    longitude: -54.561449,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permiso para acceder a la localización fue denegada");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={mapRegion}
      >
        <Marker coordinate={mapRegion} title="Ubicación actual" />
      </MapView>
      <Button
        title="Cancelar"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "#CF3C28",
          borderRadius: 30,
        }}
        containerStyle={{
          marginTop: 60,
          marginLeft: 260,
          alignSelf: "center",
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("pantallainicial")}
      />
      <Button
        title="Guardar"
        titleStyle={{ fontWeight: "700", color: "white" }}
        buttonStyle={{
          backgroundColor: "#00C898",
          borderRadius: 30,
        }}
        containerStyle={{
          marginTop: -55,
          marginLeft: -150,
          alignSelf: "center",
          width: 180,
          height: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("pantallainicial")}
      />
      <View style={styles.searchcontainer}>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.input }}
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: "es",
            types: "address",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  map: {
    width: "100%",
    height: "70%",
    marginTop: 20,
  },
  searchcontainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 10,
    padding: 10,
    borderRadius: 0,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
});
