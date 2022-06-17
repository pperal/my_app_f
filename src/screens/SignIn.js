

import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, PixelRatio, TouchableOpacity, Image, Button } from 'react-native';
import { normalize } from '../normalize';
import SignUp from "./SignUp";
import SetNewPass from './SetNewPass';
import Home from './Home';

const SignIn = ({ navigation }) => {
    const [inputs, setInputs] = useState({});
    function navigatetoSignUp() {
        navigation.navigate(SignUp);
    }
    function navigatetoSetPass() {
        navigation.navigate(SetNewPass);
    }
    function navigatetoHome() {
        navigation.navigate(Home);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bg1}></View>
            <View style={styles.card}>
                <Text style={styles.text_title}>เข้าสู่ระบบ</Text>
                <View style={styles.space}>
                    <Text style={styles.text}>รหัสผู้ใช้งาน (เลขบัตรประจำตัวประชาชน)</Text>
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
                    <Text style={styles.text}>รหัสผ่าน</Text>
                    <TextInput
                        style={styles.input}
                        key="field2"
                        name="field2"
                        placeholder="รหัสผ่าน"
                        onChange={({ target }) => setInputs(state => ({ ...state, field2: target.value }))} value={inputs.field2} />
                </View>
                <View style={styles.space}>
                    <Text style={styles.text_link} onPress={navigatetoSetPass}>ลืมรหัสผ่าน</Text>
                </View>
                <View style={styles.space}>
                    <TouchableOpacity
                        style={styles.button_log_in}>
                        <Text style={styles.buttonText_l} onPress={navigatetoHome}>เข้าสู่ระบบ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button_sign_up}
                        onPress={navigatetoSignUp}
                    >
                        <Text style={styles.buttonText_s}>สมัครสมาชิก</Text>
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
        color: '#204082',
        marginBottom: 20,
        fontFamily:'Kanit-SemiBold',
    },
    space: {
        marginBottom: 20,
    },
    input: {
        height: normalize(40),
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#e9ebee',
    },
    text: {
        color: '#000000',
        fontSize: normalize(12),
        fontFamily:'Kanit-Medium'
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
        color: '#000000',
        fontSize: normalize(12),
        fontFamily:'Kanit-SemiBold',
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


export default SignIn;