import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Button(props) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>{props.texto}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 329,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 16,
    borderRadius: 16,
  },
  textButton: {
    color: "#3180BB",
    fontWeight: "bold",
    alignSelf:"center",
    fontSize: 16,
  },
});
