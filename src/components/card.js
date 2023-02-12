import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { AntDesign } from "@expo/vector-icons";

export function Card(props) {
  return (
    <TailwindProvider>
      <Text className="font-semibold text-black">{props.nameItem}</Text>
      <Text className="font-semibold text-black">Preço: R$ {props.price}</Text>
      <Text className="font-semibold text-black">
        Quantidade: {props.quantity}
      </Text>
    </TailwindProvider>
  );
}
