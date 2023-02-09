import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";
import { ButtonPrimary } from "../components/buttons";
import api from "../services/api";

export function Login({ navigation }) {
  const [employee_id, setEmployeeId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const [posts, setPosts] = useState([]);

  const getDados = async () => {
    const response = await api.get("posts");
    //setPosts(response.data);
    //console.log(response.data);
  };

  const login = async () => {
    getDados()
    for (let i = 0; i < posts.length; i++) {
      let obj = posts[i];
      let id_employee = obj['employee_id']
      let username_employee = obj['username'];
      let password_employee = obj['password'];
      //console.log(id_employee, username_employee, password_employee)

      if (employee_id === id_employee && username_employee === username && password_employee === password){
        console.log('entrou')
      }
    }
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center">
        <View>
          <Image
            className="h-60 w-60"
            source={require("../icons/logo_blue.png")}
          />
          <Text className="text-2xl text-black self-start">Entrar</Text>
        </View>
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

        <ButtonPrimary
          texto={"Continuar"}
          press={() => navigation.navigate("Inicial")}
        />
        <ButtonPrimary texto={"Continuar"} press={login} />
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
