import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fireDB } from '../firebase/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, getDocs, limit } from 'firebase/firestore';


export default function AllProducts({navigation}) {
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
    }, []);
    return (
        <View>
            <Text>AllProducts</Text>
            <View style={styles.main}>
                <FlatList
                    data={product}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('ProductInfo')} >
                            <Image style={{ width: 100, height: 100 }} source={{ uri: item.imageUrl }} />
                            <Text>{item.title.substr(0, 30)}</Text>

                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})