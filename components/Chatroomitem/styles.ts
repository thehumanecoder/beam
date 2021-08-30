import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 10,
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    badgeContainer: {
      backgroundColor: "#3777F0",
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: 45,
      top: 10,
      borderColor: "white",
      borderWidth: 1,
    },
    badgeText: {
      color: "white",
      fontSize: 12,
    },
    name: {
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 3,
    },
    time: {
      color: "gray",
    },
    text: {
      color: "gray",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rightContainer: {
      flex: 1,
      justifyContent: "center",
    },
  });
  
  export default styles;