import React from 'react';
import {StyleSheet,FlatList,SafeAreaView} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/core';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import ChatRoomData from '../assets/dummy-data/Chats';
export default function ChatRoomScreen (){
    const route = useRoute();
    const navigation = useNavigation();
    navigation.setOptions({title:"Biswas"})
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={ChatRoomData.messages}
                renderItem = {({item})=><Message message={item}/>}
                inverted
            />
            <MessageInput/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    page:{
        backgroundColor: '#fff',
        flex:1
    }
});

