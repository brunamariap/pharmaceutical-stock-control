import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Inicio } from "../pages/inicio";
import { Profile } from "../pages/profile";
import { ListMedicamentos } from "../pages/listMedicamentos";
import { AddMedicamento } from "../pages/addMedicamento";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Guias = createBottomTabNavigator();

export function RoutesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Inicial" component={RoutesBottomTab} />
      <Stack.Screen name="Lista medicamentos" component={ListMedicamentos} />
      <Stack.Screen name="Cadastrar medicamentos" component={AddMedicamento} />
    </Stack.Navigator>
  );
}

export function RoutesBottomTab() {
  return (
    <Guias.Navigator screenOptions={{ headerShown: false }}>
      <Guias.Screen 
        name="Início" 
        component={Inicio} 
        options={{tabBarIcon: ({}) => <AntDesign name="home" size={32} color="black" />}}
      />
      <Guias.Screen name="Perfil" component={Profile} options={{tabBarIcon: ({}) => <FontAwesome5 name="user-circle" size={30} color="black" />}}/>
    </Guias.Navigator>
  );
}
