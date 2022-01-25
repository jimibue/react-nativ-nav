import React from 'react';
import {View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = ({navigation}) =>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={()=> navigation.navigate('Details',{
        id:1,
        name:'Detail 1'
      })} title='Navigate to Details 1'/>
           <Button onPress={()=> navigation.navigate('Details',{
        id:2,
        name:'Detail 2'
      })} title='Navigate to Details 2'/>
    </View>
  )
}

const DetailsScreen = ({navigation, route}) =>{
  const {id, name} = route.params
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Button onPress={()=> navigation.navigate('Another')} title='Navigate to Another'/>
    </View>
  )
}


const AnotherScreen = () =>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Another Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

const Stack1 = ()=>{
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Details" component={DetailsScreen}/>
    <Stack.Screen name="Another" component={AnotherScreen}/>
  </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Main = ()=>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Main Screen</Text>
    </View>
  )
}
const Settings = ()=>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Settings Screen</Text>
    </View>
  )
}

const Tabs = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main}/>
      <Tab.Screen name="Stack1" component={Stack1}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
  )
}

const App = () =>{
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}
export default App

