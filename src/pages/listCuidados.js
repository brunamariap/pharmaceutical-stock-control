import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TailwindProvider } from "tailwindcss-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "../components/card";
import { AntDesign } from "@expo/vector-icons";

export function ListCuidados({ navigation }) {
  const [cuidados, setCuidados] = useState([]);

  async function atualizarDados() {
    const response = await AsyncStorage.getItem(
      "@app-farmaceutico:cuidados"
    );
    const data = response ? JSON.parse(response) : {};
    setCuidados(data);
    console.log(data);
  }

  useEffect(() => {
    atualizarDados();
  }, []);

  async function removeMedicamento(id) {
    const response = await AsyncStorage.getItem(
      "@app-farmaceutico:cuidados"
    );
    const previusData = response ? JSON.parse(response) : [];

    const data = previusData.filter((item) => item?.id !== id);
    setcuidados(data);
    await AsyncStorage.setItem(
      "@app-farmaceutico:cuidados",
      JSON.stringify(data)
    );
  }

  async function UpdateItem(id) {
    const response = await AsyncStorage.getItem("@app-farmaceutico:cuidados");
    const currentData = response ? JSON.parse(response) : {};

    const data = currentData.filter((item) => item?.id === id);
    console.log(data);

    navigation.navigate("editcare", data);
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex items-center justify-center gap-y-4">
        <TouchableOpacity>
          <Text className="text-black text-lg">Voltar</Text>
        </TouchableOpacity>
        <Text className="font-semibold text-black text-2xl self-start ml-12">
          Beleza e Cuidados
        </Text>
        <TouchableOpacity
          className="bg-primary w-[329px] p-4 rounded-2xl mt-8 flex flex-row gap-x-5 items-center justify-center"
          onPress={() => navigation.navigate("Cadastrar cuidados")}
        >
          <MaterialIcons name="add-circle-outline" size={30} color="white" />
          <Text className="text-white font-bold text-xl">Novo produto</Text>
        </TouchableOpacity>

        <FlatList
          data={cuidados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="w-[329px] border-2 border-primary rounded-lg content-center flex flex-row py-3 px-4 mt-8">
              <View className="w-[100%]">
                <Card
                  nameItem={item.nameItem}
                  price={item.priceItem}
                  quantity={item.qtdItem}
                />
                <TouchableOpacity className="self-end mt-4" onPress={() => removeMedicamento(item.id)}>
                  <AntDesign name="delete" size={32} color="#C92A2A" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </TailwindProvider>
  );
}
