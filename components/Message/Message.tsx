import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const blue = "#3777F0";
const gray = "lightgray";

const myId = 'u1'
const Message = ({message}) => {
  const isMe = message.user.id === myId;

  return (
    <View style={[
        styles.container, 
        isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};

export default Message;
