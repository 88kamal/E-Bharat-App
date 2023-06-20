import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import BottomNavigator from '../bottomNav/BottomNavigator';
import allContext from '../context/allContext/allContext';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../firebase/firebase';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function ProductInfo({ route, navigation }) {
    const { id } = route.params;

    console.log(id);
    const [products, setProducts] = useState('')

    useEffect(() => {
        getProductData()

    }, [])

    const getProductData = async () => {
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
        } catch (error) {
            console.log(error)
        }
    }

    const context = useContext(allContext);
    const { mode } = context;

    const addToCart = () =>{
        alert('Add to Cart Successfully');
    }

    return (
        <View>
            <ScrollView>
                <Header/>
                {/* <Hero/> */}
                <View style={[styles.product, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }]}>
                    <View style={{ backgroundColor: mode === 'dark' ? 'white' : 'rgb(46, 49, 55)' }} >
                        <View style={[styles.containers]} >
                            <View style={styles.main} >
                                <Image style={styles.image} source={{ uri: products.imageUrl }} />
                                <Text style={[styles.bharat_title]}>E-BHARAT</Text>
                                <Text style={[styles.title, { color: mode === 'dark' ? 'black' : "white" }]}>{products.title}</Text>
                                <Text style={[styles.title, { color: mode === 'dark' ? 'black' : "white" }]}>₹{products.price}</Text>
                                <TouchableOpacity onPress={() => addToCart()} style={{
                                    backgroundColor: 'rgb(219, 39, 119)',
                                    padding: 10,
                                    marginTop: 35,
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        alignSelf: 'center',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: 'white'


                                    }}>Add To Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    containers: {
        // backgroundColor: 'rgb(229, 231, 235)',
        margin: 10,
        width: '90%',
        height: 689,
        // borderRadius: 20,
        alignSelf: 'center',
        // elevation: 5
    },
    product: {
        // backgroundColor: 'white'
    },
    main: {
        alignSelf: 'center',
        marginTop: 25
    },
    image: {
        width: 350,
        height: 450,
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#dcdde1'
    },
    cat_text: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    bharat_title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#a4b0be'

    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
    }
})