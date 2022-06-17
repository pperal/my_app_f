

import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from '../normalize';
import SignIn from './SignIn';

const SetNewPass = ({ navigation }) => {
    const [inputs, setInputs] = useState({});
    function navigate() {
        navigation.navigate(SignIn);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bg1}></View>
            <View style={styles.card}>
                <Text style={styles.text_title}>ลืมรหัสผ่าน</Text>
                <View style={styles.space}>
                    <Text style={styles.text}>รีเซ็ตรหัสผ่านด้วย</Text>
                    <TextInput
                        style={styles.input}
                        key="field1"
                        name="field1"
                        placeholder="หมายเลขบัตรประชาชน(13 หลัก)"
                        keyboardType='numeric'
                        maxLength={10}
                        onChange={({ target }) => setInputs(state => ({ ...state, field1: target.value }))} value={inputs.field1} />
                </View>
                <View style={styles.space}>
                    <Text style={styles.text}>เลขบัตรประชาชน</Text>
                    <TextInput
                        style={styles.input}
                        key="field2"
                        name="field2"
                        placeholder="รหัสผ่าน"
                        onChange={({ target }) => setInputs(state => ({ ...state, field2: target.value }))} value={inputs.field2} />
                </View>

                <View style={styles.space}>
                    <TouchableOpacity
                        style={styles.button_log_in}>
                        <Text style={styles.buttonText_l} onPress={() => navigation.goBack()}>กลับ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button_sign_up}
                        onPress=''
                    >
                        <Text style={styles.buttonText_s}>ถัดไป</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#e9ebee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 270,
        backgroundColor: '#005C9E',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    card: {
        flexDirection: 'column',
        //borderWidth: 1,
        backgroundColor: '#ffffff',
        padding: normalize(20),
        borderRadius: 5,
    },
    text_title: {
        fontSize: normalize(24),
        fontFamily:'Kanit-SemiBold',
        color: '#204082',
        marginBottom: 20,
    },
    space: {
        marginBottom: 20,
    },
    input: {
        height: normalize(40),
        padding: 10,
        borderRadius: 5,
        fontFamily:'Kanit-SemiBold',
        backgroundColor: '#e9ebee',
    },
    text: {
        color: '#000000',
        fontFamily:'Kanit-SemiBold',
        fontSize: normalize(12),
    },
    text_link: {
        color: '#204082',
        textAlign: 'right',
        fontFamily:'Kanit-SemiBold',
        fontSize: normalize(12),
    },
    button_log_in: {
        marginBottom: 20,
        backgroundColor: "#FFC43D",
        padding: normalize(10),
        borderRadius: normalize(5),
        alignItems: 'center',
    },
    buttonText_l: {
        fontFamily:'Kanit-SemiBold',
        color: '#000000',
        fontSize: normalize(12),
    },
    button_sign_up: {
        backgroundColor: "#005A9C",
        padding: normalize(10),
        borderRadius: normalize(5),
        alignItems: 'center',
    },
    buttonText_s: {
        color: '#ffffff',
        fontFamily:'Kanit-SemiBold',
        fontSize: normalize(12),
    },


});


export default SetNewPass;