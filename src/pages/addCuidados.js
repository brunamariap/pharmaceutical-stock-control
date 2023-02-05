import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Input } from "../components/input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export function AddCuidados({ navigation }) {
  const [nameItem, setNameItem] = useState("");
  const [priceItem, setPriceItem] = useState(0);
  const [qtdItem, setQtdItem] = useState("");
  const [cuidados, setCuidados] = useState([]);

  async function atualizarDados() {
    const response = await AsyncStorage.getItem("@app-farmaceutico:cuidados");
    const data = response ? JSON.parse(response) : {};
    setCuidados(data);
    console.log(data);
  }


  useEffect(() => {
    atualizarDados();
  }, []);
  

  async function addCuidados() {
    const id = uuid.v4();

    const newData = {
      id,
      nameItem,
      priceItem,
      qtdItem,
    };

    const response = await AsyncStorage.getItem("@app-farmaceutico:cuidados");
    const previusData = response ? JSON.parse(response) : [];

    const data = [...previusData, newData];

    await AsyncStorage.setItem("@app-farmaceutico:cuidados", JSON.stringify(data));
    console.log(newData);
  }

  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center gap-y-4">
        <Text className="font-semibold text-black text-2xl self-start ml-12 border-b-2 border-b-black">Cadastrar Produto</Text>
        <Text className="text-black">Categoria: Beleza e cuidados</Text>

        <View>
            <Input placeholder='Nome do item' onChangeText={(nameItem) => setNameItem(nameItem)}/>
            <Input placeholder='Preço' onChangeText={(priceItem) => setPriceItem(priceItem)}/>
            <Input placeholder='Quantidade disponível' onChangeText={(qtdItem) => setQtdItem(qtdItem)}/>
        </View>
        
        <TouchableOpacity className='bg-primary w-[329px] p-4 rounded-2xl mt-8' onPress={addCuidados}>
          <Text className='text-white font-bold text-xl self-center'>Finalizar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[329px] p-4 rounded-2xl bg-[#C92A2A] mt-10" onPress={() => navigation.navigate('Lista cuidados')}>
            <Text className="text-white font-bold text-xl self-center">Cancelar</Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
}
