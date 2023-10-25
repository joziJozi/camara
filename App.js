import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Index from './screens/deputados/Index';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <>
      <PaperProvider>       
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Deputados" component={Index} options={{title: 'Deputados'}}></Stack.Screen>
       
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
