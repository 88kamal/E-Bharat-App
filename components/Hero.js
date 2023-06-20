import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Hero() {
    return (
        <View>
            <Image style={styles.image} source={{
                uri: "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg"
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 393,
        height: 210
    }
})