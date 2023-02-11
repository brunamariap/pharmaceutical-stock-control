import React from "react";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function DataProfile(props) {
  return (
    <TailwindProvider>
      <View className="mt-4">
        <Text className="text-black self-start">{props.nameData}</Text>
        <View className="w-[329px] border-b-[1px] border-b-[#C1C1C1] items-center justify-center mt-1">
          <View className='self-start'>{props.icon}</View>
          <Text className="text-gray text-xl">{props.dataUser}</Text>
        </View>
      </View>
    </TailwindProvider>
  );
}

export function IconProfile({ children }) {
  return <View>{children}</View>;
}
