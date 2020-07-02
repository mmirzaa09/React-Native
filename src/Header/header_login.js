import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {InputText} from '../Component';
import { Input  } from 'react-native-elements'

const Header_Login = () => {
    return(
        <View style={styles.content}>
                <InputText/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    Text2: {
        height: '50%',
        width: '50%',
        backgroundColor: '#fff',
        borderRadius: 4
    }
})

export default Header_Login;
