import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Cart() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image style={{
        width: '40%',
        height: '20%',
        alignSelf:'center'
      }} source={{uri:'https://cdn-icons-png.flaticon.com/128/1170/1170576.png'}}/>
      {/* <Text style={{
        color:'green',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20
      }}>Order Successfully</Text> */}
    </View>
  )
}