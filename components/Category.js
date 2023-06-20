// import { View, Text, ScrollView, StyleSheet, Button } from 'react-native'
// import React from 'react'


// export default function Category() {
//   return (
//     <View>a
//         <ScrollView  horizontal={true} style={[styles.container, {backgroundColor:mode==='dark'?'white':'rgb(46, 49, 55)'}]}>  
//                 <Text style={{ marginTop:20}}>Horizontal ScrollView</Text>  

//             </ScrollView> 
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//     container:{  
//         flex: 1,  
//     }, 
// })

import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import allContext from '../context/allContext/allContext';

export default function Category({ navigation }) {
    const context = useContext(allContext);
    const { mode, toggleMode } = context;
    return (
        <View style={{ backgroundColor: mode === 'dark' ? 'white' : 'rgb(32, 33, 36)' }}>
            <Text style={[styles.cat_text, { color: mode === 'dark' ? 'black' : "white" }]}>Explore Categories</Text>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.all}>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]} >
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/7417/7417708.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Fashion</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2390/2390124.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Shirts</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/9736/9736126.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Jacket</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/3137/3137807.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Mobiles</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/189/189561.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Electronics</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/5479/5479005.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Shoes</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/1375/1375634.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Home</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                        <Image style={styles.image} source={{ uri: "https://cdn-icons-png.flaticon.com/128/3145/3145765.png" }} />
                        <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>Sports &  Books</Text>
                    </View>
                </View>


            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(243, 244, 246)',
        borderRadius: 10,
        width: 145,
        height: 145,
        // borderWidth:1,
        // borderColor:'rgb(229, 231, 235)',
        elevation: 5,
        padding: 10,
        marginBottom: 5

    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    all: {
        flexDirection: 'row',
        gap: 10,
        margin: 10
    },
    cat_text: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    con_text: {
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: '800'

    }
})