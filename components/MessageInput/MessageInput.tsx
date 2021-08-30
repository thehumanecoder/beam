import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./style";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const sendMessage = () => {
  // send message
};

const onPlusClicked = () => {
  // do something
};

const onPress = () => {
  if (message) {
    sendMessage();
  } else {
    onPlusClicked();
  }
};

const MessageInput = () => {
  const [message, setMessage] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Message  .."
          value={message}
          onChangeText={setMessage}
        />
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          style={styles.icon}
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={20} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
