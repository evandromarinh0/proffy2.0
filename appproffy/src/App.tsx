import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;