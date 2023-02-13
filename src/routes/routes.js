import React, { useContext } from "react";
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
import { FontAwesome5 } from "@expo/vector-icons";
import { AddCuidados } from "../pages/addCuidados";
import { ListCuidados } from "../pages/listCuidados";
import { ListBabyCare } from "../pages/listBabyCare";
import { AddBabyCare } from "../pages/addBabyCare";
import { AddSuplementos } from "../pages/addSuplemento";
import { ListSuplemento } from "../pages/listSuplemento";
import { AuthContext } from "../contexts/auth";
import { EditdBabyCare } from "../pages/editBabyCare";
import { EditMedicamentos } from "../pages/editMedicamentos";
import { EditCare } from "../pages/editCuidados";
import { EditSuplementos } from "../pages/editSuplementos";

const Stack = createNativeStackNavigator();
const Guias = createBottomTabNavigator();

export function RoutesStack() {
  const { user } = useContext(AuthContext);

  if (user.status === "Logado") {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={RoutesBottomTab} />
        <Stack.Screen name="Lista medicamentos" component={ListMedicamentos} />
        <Stack.Screen
          name="Cadastrar medicamentos"
          component={AddMedicamento}
        />
        <Stack.Screen name="editMedicamentos" component={EditMedicamentos}/>
        <Stack.Screen name="Lista cuidados" component={ListCuidados} />
        <Stack.Screen name="Cadastrar cuidados" component={AddCuidados} />
        <Stack.Screen name="editCare" component={EditCare}/>
        <Stack.Screen name="Lista linha infantil" component={ListBabyCare} />
        <Stack.Screen name="Cadastrar linha infantil" component={AddBabyCare} />
        <Stack.Screen name="editBabyItem" component={EditdBabyCare} />
        <Stack.Screen name="Lista suplementos" component={ListSuplemento} />
        <Stack.Screen name="Cadastrar suplemento" component={AddSuplementos} />
        <Stack.Screen name="editSuplementos" component={EditSuplementos}/>
      </Stack.Navigator>
    );
  }
}

export function RoutesBottomTab() {
  return (
    <Guias.Navigator screenOptions={{ headerShown: false }}>
      <Guias.Screen
        name="Início"
        component={Inicio}
        options={{
          tabBarIcon: ({}) => <AntDesign name="home" size={32} color="black" />,
        }}
      />
      <Guias.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome5 name="user-circle" size={30} color="black" />
          ),
        }}
      />
    </Guias.Navigator>
  );
}
