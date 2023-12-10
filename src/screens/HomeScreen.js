import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Display } from '../utils'
import { Colors } from '../contants'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.siginButton}
                onPress={() => navigation.navigate('Signin')}
            >
                <Text
                    style={styles.signinButtonText}>
                    Đăng Nhập
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    siginButton: {
        backgroundColor: '#000',
        marginHorizontal: 20,
        borderRadius: 8,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 8 },
        shadowOpacity: 0.27,
        elevation: 4,
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
    },
})