import React from "react";
import { StyleSheet, Text, View } from "react-native";


export function Login() {
    return (
      <View style={styles.container}>
          <Text style={styles.textButton}>Entrar</Text>
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