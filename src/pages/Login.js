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
  const [users, setUsers] = useState([]);

  const getDados = async () => {
    const response = await api.get("posts");
    setPosts(response.data);
    console.log(response.data);
  };

  function login() {
    getDados();
    for (var i = 0; i < users.length; i++) {
      var obj = users[i];
      for (var key in obj) {
        console.log(key);
        /* if (email == "cm@mail.com" && senha == "12345678") {
          setUser({ email: email, status: "Logado" });
        } */
        var value = obj[key];
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
        {/* <ButtonPrimary texto={"Continuar"} press={login} /> */}
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
