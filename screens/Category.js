import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import allContext from '../context/allContext/allContext';
import Constants from 'expo-constants';
import { collection, addDoc, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore';
import { fireDB } from '../firebase/firebase';
import Header from '../components/Header';

export default function Category({ navigation }) {
  const context = useContext(allContext);
  const { mode, toggleMode } = context;
  const [product, setProduct] = useState([]);

  // get product
  const getProductData = async () => {
    try {
      const q = query(
        collection(fireDB, "products"),
        // orderBy("date"),
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
  }, []);

  const addToCart = (product) => {
    alert('Add to Cart Successfully');
  }

  const [searchkey, setSearchkey] = useState('')


  return (
    <ScrollView>
      <Header />
      <View style={[styles.containers, { backgroundColor: mode === 'dark' ? 'white' : 'rgb(32, 33, 36)' }]}>
        <Text style={[styles.cat_text, { color: mode === 'dark' ? 'black' : "white" }]}>Our Women Collection</Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.all}>
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes('saree')).map((item, index) => {
                return (
                  <Text key={item.id} onPress={() => navigation.navigate('ProductInfo', { id: item.id })}>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? '#f5f6fa' : 'rgb(46, 49, 55)' }]} >
                      <Image style={styles.image} source={{ uri: item.imageUrl }} />
                      <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>{item.title.substr(0, 10)}</Text>
                    </View>
                  </Text>
                )
              })}
          </View>
        </ScrollView>

        <Text style={[styles.cat_text, { color: mode === 'dark' ? 'black' : "white" }]}>For Men Collection</Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.all}>
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes('shirt')).map((item, index) => {
                return (
                  <Text key={item.id} onPress={() => navigation.navigate('ProductInfo', { id: item.id })}>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? '#f5f6fa' : 'rgb(46, 49, 55)' }]} >
                      <Image style={styles.image} source={{ uri: item.imageUrl }} />
                      <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>{item.title.substr(0, 10)}</Text>
                    </View>
                  </Text>
                )
              })}
          </View>
        </ScrollView>

        <Text style={[styles.cat_text, { color: mode === 'dark' ? 'black' : "white" }]}>Our Jackets Collection
        </Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.all}>
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes('jacket')).map((item, index) => {
                return (
                  <Text key={item.id} onPress={() => navigation.navigate('ProductInfo', { id: item.id })}>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? '#f5f6fa' : 'rgb(46, 49, 55)' }]} >
                      <Image style={styles.image} source={{ uri: item.imageUrl }} />
                      <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>{item.title.substr(0, 10)}</Text>
                    </View>
                  </Text>
                )
              })}
          </View>
        </ScrollView>

        <Text style={[styles.cat_text, { color: mode === 'dark' ? 'black' : "white" }]}>Our Mobile Collection
        </Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.all}>
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes('mobile')).map((item, index) => {
                return (
                  <Text key={item.id} onPress={() => navigation.navigate('ProductInfo', { id: item.id })}>
                    <View style={[styles.container, { backgroundColor: mode === 'dark' ? '#f5f6fa' : 'rgb(46, 49, 55)' }]} >
                      <Image style={styles.image} source={{ uri: item.imageUrl }} />
                      <Text style={[styles.con_text, { color: mode === 'dark' ? 'black' : "white" }]}>{item.title.substr(0, 10)}</Text>
                    </View>
                  </Text>
                )
              })}
          </View>
        </ScrollView>
      </View>



    </ScrollView>

  )
}

const styles = StyleSheet.create({
  containers: {
    // marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: 'rgb(243, 244, 246)',
    // width: '100%',
    // height: 100,

  },

  container: {
    borderRadius: 10,
    width: 145,
    height: 180,
    // borderWidth: 1,
    // borderColor: '#dfe4ea',
    elevation: 5,
    padding: 10,
    marginBottom: 5,

  },
  image: {
    width: 100,
    height: 130,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 8,
    borderWidth: 2,
    // borderColor: ''
  },
  all: {
    flexDirection: 'row',
    gap: 10,
    margin: 10
  },
  cat_text: {
    fontSize: 20,
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