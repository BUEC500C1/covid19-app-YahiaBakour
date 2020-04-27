
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WorldStats from './components/worldStats';
import CountryStats from './components/countryStats';
import WorldMap from './components/worldMap';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleText}>{`Covid 19 - By Yahia Bakour \n\n\n`}</Text>
      <Button
        title="World Stats"
        onPress={() => navigation.navigate('WorldStats')}
      />
      <Button
        title="Country Stats"
        onPress={() => navigation.navigate('Country Stats')}
      />
      <Button
        title="WorldMap"
        onPress={() => navigation.navigate('WorldMap')}
      />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorldStats" component={WorldStats} />
        <Stack.Screen name="Country Stats" component={CountryStats} />
        <Stack.Screen name="WorldMap" component={WorldMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30
  }
})


export default App;
