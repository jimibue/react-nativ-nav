import HomeScreen from "./Home"
import React from 'react'
import SettingsScreen from "./Settings"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetail from "./UserDetail";
import UpdateInfo from "./UpdateInfo";
import HeartRateSetting from "./HeartRateSettings";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="UserDetail" component={UserDetail}/>
    </Stack.Navigator>
    )
}

const SettingsStack = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="UpdateInfo" component={UpdateInfo}/>
        <Stack.Screen name="HeartRateSettings" component={HeartRateSetting}/>
    </Stack.Navigator>
    )
}



const BottomTabs = () =>{
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack}/>
        <Tab.Screen name="SettingsStack" component={SettingsStack}/>
      </Tab.Navigator>
    )
  }
  export default BottomTabs