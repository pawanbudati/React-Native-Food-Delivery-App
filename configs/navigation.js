import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Restaurent from "../screens/Restaurent/Restaurent";
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{ contentStyle: { paddingHorizontal: 5 } }}
          name="home"
          component={Home}
        />
        <Stack.Screen name="restaurent" component={Restaurent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
