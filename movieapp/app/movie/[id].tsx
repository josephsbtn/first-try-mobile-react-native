import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";

const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Id : {id}</Text>  
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
