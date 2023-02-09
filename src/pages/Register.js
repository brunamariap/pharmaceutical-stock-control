import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";
import { ButtonPrimary } from "../components/buttons";
import api from "../services/api";
import uuid from "react-native-uuid";

export function Register({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [employee_full_name, setEmployeeFullName] = useState("");
  const [employee_id, setEmployeeId] = useState("");
  const [password, setPassWord] = useState("");
  const [username, setUsername] = useState("");

  const getDados = async () => {
    const response = await api.get("posts");
    setPosts(response.data);
    console.log(response.data);
  };

  const setDados = async () => {
    if (
      password !== "" &&
      employee_full_name !== "" &&
      username !== "" &&
      employee_id !== ""
    ) {
      await api.post("posts", {
        id: uuid.v4(),
        employee_full_name,
        employee_id,
        username,
        password,
      });
      getDados();
    }
  };

  const removerDado = async (id) => {
    await api.delete(`posts/${id}`);
    getDados();
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <View>
          <Image
            className="h-60 w-60"
            source={require("../icons/logo_blue.png")}
          />
          <Text className="text-2xl text-black self-start font-semibold">Cadastro</Text>
        </View>
        <Input
          placeholder="Nome Completo"
          onChangeText={(full_name) => setEmployeeFullName(full_name)}
        />
        <Input
          placeholder="Identificação de funcionário"
          onChangeText={(id_employee) => setEmployeeId(id_employee)}
        />
        <Input
          placeholder="Nome de Usuário"
          onChangeText={(username) => setUsername(username)}
        />
        <Input
          placeholder="Senha"
          onChangeText={(password_em) => setPassWord(password_em)}
        />

        {/* <ButtonPrimary
          texto={"Continuar"}
          press={() => navigation.navigate("Inicial")}
        /> */}
        <ButtonPrimary texto={"Continuar"} press={setDados} />
      </View>
    </TailwindProvider>
  );
}
