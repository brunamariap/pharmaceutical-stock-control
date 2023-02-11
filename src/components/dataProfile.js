import React from "react";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function DataProfile(props) {
  return (
    <TailwindProvider>
      <View className="mt-4">
        <Text className="text-black self-start mt-5">{props.nameData}</Text>
        <View className="w-[329px] border-b-[1px] border-b-[#C1C1C1] flex flex-row items-center py-4">
          <View className='self-start mr-5'>{props.icon}</View>
          <Text className="text-black text-xl">{props.dataUser}</Text>
        </View>
      </View>
    </TailwindProvider>
  );
}

export function IconProfile({ children }) {
  return <View>{children}</View>;
}
