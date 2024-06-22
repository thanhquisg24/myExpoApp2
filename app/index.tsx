import EditScreenInfo from '@/components/EditScreenInfo';
import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        columnGap: 15,
      }}
    >
      <Text>Login</Text>
      <Link href="/register" asChild>
        <Button title="Open Register" />
      </Link>

      <Link href="/(tabs)/home" asChild>
        <Button title="Open Tab Home" />
      </Link>

      <Link href="/(tabs)/(one)/one" asChild>
        <Button title="Open Tab one" />
      </Link>

      <Link href="/(tabs)/two" asChild>
        <Button title="Open Tab two" />
      </Link>
      <Link href="/hello" asChild>
        <Button title="Hello" />
      </Link>

      <Link href="/sticker-smash" asChild>
        <Button title="sticker-smash" />
      </Link>

      <Link href="/(tabs)/home" asChild>
        <Button title="Login" />
      </Link>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}
