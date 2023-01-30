import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";

export function Register({ navigation }) {
  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <Input placeholder='Nome Completo'/>
        <Input placeholder='Identificação de funcionário'/>
        <Input placeholder='Foto de perfil'/>
        <Input placeholder='Senha'/>
        <Text className='text-black'>Cadastrar-se</Text>
      </View>
    </TailwindProvider>
  );
}
