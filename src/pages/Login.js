import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";
import { InputIcon } from "../components/input";
import { ButtonPrimary } from "../components/buttons";

export function Login({ navigation }) {
  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <InputIcon placeholder='Identificação de funcionário'/>
        <InputIcon placeholder='Senha'/>

        <ButtonPrimary texto={"Continuar"} press={() => navigation.navigate('Inicial')}/>
        <Text className="font-semibold text-black mt-4">Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text className="text-primary font-semibold">Cadastrar-se</Text></TouchableOpacity>
      </View>
    </TailwindProvider>
  );
}
