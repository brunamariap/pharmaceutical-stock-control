import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function Input(props) {
  return (
    <TailwindProvider>
      <View className="w-[329px] border border-primary rounded-lg py-4 px-2 mt-8 flex flex-row items-center gap-x-5">
        <View className='start justify-self-start'>{props.icon}</View>
        <TextInput
          secureTextEntry = {props.is_password?true:false}
          keyboardType={props.typeKeyboard}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          defaultValue={props.default}
        />
      </View>
    </TailwindProvider>
  );
}

export function InputIcon(props) {
  return (
    <TailwindProvider>
      <View className="w-[329px] border border-primary rounded-lg p-4 mt-8">
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </TailwindProvider>
  );
}
