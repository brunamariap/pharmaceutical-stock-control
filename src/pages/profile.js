import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { DataProfile } from "../components/dataProfile";
import { AuthContext } from "../contexts/auth";
import { ButtonExit } from "../components/buttonExit";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export function Profile({ navigation }) {
  const { user } = useContext(AuthContext);

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center gap-y-4">
        <View className="self-start ml-10">
          <Text className="text-black text-3xl text-semibold">Perfil</Text>
        </View>
        <DataProfile
          icon={<Feather name="user" size={28} color="#3D3D3D" />}
          nameData={"Nome Completo"}
          dataUser={user.employee_full_name}
        />
        <DataProfile
          icon={<Feather name="user" size={28} color="#3D3D3D" />}
          nameData={"Nome de usuário"}
          dataUser={user.username}
        />
        <DataProfile
          icon={<AntDesign name="idcard" size={28} color="#3D3D3D" />}
          nameData={"Identificação de funcionário"}
          dataUser={user.employee_id}
        />
        <View className="pt-8">
          <ButtonExit />
        </View>
      </View>
    </TailwindProvider>
  );
}
