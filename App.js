import MainPage from './src/screens/MainPage';
import EachBook from './src/screens/EachBook';
import EditBook from './src/screens/EditBook';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Provider from './src/context/Provider';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#0000ff' },
  headerTitleStyle: { color: 'white' },
  headerTitleColor: 'white',
};

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={globalScreenOptions}
        >
          <Stack.Screen name="Home" component={MainPage} />
          <Stack.Screen name="Book" component={EachBook} />
          <Stack.Screen name="Edit" component={EditBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
