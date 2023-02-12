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
import { Feather } from "@expo/vector-icons";

export function ListMedicamentos({ navigation }) {
  const [medicamentos, setMedicamentos] = useState([]);

  async function atualizarDados() {
    const response = await AsyncStorage.getItem(
      "@app-farmaceutico:medicamentos"
    );
    const data = response ? JSON.parse(response) : {};
    setMedicamentos(data);
    console.log(data);
  }

  useEffect(() => {
    atualizarDados();
  }, []);

  async function deleteItem(id) {
    const response = await AsyncStorage.getItem(
      "@app-farmaceutico:medicamentos"
    );
    const previusData = response ? JSON.parse(response) : [];

    const data = previusData.filter((item) => item?.id !== id);
    setMedicamentos(data);
    await AsyncStorage.setItem(
      "@app-farmaceutico:medicamentos",
      JSON.stringify(data)
    );
  }

  async function UpdateItem(id) {
    const response = await AsyncStorage.getItem(
      "@app-farmaceutico:medicamentos"
    );
    const currentData = response ? JSON.parse(response) : {};

    const data = currentData.filter((item) => item?.id === id);
    console.log(data);

    navigation.navigate("editMedicamentos", data);
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex items-center justify-center gap-y-4">
        <TouchableOpacity>
          <Text className="text-black text-lg">Voltar</Text>
        </TouchableOpacity>
        <Text className="font-semibold text-black text-2xl self-start ml-12">
          Medicamentos
        </Text>
        <TouchableOpacity
          className="bg-primary w-[329px] p-4 rounded-2xl mt-8 flex flex-row gap-x-5 items-center justify-center"
          onPress={() => navigation.navigate("Cadastrar medicamentos")}
        >
          <MaterialIcons name="add-circle-outline" size={30} color="white" />
          <Text className="text-white font-bold text-xl">Novo produto</Text>
        </TouchableOpacity>

        <FlatList
          data={medicamentos}
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
