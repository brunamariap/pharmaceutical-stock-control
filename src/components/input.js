import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function Input(props) {
  return (
    <TailwindProvider>
      <View className='w-[329px] border border-primary rounded-lg p-4 mt-8'>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </TailwindProvider>
  );
}

export function InputIcon(props) {
  return (
    <TailwindProvider>
      <View className='w-[329px] border border-primary rounded-lg p-4 mt-8'>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </TailwindProvider>
  );
}
