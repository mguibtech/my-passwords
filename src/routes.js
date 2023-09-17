
import { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from './pages/home'
import { Passwords } from './pages/passwords'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {

    return(
        <Tab.Navigator  screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    headerShow: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focus, size, color}) =>{
                        if(focus){
                            return <Ionicons size={size} color={color} name='home' />
                        }
                        return <Ionicons size={size} color={color} name='home-outline' />
                        
                    }
                }}
            />
            <Tab.Screen
                name='passwords'
                component={Passwords}
                options={{
                    headerShow: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focus, size, color}) =>{
                        if(focus){
                            return <Ionicons size={size} color={color} name='lock-closed' />
                        }
                        return <Ionicons size={size} color={color} name='lock-closed-outline' />
                        
                    }
                }}
            />
        </Tab.Navigator>
    )
}