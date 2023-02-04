import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { InputIcon } from "../components/input";
import { ButtonPrimary } from "../components/buttons";

export function Register({ navigation }) {
  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <InputIcon placeholder='Nome Completo'/>
        <InputIcon placeholder='Identificação de funcionário'/>
        <InputIcon placeholder='Foto de perfil'/>
        <InputIcon placeholder='Senha'/>
        <ButtonPrimary texto={"Continuar"} press={() => navigation.navigate('Inicial')}/>
      </View>
    </TailwindProvider>
  );
}
