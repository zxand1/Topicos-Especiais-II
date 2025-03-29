import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../prova01/.components/AppNavigator';
import LoginScreen from '../prova01/.components/ LoginScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
