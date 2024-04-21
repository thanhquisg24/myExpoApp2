import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const PageOneById = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Stack.Screen
        options={{
          title: `PageOneById: ${id}`,
        }}
      />
      <Text style={{ margin: 25, fontSize: 38 }}>HI iam a: {id}</Text>
    </View>
  );
};

export default PageOneById;
