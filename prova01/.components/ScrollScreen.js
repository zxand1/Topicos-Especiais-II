import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import List from './scroll/FlatListScreen';
import Form from './scroll/FormScreen';
import Section from './scroll/SectionListScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Lista') {
                        iconName = focused
                            ? 'list'
                            : 'list-outline';
                    } else if (route.name === 'Secao') {
                        iconName = focused
                            ? 'config'
                            : 'configuration-outline';
                    } else if (route.name === 'Formulario') {
                        iconName = focused
                            ? 'form'
                            : 'form-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Lista" component={List} />
            <Tab.Screen name="Seção" component={Section} />
            <Tab.Screen name="Form" component={Form} />
        </Tab.Navigator>
    );
} 
