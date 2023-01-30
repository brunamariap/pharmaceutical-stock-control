import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";

export function Login({ navigation }) {
  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <Input placeholder='Identificação de funcionário'/>
        <Input placeholder='Senha'/>
      </View>
    </TailwindProvider>
  );
}
