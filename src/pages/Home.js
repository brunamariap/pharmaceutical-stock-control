import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/buttonWhite";

export function Home() {
  return (
    <View style={styles.container}>
      <Button texto={'Continuar'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3180BB",
    alignItems: "center",
    justifyContent: "center",
  },
});
