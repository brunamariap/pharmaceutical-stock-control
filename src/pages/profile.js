import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { DataProfile } from "../components/dataProfile";
import { AuthContext } from "../contexts/auth";
import { ButtonExit } from "../components/buttonExit";
import { AntDesign } from "@expo/vector-icons";
import { IconProfile } from "../components/dataProfile";

export function Profile({ navigation }) {
  const { user } = useContext(AuthContext);

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center gap-y-4">
        <View className="self-start ml-10">
          <Text className="text-black text-3xl text-semibold">Perfil</Text>
        </View>
        <IconProfile>
          <AntDesign name="idcard" size={24} color="#676767" />
        </IconProfile>
        <DataProfile
          icon={<AntDesign name="idcard" size={32} color="#676767" />}
          nameData={"Nome Completo"}
          dataUser={user.employee_full_name}
        />
        <DataProfile
          icon={<AntDesign name="idcard" size={32} color="#676767" />}
          nameData={"Identificação de funcionário"}
          dataUser={user.employee_id}
        />
        <DataProfile nameData={"Nome de usuário"} dataUser={user.username} />

        <View className="pt-8">
          <ButtonExit />
        </View>
      </View>
    </TailwindProvider>
  );
}
