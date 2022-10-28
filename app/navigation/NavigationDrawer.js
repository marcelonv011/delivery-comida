import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PantallaInicial from "../screens/menu/PantallaInicial";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="pantallainicial"
        component={PantallaInicial}
        options={{ title: "Pantalla inicial", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
