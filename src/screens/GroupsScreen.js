import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

function GroupsScreen(){
    return(
        <View>
            <Text style={styles.text}>Groups Screen</Text>
        
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

export default GroupsScreen