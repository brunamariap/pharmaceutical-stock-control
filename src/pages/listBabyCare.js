import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TailwindProvider } from "tailwindcss-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "../components/card";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function ListBabyCare({ navigation }) {
  const [babyCare, setBabyCare] = useState([]);

  async function atualizarDados() {
    const response = await AsyncStorage.getItem("@app-farmaceutico:babyCare");
    const data = response ? JSON.parse(response) : {};
    setBabyCare(data);
    console.log(data);
  }

  useFocusEffect(useCallback(() => {
    atualizarDados();
  }, []));

  async function deleteItem(id) {
    const response = await AsyncStorage.getItem("@app-farmaceutico:babyCare");
    const previusData = response ? JSON.parse(response) : [];

    const data = previusData.filter((item) => item?.id !== id);
    setBabyCare(data);
    await AsyncStorage.setItem(
      "@app-farmaceutico:babyCare",
      JSON.stringify(data)
    );
  }

  async function UpdateItem(id) {
    const response = await AsyncStorage.getItem("@app-farmaceutico:babyCare");
    const currentData = response ? JSON.parse(response) : {};

    const data = currentData.filter((item) => item?.id === id);
    console.log(data);

    navigation.navigate("editBabyItem", data);
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex items-center justify-center gap-y-4">
        <TouchableOpacity>
          <Text className="text-black text-lg"></Text>
        </TouchableOpacity>
        <Image
            className="h-40 w-40"
            source={require("../icons/logo_blue.png")}
          />
        <Text className="font-semibold text-black text-2xl self-start ml-12">
          Linha Infantil
        </Text>
        <TouchableOpacity
          className="bg-primary w-[329px] p-4 rounded-2xl mt-8 flex flex-row gap-x-5 items-center justify-center"
          onPress={() => navigation.navigate("Cadastrar linha infantil")}
        >
          <MaterialIcons name="add-circle-outline" size={30} color="white" />
          <Text className="text-white font-bold text-xl">Novo produto</Text>
        </TouchableOpacity>

        <FlatList
          data={babyCare}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="w-[329px] border-2 border-primary rounded-lg content-center flex flex-row py-3 px-4 mt-8">
              <View className="w-[100%]">
                <Card
                  nameItem={item.nameItem}
                  price={item.priceItem}
                  quantity={item.qtdItem}
                />
                <View className="flex flex-row items-center self-end gap-x-5">
                  <TouchableOpacity
                    className="self-end mt-4"
                    onPress={() => UpdateItem(item.id)}
                  >
                    <Feather name="edit" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="self-end mt-4"
                    onPress={() => deleteItem(item.id)}
                  >
                    <AntDesign name="delete" size={32} color="#C92A2A" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </TailwindProvider>
  );
}
