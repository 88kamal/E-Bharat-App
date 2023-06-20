import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import allContext from '../context/allContext/allContext';
import Header from './Header';
import BottomTab from './BottomTab';


export default function Layout(props) {
    const context = useContext(allContext);
    const { mode, toggleMode } = context;
    return (
        <>
            <View style={{ backgroundColor: mode === 'dark' ? 'white' : 'black' }}>
                <Header />
                <View>
                    <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
                        {props.children}
                    </ScrollView>
                </View>
                {/* <BottomTab/> */}
                
            </View>
        </>

    )
}

