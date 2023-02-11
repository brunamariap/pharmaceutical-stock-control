import React, { Children, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/auth";

export function ButtonExit(props) {
  const { user, logout } = useContext(AuthContext);
  function sair() {
    logout();
  }

  return (
    <TailwindProvider>
      <TouchableOpacity className="flex flex-row items-center gap-2" onPress={() => sair()}>
        <Text className="text-cancel text-xl">Sair</Text>
        <Ionicons name="ios-exit-outline" size={32} color="#C92A2A" />
      </TouchableOpacity>
    </TailwindProvider>
  );
}
