import { Text, StyleSheet, Pressable } from "react-native";

// import { useThemeColor } from "../../constants/Themed";

export function Button(props) {
  const { onPress, title } = props;
  const { style } = props;
  // const { style, lightColor, darkColor } = props;
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.5 : 1 },
        style,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFC800",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
    fontFamily: "Montserrat",
  },
});
