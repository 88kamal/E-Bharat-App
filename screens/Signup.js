import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function Signup({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () =>{
        try {
            const res = await createUserWithEmailAndPassword(auth,email,password);
            alert("Signup successful");
        } catch (error) {
            alert("signup failed: ");
        }

    }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      <Text style={styles.text_signup}>Sign up to your account</Text>
      <Text style={styles.text_or}>Or <Text onPress={() => navigation.navigate('Login')} style={styles.text_login}>Login</Text> </Text>

      <View style={styles.inputs}>
        <TextInput placeholder='Eamil address' value={email}  onChangeText={setEmail} style={styles.input_One}/>
        <TextInput secureTextEntry={true} placeholder='Password' value={password} onChangeText={setPassword} style={styles.input_Two}/>
        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btn_text}>Signup</Text>
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
    text_signup:{
        fontSize: 30,
        fontWeight:'700'
    },
    text_or:{
        fontSize: 20,
    },
    text_login:{
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