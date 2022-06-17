
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, PixelRatio } from 'react-native';
//import InputForm from '../components/InputForm';
import { Icon } from 'react-native-elements'
import Home from '../../../src/screens/Home';

const SignUp = () => {

    const [inputs, setInputs] = useState({});
    function navigatetoHome() {
        navigation.navigate(Home);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">

                <View style={styles.card}>
                    <Text style={styles.text_title1}>สมัครสมาชิก</Text>
                </View>
                <View style={styles.card1}>
                    <Text style={styles.text_title}>ข้อมูลส่วนตัว</Text>
                    <View style={styles.space}>
                        <Text style={styles.text}>เลขบัตรประจำตัวประชาชน 13 หลัก</Text>
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
                        <Text style={styles.text}>เบอร์มือถือ 10 หลัก</Text>
                        <TextInput
                            style={styles.input}
                            key="field1"
                            name="field1"
                            placeholder="012 3456 789"
                            keyboardType='numeric'
                            maxLength={10}
                            onChange={({ target }) => setInputs(state => ({ ...state, field2: target.value }))} value={inputs.field2} />
                    </View>
                    <View style={styles.space}>
                        <Text style={styles.text}>รหัสผ่าน</Text>
                        <TextInput
                            style={styles.input}
                            key="field2"
                            name="field2"
                            placeholder="รหัสผ่าน"
                            onChange={({ target }) => setInputs(state => ({ ...state, field3: target.value }))} value={inputs.field3} />
                    </View>
                    <View style={styles.space}>
                        <Text style={styles.text}>ยืนยันรหัสผ่าน</Text>
                        <TextInput
                            style={styles.input}
                            key="field2"
                            name="field2"
                            placeholder="รหัสผ่าน"
                            onChange={({ target }) => setInputs(state => ({ ...state, field3: target.value }))} value={inputs.field3} />
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#e9ebee',
                            borderBottomWidth: 1,
                            marginVertical: 30,
                        }}
                    ></View>
                    <View style={styles.space}>
                        <Text style={styles.text}>คำนำหน้า</Text>
                        <TextInput
                            style={styles.input}
                            key="field2"
                            name="field2"
                            placeholder="คำนำหน้า"
                            onChange={({ target }) => setInputs(state => ({ ...state, field3: target.value }))} value={inputs.field3} />
                    </View>

                    <View style={styles.space}>
                        <Text style={styles.text}>ชื่อ</Text>
                        <TextInput
                            style={styles.input}
                            key="field2"
                            name="field2"
                            placeholder="ชื่อ"
                            onChange={({ target }) => setInputs(state => ({ ...state, field3: target.value }))} value={inputs.field3} />
                    </View>
                    <View style={styles.space}>
                        <Text style={styles.text}>นามสกุล</Text>
                        <TextInput
                            style={styles.input}
                            key="field2"
                            name="field2"
                            placeholder="นามสกุล"
                            onChange={({ target }) => setInputs(state => ({ ...state, field3: target.value }))} value={inputs.field3} />
                    </View>
                </View>
                <View style={styles.card2}>
                    <View style={styles.policy}>
                        <Text style={styles.policy_title}>ข้อตกลง</Text>
                        <Text style={styles.policy_text}>นโยบายการคุ้มครองสิทธิ์ข้อมูลส่วนบุคคล</Text>
                        <Text style={styles.policy_text}>สำนักงานประกันสังคม มีนโยบายในการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้บริการทุกท่านโดยสังเขปดังนี้ ข้อมูลส่วนบุคคลที่ท่านได้ให้หรือใช้ผ่านการประมวลผล ของเครื่องคอมพิวเตอร์ ที่ควบคุมการทำงาน ของเว็บไซด์ ของสำนักงานประกันสังคมทั้งหมดนั้น ท่านยอมรับและตกลงว่าเป็นสิทธิและกรรมสิทธิ์ของสำนักงาน ประกันสังคม ซึ่งสำนักงานประกันสังคม จะให้ความคุ้มครองความลับ ดังกล่าวอย่างดีที่สุด โดยสำนักงานประกันสังคมขอเรียนว่าปัจจุบันสำนักงานประกันสังคมได้ใช้ ระบบรักษาความปลอดภัยที่ได้มาตรฐานเพื่อคุ้มครองข้อมูลดังกล่าว อย่างไรก็ตาม เพื่อความปลอดภัย ในข้อมูลส่วนบุคคลของท่าน ท่านควรปฏิบัติตามข้อกำหนด และเงื่อนไขการให้ บริการของเว็บไซด์ ของสำนักงานประกันสังคม แต่ละเว็บไซด์โดยเคร่งครัด ในกรณีที่ข้อมูลส่วนบุคคลดังกล่าว ถูกจารกรรมโดยวิธีการทาง อิเล็กทรอนิกส์ (hack)หรือสูญหาย เสียหายอันเนื่องจากเหตุสุดวิสัยหรือไม่ว่ากรณีใดๆทั้งสิ้น สำนักงานประกันสังคมขอสงวนสิทธิในการปฏิเสธความรับผิดจากเหตุ ดังกล่าวทั้งหมด</Text>
                    </View>

                </View>

                <TouchableOpacity
                    style={styles.button_log_in}>
                    <Text style={styles.buttonText_l} onPress={navigatetoHome}>ถัดไป</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView >
    );
}
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#005C9E',
        flexDirection: "column",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    card: {
        paddingLeft: normalize(60),
        marginVertical: normalize(60),
    },
    text_title1: {
        color: '#ffffff',
        fontSize: normalize(30),
        fontWeight: '800',
    },
    card1: {
        paddingHorizontal: normalize(60),
        paddingVertical: 30,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    text_title: {
        color: '#000000',
        fontSize: normalize(24),
        fontWeight: '800',
        marginBottom: 20,
    },
    input: {
        height: normalize(40),
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#e9ebee',
    },
    space: {
        marginBottom: normalize(20),
    },
    card2: {
        backgroundColor: "#e9ebee",
        width: '100%',
        paddingHorizontal: normalize(40),
        paddingVertical: normalize(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    policy: {
        backgroundColor: "#ffffff",
        padding: normalize(20),
        borderRadius: 5,
        width: '90%',
    },
    button_log_in: {
        marginBottom: 20,
        backgroundColor: "#FFC43D",
        padding: normalize(10),
        borderRadius: normalize(5),
        marginHorizontal:'20%',
        alignItems: 'center',
        marginVertical:normalize(20),
        justifyContent: 'center',

    },
    buttonText_l: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: normalize(12),
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: normalize(12),
    },
    policy_title: {
        color: '#000000',
        fontSize: normalize(14),
        fontWeight: '800',
    },
    policy_text: {
        color: '#000000',
        fontSize: normalize(12),
    },



});

export default SignUp;