import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

function ChatScreen(){
    return(
        <View>
            <Text style={styles.text}>Chat Screen</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItens:'center',
        backgroundColor:'#ebebeb'
    },
    text:{
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default ChatScreen