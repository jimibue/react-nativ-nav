import React from 'react';
import {View, Text} from 'react-native'
import { Button } from 'react-native-elements';


const SettingsScreen = ({navigation}) =>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Settings Screen</Text>
      <Button title='update User' onPress={()=> navigation.navigate('UpdateInfo')}/>
      <Button title='Heart sttuff' onPress={()=> navigation.navigate('HeartRateSettings')}/>
    </View>
  )
}

export default SettingsScreen