import { Text as DefaultText } from "react-native";

import { useThemeColor } from "../../constants/Themed";

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const font = { fontFamily: "Montserrat" };

  return <DefaultText style={[{ color }, style, font]} {...otherProps} />;
}
