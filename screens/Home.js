import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, LogBox } from 'react-native'
import Constants from 'expo-constants';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Filter from '../components/Filter';
import allContext from '../context/allContext/allContext';
import AllProducts from './AllProducts';
import { fireDB } from '../firebase/firebase';
import React, { useEffect, useState, useContext } from 'react'
import { collection, addDoc, query, orderBy, onSnapshot, getDocs, limit } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  const context = useContext(allContext);
  const { mode } = context;

  const [product, setProduct] = useState([]);

  // console.log(product)
  // get product
  const getProductData = async () => {
    try {
      const q = query(
        collection(fireDB, "products"),
        // orderBy("date"),
        // limit(8)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
      });
      return () => data;
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getProductData();
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])

  }, []);

  const [searchkey, setSearchkey] = useState('')

  const filterProduct = product.filter((obj) => obj.title.toLowerCase().includes(searchkey))




  const addToCart = (product) => {
    alert('Add to Cart Successfully');
  }

  

  return (
    <View style={{backgroundColor:mode==='dark'?'white':'rgb(32, 33, 36)'}}>
      <ScrollView nestedScrollEnabled={true}>
        <Header />
        <Hero />
        <Category />
        <Filter searchkey={searchkey} setSearchkey={setSearchkey} />
        <View style={[styles.product,{backgroundColor:mode==='dark'?'white':'rgb(32, 33, 36)'}]}>
          <Text style={[styles.cat_text, { color: mode === 'dark' ? 'black' : "white" }]}>Our Latest Collection</Text>
          <View style={{backgroundColor:mode==='dark'?'white':'rgb(32, 33, 36)'}} >
            <FlatList
              data={filterProduct}
              renderItem={({ item }) => (
                <View style={[styles.containers,{backgroundColor:mode==='dark'?'white':'rgb(46, 49, 55)'}]} >
                  <TouchableOpacity style={styles.main} onPress={() => navigation.navigate('ProductInfo', { id: item.id })} >
                    <Image style={styles.image} source={{ uri: item.imageUrl }} />
                    <Text style={[styles.bharat_title]}>E-BHARAT</Text>
                    <Text style={[styles.title,{color:mode==='dark'?'black':"white"}]}>{item.title.substr(0, 30)}</Text>
                    <Text style={[styles.title,{color:mode==='dark'?'black':"white"}]}>₹{item.price}</Text>
                    <TouchableOpacity onPress={() => addToCart()} style={{
                      backgroundColor: 'rgb(219, 39, 119)',
                      padding: 10,
                      marginTop: 15,
                      borderRadius: 10
                    }}>
                      <Text style={{
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white'


                      }}>Add To Cart</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>

              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  containers: {
    backgroundColor: 'rgb(229, 231, 235)',
    margin: 10,
    width: '90%',
    height: 500,
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 5
  },
  product: {
    backgroundColor: 'white'
  },
  main: {
    alignSelf: 'center',
    marginTop: 25
  },
  image: {
    width: 290,
    height: 300,
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
    marginTop: 10,
    color: '#a4b0be'

  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
  }
})