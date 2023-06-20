// import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native'
// import React, { useContext, useState } from 'react'
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Constants from 'expo-constants';
// import allContext from '../context/allContext/allContext';
// import Entypo from '@expo/vector-icons/Entypo'

// export default function Header() {
//     const context = useContext(allContext);
//     const { mode, toggleMode } = context;

//     const [showTab, setShowTab] = useState(false);

//     const handleSidebar = () => {
//         setsidebar()
//     }
//     return (
//         <View >
//                 <View style={styles.header}>
//                     <View style={styles.left}>
//                         <TouchableOpacity onPress={() => setShowTab(!showTab)}>
//                             {!showTab ? <Ionicons style={styles.menu_bar} name='md-menu' size={35} /> : <Entypo
//                                 name='squared-cross' style={styles.menu_bar} size={35} color="#2f3640" />}
//                         </TouchableOpacity>
//                         <Image style={styles.logo} source={require('../assets/img/logo.png')} />
//                         <Text style={styles.logo_text}>E-Bharat</Text>
//                     </View>

//                     <View style={styles.right}>
//                         <TouchableOpacity onPress={toggleMode}>
//                             <Image style={styles.dark} source={require('../assets/img/10732830.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Ionicons style={styles.cart} name='cart' size={32} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//             {
//                 showTab &&
//                 <View style={styles.sidebar}>
//                     <Text style={styles.sidebar_text}>Indian HandiCarft </Text>
//                     <Text style={styles.sidebar_text}>Order </Text>
//                     <Text style={styles.sidebar_text}> </Text>
//                     <Text style={styles.sidebar_text}>Indian HandiCarft </Text>
//                     <Text style={styles.sidebar_text}>Indian HandiCarft </Text>
//                     <Text style={styles.sidebar_text}>Indian HandiCarft </Text>
//                     <Text style={styles.sidebar_text}>Indian HandiCarft </Text>

//                 </View>
//             }
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     header: {
//         marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
//         height: 60,
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         elevation: 15,
//         backgroundColor: 'rgb(243, 244, 246)',

//     },
//     menu_bar: {
//         backgroundColor: '#dcdde1',
//         borderRadius: 5,
//     },
//     left: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 5,
//         marginHorizontal: 10
//     },
//     logo: {
//         width: 40,
//         height: 40
//     },
//     logo_text: {
//         fontSize: 20,
//         fontWeight: '700'
//     },
//     right: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 5,
//         marginHorizontal: 10
//     },
//     dark: {
//         width: 32,
//         height: 32
//     },
//     sidebar: {
//         backgroundColor: '#dfe6e9',
//         width: '80%',
//         height: '100%',
//         padding: 20,
//         marginTop: 1,

//     },
// })



import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Constants from 'expo-constants';
import allContext from '../context/allContext/allContext';
import Entypo from '@expo/vector-icons/Entypo'

export default function Header() {
    const context = useContext(allContext);
    const { mode, toggleMode } = context;
    return (
        <View >
                <View style={styles.header}>
                    <View style={styles.left}>
                        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
                        <Text style={styles.logo_text}>E-Bharat</Text>
                    </View>

                    <View style={styles.right}>
                        <TouchableOpacity onPress={toggleMode}>
                            <Image style={styles.dark} source={require('../assets/img/10732830.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        // marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#64f3f3',
    },
    menu_bar: {
        backgroundColor: '#dcdde1',
        borderRadius: 5,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginHorizontal: 5
    },
    logo: {
        width: 40,
        height: 40
    },
    logo_text: {
        fontSize: 20,
        fontWeight: '700'
    },
    right: {
        marginHorizontal: 10
    },
    dark: {
        width: 35,
        height: 35
    },
})

