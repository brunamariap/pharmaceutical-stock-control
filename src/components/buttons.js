import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function ButtonWhite(props) {
  return (
    <TailwindProvider>
      <TouchableOpacity className='bg-white w-[329px] p-4 rounded-2xl mt-8' onPress={props.press}>
        <Text className='text-primary font-bold text-xl self-center'>{props.texto}</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
}

export function ButtonPrimary(props) {
  return (
    <TailwindProvider>
      <TouchableOpacity className='bg-primary w-[329px] p-4 rounded-2xl mt-8' onPress={props.press}>
        <Text className='text-white font-bold text-xl self-center'>{props.texto}</Text>
      </TouchableOpacity>
    </TailwindProvider>
  );
}