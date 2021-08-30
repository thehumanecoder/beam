import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";;
import chatRoomsData from "../assets/dummy-data/ChatRooms";
import Chatroomitem from "../components/Chatroomitem";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => 
          <Chatroomitem chatRoom={item} />
        }
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={()=> <FlatList
          data={chatRoomsData}
          renderItem={({ item }) => 
            <Chatroomitem chatRoom={item} />
          }
          showsHorizontalScrollIndicator={false}
          horizontal
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
