import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register</Text>
      <Link href="/" asChild>
        <Button title="Go to Home" />
      </Link>
    </View>
  );
}
