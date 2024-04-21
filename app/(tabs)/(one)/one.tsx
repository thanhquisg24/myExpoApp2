import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import SreenLink from "@/components/SreenLink";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <SreenLink>
        <Link href="/(tabs)/(one)/details" asChild>
          <Button title="Open details" />
        </Link>

        <Link href="/(tabs)/(one)/123" asChild>
          <Button title="Open details 123" />
        </Link>

        <Link href="/(tabs)/(one)/456" asChild>
          <Button title="Open details 456" />
        </Link>
      </SreenLink>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
