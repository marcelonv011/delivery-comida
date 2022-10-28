import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import AccountStack from "./app/navigation/AccountStack";

export default function App() {
  return (
    <View style={styles.container}>
      <AccountStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
