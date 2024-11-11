import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 8, // Android only
    shadowColor: "black", // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
    shadowRadius: 6, // iOS only
    shadowOpacity: 0.26, // iOS only
  },
});
