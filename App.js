// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
// flex: 1,
// backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
//   },
// });

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import AllState from './context/allContext/allState';
import BottomNavigator from './bottomNav/BottomNavigator';
import ProductInfo from './screens/ProductInfo';
import AllProducts from './screens/AllProducts';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Fashion from './screens/Category/Fashion';
import Shirt from './screens/Category/Shirt';
import Jackets from './screens/Category/Jackets';
import Mobile from './screens/Category/Mobile';
import Electronics from './screens/Category/Electronics';
import Shoes from './screens/Category/Shoes';
import Homes from './screens/Category/Homes';
import SportsBook from './screens/Category/SportsBook';
const Stack = createNativeStackNavigator();

function App() {

  return (
    <Provider store={store}>
      <AllState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown:false}}  />
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={{ headerShown: false }} />
        {/* <Stack.Screen name="AllProducts" component={AllProducts} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Fashion" component={Fashion} options={{ headerShown: false }} />
        <Stack.Screen name="Shirt" component={Shirt} options={{ headerShown: false }} />
        <Stack.Screen name="Jackets" component={Jackets} options={{ headerShown: false }} />
        <Stack.Screen name="Mobile" component={Mobile} options={{ headerShown: false }} />
        <Stack.Screen name="Electronics" component={Electronics} options={{ headerShown: false }} />
        <Stack.Screen name="Shoes" component={Shoes} options={{ headerShown: false }} />
        <Stack.Screen name="Homes" component={Homes} options={{ headerShown: false }} />
        <Stack.Screen name="SportsBook" component={SportsBook} options={{ headerShown: false }} />



        </Stack.Navigator>
      </NavigationContainer>
    </AllState>
    </Provider>
    

  );
}

export default App;