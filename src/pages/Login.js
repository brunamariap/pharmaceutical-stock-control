import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";
import { ButtonPrimary } from "../components/buttons";
import api from "../services/api";
import { AuthContext } from "../contexts/auth";
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export function Login({ navigation }) {
  const [employee_id, setEmployeeId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const { login } = useContext(AuthContext);

  function logar() {
    login(employee_id, username, password);
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <View>
          <Image
            className="h-60 w-60"
            source={require("../icons/logo_blue.png")}
          />
          <Text className="text-2xl text-black self-start font-semibold">
            Entrar
          </Text>
        </View>
        <Input
          icon={<AntDesign name="idcard" size={23} color="gray" />}
          placeholder="Identificação de funcionário"
          onChangeText={(id_employee) => setEmployeeId(id_employee)}
          typeKeyboard="number-pad"
        />
        <Input
          icon={
            <MaterialCommunityIcons
              name="account-lock-open-outline"
              size={24}
              color="gray"
            />
          }
          placeholder="Senha"
          onChangeText={(password_em) => setPassWord(password_em)}
        />

        <ButtonPrimary texto={"Continuar"} press={() => logar()} />
        <Text className="font-semibold text-black mt-4">
          Não tem uma conta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-primary font-semibold">Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
}
