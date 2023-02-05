import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export function Inicio({ navigation }) {
  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center gap-y-4">
        <Text className="font-semibold text-black text-2xl">Categorias</Text>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista medicamentos')}>
            <View className="bg-primary self-center p-6 rounded-2xl">
              <MaterialIcons name="medical-services" size={80} color="white" />
            </View>
            <Text className="self-center font-semibold text-black">
              Medicamentos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-primary self-center p-6 rounded-2xl">
              <MaterialCommunityIcons name="baby-bottle-outline" size={78} color="white" />
            </View>
            <Text className="self-center font-semibold text-black">
              Linha Infantil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-primary self-center p-6 rounded-2xl">
              <Image className="w-20 h-20" source={require('../icons/vitamin.png')}/>
            </View>
            <Text className="self-center font-semibold text-black">
              Suplementos e Vitaminas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-primary self-center p-6 rounded-2xl">
            <Image className="w-20 h-20" source={require('../icons/perfume.png')}/>
            </View>
            <Text className="self-center font-semibold text-black">
              Beleza e Cuidados
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
}
