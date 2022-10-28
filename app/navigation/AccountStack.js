import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/acount/Login";
import Recovery from "../screens/acount/Recovery";
import Registro from "../screens/acount/Registro";
import Landingpage from "../screens/acount/Landingpage";
import RecoveryCodigo from "../screens/acount/RecoveryCodigo";
import Cambiocontraseña from "../screens/acount/Cambiocontraseña";
import NavigationDrawer from "./NavigationDrawer";
import ApiMap from "../components/apimap/ApiMap";
import Comida from "../screens/menu/Comida";
import Farmacia from "../screens/menu/Farmacia";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landing-page"
          component={Landingpage}
          options={{ title: "landing page", headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "login", headerShown: false }}
        />
        <Stack.Screen
          name="navigationdrawer"
          component={NavigationDrawer}
          options={{ title: "pantalla inicial", headerShown: false }}
        />
        <Stack.Screen
          name="apimap"
          component={ApiMap}
          options={{ title: "Mapa", headerShown: false }}
        />
        <Stack.Screen
          name="comida"
          component={Comida}
          options={{ title: "Comida", headerShown: false }}
        />
        <Stack.Screen
          name="farmacia"
          component={Farmacia}
          options={{ title: "farmacia", headerShown: false }}
        />
        <Stack.Screen
          name="registro"
          component={Registro}
          options={{ title: "registro", headerShown: false }}
        />
        <Stack.Screen
          name="recovery"
          component={Recovery}
          options={{ title: "recovery", headerShown: false }}
        />
        <Stack.Screen
          name="recoverycodigo"
          component={RecoveryCodigo}
          options={{ title: "recovery codigo", headerShown: false }}
        />
        <Stack.Screen
          name="cambiocontraseña"
          component={Cambiocontraseña}
          options={{ title: "Cambio contraseña", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
