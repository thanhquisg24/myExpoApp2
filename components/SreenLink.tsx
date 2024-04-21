import React from "react";
import { Button } from "react-native";

import { Link } from "expo-router";
import { View } from "./Themed";

export default function SreenLink(props: {
  children?: React.ReactNode | JSX.Element | JSX.Element[] | undefined;
}) {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          rowGap: 15,
          columnGap: 15,
        }}
      >
        <Link href="/" asChild>
          <Button title="Logout" />
        </Link>

        {props.children}
      </View>
    </View>
  );
}
