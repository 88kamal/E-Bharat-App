import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Order from '../screens/Order';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false, tabBarIcon: () => {
                        return (
                            <Image style={styles.icon} source={require('../assets/img/home.png')} />
                        )
                    }
                }} />
            <Tab.Screen name="Category" component={Category} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={styles.icon} source={require('../assets/img/cat.png')} />
                    )
                }
            }} />
            <Tab.Screen name="Order" component={Order} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={styles.icon} source={require('../assets/img/order.png')} />
                    )
                }
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={styles.icon} source={require('../assets/img/cart.png')} />
                    )
                }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={styles.icon} source={require('../assets/img/avtr.png')} />
                    )
                }
            }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
icon:{
    width: 25,
    height: 25
}
})