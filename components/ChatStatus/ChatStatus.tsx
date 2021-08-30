import React from 'react';
import { Text, View, Image } from "react-native";
import styles from "./styles";
export default function ChatStatus({user}) {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: user.imageUri
          }}
          style={styles.image}
        />
        {chatRoom.newMessages &&  <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>}
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
      
    );
  }
  