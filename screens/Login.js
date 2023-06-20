import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () =>{
        try {
            const res = await signInWithEmailAndPassword(auth,email,password);
            await AsyncStorage.setItem('currentUser',JSON.stringify(res));
           const user =  await AsyncStorage.getItem('currentUser');
        //    console.log(user)
            alert("Login successful");
            navigation.navigate('BottomNavigator');
        } catch (error) {
            alert("Login failed: ");
        }

    }
  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      <Text style={styles.text_login}>Sign up to your account</Text>
      <Text style={styles.text_or}>Or <Text onPress={() => navigation.navigate('Signup')} style={styles.text_signup}>Signup</Text> </Text>

      <View style={styles.inputs}>
      <TextInput placeholder='Eamil address' value={email}  onChangeText={setEmail} style={styles.input_One}/>
        <TextInput secureTextEntry={true} placeholder='Password' value={password} onChangeText={setPassword} style={styles.input_Two}/>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width:100,
        height:100
    },
    text_login:{
        fontSize: 30,
        fontWeight:'700'
    },
    text_or:{
        fontSize: 20,
    },
    text_signup:{
        fontSize: 15,
        color:'rgb(124, 58, 237)',
        fontWeight:'bold',
    },
    inputs:{
        marginTop:40,
    },
    input_One:{
        backgroundColor: '#f5f6fa',
        paddingLeft:8,
        width:350,
        height: 45,
        borderWidth:1,
        borderRadius:8,
        fontSize:18,
        fontWeight:'500',
        borderColor:'#dcdde1',
        marginBottom:10
    },
    input_Two:{
        backgroundColor: '#f5f6fa',
        paddingLeft:8,
        width:350,
        height: 45,
        borderWidth:1,
        borderRadius:8,
        fontSize:18,
        fontWeight:'500',
        borderColor:'#dcdde1',
        marginBottom:15
    },
    btn:{
        backgroundColor:'rgb(124, 58, 237)',
        padding:12,
        borderRadius:8,
        alignItems:'center'
    },
    btn_text:{
        color:'white',
        fontSize:15,
        fontWeight:'800',

    }

})