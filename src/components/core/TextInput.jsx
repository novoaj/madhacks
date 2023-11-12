import { TextInput as DefaultTextInput, StyleSheet } from "react-native";

// import { useThemeColor } from '../../constants/Themed';

export function TextInput(props) {
  // const { style, lightColor, darkColor } = props;
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultTextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: "#012169",
    borderWidth: 2,
    marginBottom: 10,
    padding: 15,
    borderRadius: 50,
    fontFamily: "Montserrat",
  },
});
