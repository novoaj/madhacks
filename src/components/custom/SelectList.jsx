import { StyleSheet } from "react-native";
import { SelectList as DefaultSelectList } from "react-native-dropdown-select-list"; // yarn add react-native-dropdown-select-list

export function SelectList(props) {
  return (
    <DefaultSelectList
      {...props}
      fontFamily="Montserrat"
      boxStyles={styles.boxStyles}
      inputStyles={styles.inputStyles}
      dropdownStyles={styles.dropdownStyles}
      dropdownItemStyles={styles.dropdownItemStyles}
      dropdownTextStyles={styles.dropdownTextStyles}
    />
  );
}

const styles = StyleSheet.create({
  boxStyles: {
    borderColor: "#012169",
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
    height: 60,
  },
  inputStyles: {
    paddingTop: 6,
  },
  dropdownStyles: {
    borderColor: "#012169",
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 0,
  },
  dropDownItemStyles: {
    borderColor: "#012169",
    borderWidth: 2,
  },
  dropdownTextStyles: {
    // None
  },
});
