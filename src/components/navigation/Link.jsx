import { Link as DefaultLink } from "expo-router";
import { Text, StyleSheet } from "react-native";

export function Link(props) {
  const { href, title } = props;
  return (
    <DefaultLink href={href} title={title} styles={styles.link}>
      <Text style={styles.text}>{props.title}</Text>
    </DefaultLink>
  );
}

const styles = StyleSheet.create({
  link: {
    margin: 10,
  },
  text: {
    color: "#012169",
    fontFamily: "Montserrat_Bold",
    fontSize: 16,
  },
});
