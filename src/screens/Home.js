import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'

import Profile from './Profile';

function HomeScreen() {
    return (
        <Profile></Profile>
    );
}
function News() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ข่าวสาร</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Home() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Homescreen" component={HomeScreen} options={{
                headerShown: false, 
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" ios="ios-home" android="md-home" />
                ),
            }} />
            <Tab.Screen name="News" component={News} options={{
                headerShown: false, 
                tabBarLabel: 'News',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="paper" ios="ios-paper" android="md-paper" />
                ),
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                headerShown: false, 
                tabBarLabel: 'Setting',
                tabBarIcon: ({ color, size }) => (
                    <Icon color="#005C9E" name="settings" ios="ios-settings" android="md-settings" />
                ),
            }}/>
        </Tab.Navigator>

    );
}