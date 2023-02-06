import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ButtonWhite } from "../components/buttons";
import { TailwindProvider } from "tailwindcss-react-native";

export function Home({navigation}) {
  return (
    <TailwindProvider>
      <View className="bg-primary flex-1 items-center justify-center gap-y-4">
        <View>
          <Image className="h-60 w-60" source={require('../icons/logo_white.png')}/>
        </View>
        <ButtonWhite texto={"Login"} press={() => navigation.navigate('Login')}/>
        <ButtonWhite texto={"Cadastrar-se"} press={() => navigation.navigate('Register')}/>
      </View>
    </TailwindProvider>
  );
}
