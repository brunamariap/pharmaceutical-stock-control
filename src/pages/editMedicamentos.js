import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useRoute } from "@react-navigation/native";

export function EditMedicamentos({ navigation }) {
    const [medicamentos, setMedicamentos] = useState([]);
    const route = useRoute();
    const currentData = route.params;
    const [nameItem, setNameItem] = useState(currentData[0].nameItem);
    const [priceItem, setPriceItem] = useState(currentData[0].priceItem);
    const [qtdItem, setQtdItem] = useState(currentData[0].qtdItem);

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

  async function editItem() {
    const id = currentData[0].id;
    console.log(currentData[0])

    const newData = {
      id,
      nameItem,
      priceItem,
      qtdItem,
    };

    if (nameItem && priceItem && qtdItem) {
      await deleteItem(id)
      const response = await AsyncStorage.getItem("@app-farmaceutico:medicamentos");
      const previusData = response ? JSON.parse(response) : [];

      const data = [...previusData, newData];

      await AsyncStorage.setItem(
        "@app-farmaceutico:medicamentos",
        JSON.stringify(data)
      );
      console.log(newData);
      navigation.navigate('Lista medicamentos')
    }
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center gap-y-4">
        <Text className="font-semibold text-black text-2xl self-start ml-12 border-b-2 border-b-black">
          Cadastrar Produto
        </Text>
        <Text className="text-black">Categoria: Medicamentos</Text>

        <View>
          <Input
            placeholder="Nome do item"
            onChangeText={(nameItem) => setNameItem(nameItem)}
            default={currentData[0].nameItem}
          />
          <Input
            placeholder="Preço"
            onChangeText={(priceItem) => setPriceItem(priceItem)}
            default={currentData[0].priceItem}
            typeKeyboard="number-pad"
          />
          <Input
            placeholder="Quantidade disponível"
            onChangeText={(qtdItem) => setQtdItem(qtdItem)}
            default={currentData[0].qtdItem}
            typeKeyboard="number-pad"
          />
        </View>

        <TouchableOpacity
          className="bg-primary w-[329px] p-4 rounded-2xl mt-8"
          onPress={editItem}
        >
          <Text className="text-white font-bold text-xl self-center">
            Finalizar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[329px] p-4 rounded-2xl bg-[#C92A2A] mt-10"
          onPress={() => navigation.navigate("Lista medicamentos")}
        >
          <Text className="text-white font-bold text-xl self-center">
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
}
