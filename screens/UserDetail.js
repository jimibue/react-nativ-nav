import React from 'react'
import {View, Text} from 'react-native'

const UserDetail = ({route})=>{
    const {id, first_name,last_name, email,avatar} = route.params
    return(
        <View>
            <Text>User detail</Text>
            <Text>id: {id}</Text>
            <Text>first_name: {first_name}</Text>
            <Text>last_name: {last_name}</Text>
            <Text>email: {email}</Text>
            <Text>avatar: {avatar}</Text>
        </View>
    )
}

export default UserDetail