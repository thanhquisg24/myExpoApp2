import EditScreenInfo from "@/components/EditScreenInfo";
import SreenLink from "@/components/SreenLink";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <SreenLink></SreenLink>
    </View>
  );
}
