import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Text as RNText, ScrollView} from 'react-native'
import { Text, Card, Button } from 'react-native-elements';


const HomeScreen = ({navigation}) =>{
  const [users, setUsers] = useState([])  
  useEffect(()=>{
      getUsers()
  },[]) 
  const getUsers = async()=>{
      try {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        setUsers(res.data.data)
      } catch (error) {
          console.log(error)
      }

  } 

  const renderUsers = ()=>{
      return users.map(u=>{
          return(
            <Card>
            <Card.Title>{`${u.first_name} ${u.last_name}`}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  u.avatar,
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              {u.email}
            </Text>
            <Button
              onPress={()=> navigation.navigate('UserDetail',{...u})}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
          )
      })
  }
  return (
    <ScrollView>
      <RNText>Home Screen</RNText>
      {renderUsers()}
    </ScrollView>
  )
}

export default HomeScreen
