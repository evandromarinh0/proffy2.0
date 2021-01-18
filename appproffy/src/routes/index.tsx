import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import Landing from '../pages/Landing';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#E6E6F0' } }} >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="ForgotPassword" component={ForgotPassword} />

      {/* FROM NOW ON THESE ROUTES ARE PRIVATES */}
      <Auth.Screen name="Landing" component={Landing} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;