import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        borderWidth:3,
        borderColor:'green',
        borderRadius:50,
        padding:1
      }}>
      <Image style={{
        width: 100,
        height: 100,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#ff3838',
        borderRadius:50
      }} source={{uri:'https://cdn-icons-png.flaticon.com/128/4140/4140047.png'}}/>
      </View>
      <Text style={{
        color:'green',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20
      }}>{'<DevKnus/>'}</Text>
    </View>
  )
}