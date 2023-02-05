import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { InputIcon } from "../components/input";
import { ButtonPrimary } from "../components/buttons";
import api from "../services/api";
import uuid from "react-native-uuid";

export function Register({ navigation }) {
  const [posts, setPosts] = useState([]);

  const getDados = async () => {
    const response = await api.get("posts");
    setPosts(response.data);
  };

  const setDados = async () => {
    await api.post("posts", {
      id: uuid.v4(),
      employee_full_name: "Mariana",  
      employee_id: 1290,
      password: 890
    });
    getDados();
  };

  const removerDado = async (id) => {
    await api.delete(`posts/${id}`);
    getDados();
  };

  useEffect(() => {
    getDados();
  }, [])

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <InputIcon placeholder="Nome Completo" />
        <InputIcon placeholder="Identificação de funcionário" />
        <InputIcon placeholder="Foto de perfil" />
        <InputIcon placeholder="Senha" />
        <ButtonPrimary
          texto={"Continuar"}
          press={() => navigation.navigate("Inicial")}
        />
        <TouchableOpacity onPress={setDados}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
}
