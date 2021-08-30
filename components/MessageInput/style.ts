import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding:10
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    marginRight:10,
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    padding: 5,
    borderColor:'lightgray',
    borderWidth:1,
    flexDirection: "row"
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
  input:{
      flex:1
  },
  icon:{
       marginHorizontal:5
  }
});

export default styles;
