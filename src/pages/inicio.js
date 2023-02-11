import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/auth";
import { ButtonExit } from "../components/buttonExit";

export function Inicio({ navigation }) {
  return (
    <TailwindProvider>
      <View className="bg-white flex-1 items-center justify-center gap-y-4">
        <View className='flex flex-row justify-around items-center gap-x-9'>
          <Image
            className="h-44 w-44"
            source={require("../icons/logo_blue.png")}
          />
          <ButtonExit/>
        </View>

        <View>
          <Text className="font-semibold text-black text-2xl">Categorias</Text>
        </View>

        <View className="flex items-center justify-center gap-7">
          <View className="flex flex-row gap-x-9">
            <TouchableOpacity
              onPress={() => navigation.navigate("Lista medicamentos")}
            >
              <View className="bg-primary self-center p-6 rounded-3xl">
                <MaterialIcons
                  name="medical-services"
                  size={80}
                  color="white"
                />
              </View>
              <Text className="self-center font-semibold text-black">
                Medicamentos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Lista linha infantil")}
            >
              <View className="bg-primary self-center p-6 rounded-3xl">
                <MaterialCommunityIcons
                  name="baby-bottle-outline"
                  size={78}
                  color="white"
                />
              </View>
              <Text className="self-center font-semibold text-black">
                Linha Infantil
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-x-9">
            <TouchableOpacity
              onPress={() => navigation.navigate("Lista suplementos")}
            >
              <View className="bg-primary self-center p-6 rounded-3xl">
                <Image
                  className="w-20 h-20"
                  source={require("../icons/vitamin.png")}
                />
              </View>
              <Text className="self-center font-semibold text-black">
                Suplementos
              </Text>
              <Text className="self-center font-semibold text-black">
                e Vitaminas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Lista cuidados")}
            >
              <View className="bg-primary self-center p-6 rounded-3xl">
                <Image
                  className="w-20 h-20"
                  source={require("../icons/perfume.png")}
                />
              </View>
              <Text className="self-center font-semibold text-black">
                Beleza e
              </Text>
              <Text className="self-center font-semibold text-black">
                Cuidados
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TailwindProvider>
  );
}
