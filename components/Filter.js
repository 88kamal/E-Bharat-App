import { View, Text, TextInput, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-screens'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import allContext from '../context/allContext/allContext';

export default function Filter({searchkey, setSearchkey, }) {
    const context = useContext(allContext);
    const { mode } = context;
    return (
        <View style={{
            margin:10,
            
        }}>
            <View style={[styles.searchSection,{backgroundColor:mode==='dark'?'rgb(243, 244, 246)':'rgb(46, 49, 55)'}]}>
                <Ionicons style={styles.searchIcon} name="search" size={20} color={mode==='dark' ? 'black' : 'white'} />
                <TextInput
                    style={[styles.input,{backgroundColor:mode==='dark'?'rgb(243, 244, 246)':'rgb(46, 49, 55)'}]}
                    placeholder="Search here..."
                    placeholderTextColor={mode==='dark' ? 'black' : 'white'}
                    value={searchkey}
                    onChangeText={setSearchkey}
                />
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:5,
        borderRadius:10
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        borderRadius: 10,
        color:'white',
        borderRadius:10

    },
})