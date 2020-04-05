import React from 'reac'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigation} from '@react-navigation/stack'

import SigninScreen from '../screens/SigninScreen'
import GroupsScreen from '../screens/GroupsScreen'
import AddGroupScreen from '../screens/AddGroupScreen'
import ChatScreen from '../screens/ChatScreen'

const Stack = createStackNavigation()

function ChatFlow(){
    return(
        <NavigationContainer>
            <Stack.Navigator name="chat">
                <Stack.Screen 
                name="Signin Screen"
                component = {SigninScreen}
                options = {{headerShow : false}}
                />
                <Stack.Screen 
                name="Groups Screen"
                component = {GroupsScreen}
                options = {{title : "Groups"}}
                />
                <Stack.Screen 
                name="Add Group Screen"
                component = {AddGroupScreen}
                options = {{title : "Add Group"}}
                />
                <Stack.Screen 
                name="Chat Screen"
                component = {ChatScreen}
                options = {{title : "Chats"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MainStackNavigator(){
    return(
        ChatFlow()
    )
}

export default MainStackNavigator