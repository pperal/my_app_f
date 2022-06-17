
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { normalize } from '../normalize';
import Icon from 'react-native-ionicons'

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={[styles.container1, styles.margin_bottom]}>
                    <View style={styles.box} >
                        <Text style={styles.name_text}>ถั่วแดง ถั่วเขียว</Text>
                        <Text style={styles.status_text}>สถานะ : เป็นผู้ประกันตน</Text>
                    </View>
                    <View style={styles.box} >
                        <Text>pic</Text>
                    </View>
                </View>

                <View style={[styles.container_hospital, styles.boxWithShadow]}>
                    <View style={styles.box_text_hospital} >

                        <View style={styles.col}>
                            <Text style={styles.name_text_hospital}>โรงพยาบาล</Text>
                            <TouchableOpacity
                                style={[styles.button_change_hospital, styles.boxWithShadow]}>
                                <Text style={styles.buttonText_l} >เปลี่ยนโรงพยาบาล</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ImageBackground
                        source={require('../../assets/images/hospital3.png')}
                        style={styles.img}
                        resizeMode="contain">
                        <View style={styles.box_hospital}>

                        </View>
                    </ImageBackground>

                </View>

                <View style={styles.container2}>
                    <View style={[styles.box_pension1, styles.boxWithShadow]} >

                        <Text style={styles.white}>pension</Text>
                        <Text style={styles.name_text_hospital}>{'\u0E3F'}1,000,000</Text>

                    </View>
                    <View style={[styles.box_pension2, styles.boxWithShadow]} >
                        <Text style={styles.white}>edent</Text>
                        <Text style={styles.name_text_hospital}>{'\u0E3F'}900</Text>
                    </View>
                </View>
                
                <View style={styles.container_sub_menu}>
                    <View style={[styles.sub_menu_item, styles.box_padding]}>
                        <View style={[styles.box, styles.box_sub]} >
                        <View style={styles.cover_icon}>
                            <Image
                                style={styles.img_bg}
                                source={require('../../assets/images/old.png')}
                            />
                            </View>
                            <Text style={styles.sub_menu_text}>pension info</Text>
                        </View>
                        <View style={styles.box} >
                       
                            <Icon style={styles.icon} color="#000" name="arrow-forward" />
                        </View>
                    </View>
                    <View style={[styles.sub_menu_item, styles.box_padding]}>
                        <View style={[styles.box, styles.box_sub]} >
                        <View style={styles.cover_icon}>
                            <Image
                                style={styles.img_bg}
                                source={require('../../assets/images/piggy-bank.png')}
                            />
                            </View>
                            <Text style={styles.sub_menu_text}>contribution</Text>
                        </View>
                        <View style={styles.box} >
                            <Icon style={styles.icon} color="#000" name="arrow-forward" />
                        </View>
                    </View>
                    <View style={[styles.sub_menu_item, styles.box_padding]}>
                        <View style={[styles.box, styles.box_sub]} >
                        <View style={styles.cover_icon}>
                            <Image
                                style={styles.img_bg}
                                source={require('../../assets/images/refund.png')}
                            />
                            </View>
                            <Text style={styles.sub_menu_text}>claim info</Text>
                        </View>
                        <View style={styles.box} >
                            <Icon style={styles.icon} color="#000" name="arrow-forward" />
                        </View>
                    </View>
                    <View style={[styles.sub_menu_item, styles.box_padding]}>
                        <View style={[styles.box, styles.box_sub]} >
                            <View style={styles.cover_icon}>
                            <Image
                                style={styles.img_bg}
                                source={require('../../assets/images/tooth.png')}
                            />
                            </View>
                           
                            <Text style={styles.sub_menu_text}>edent claim</Text>
                        </View>
                        <View style={styles.box} >
                            <Icon style={styles.icon} color="#000" name="arrow-forward" />
                        </View>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    container1: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '1%',
        borderRadius: normalize(50),
        backgroundColor:'#f8f8f8',
        borderRadius: normalize(10),
        padding:10,
    },
    container2: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '1%',
        borderRadius: normalize(50),
        marginBottom:20,
        
    },
    container_hospital: {
        backgroundColor: '#3682ba',
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: normalize(10),

    },

    box: {
        alignSelf: 'center',

    },
    box_padding: {
        padding: 10,
    },
    box_text_hospital: {
        margin: 20,
        fontFamily:'Kanit-Black',
    },
    box_hospital: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    box_pension1: {
        backgroundColor: "#51c3fe",
        alignSelf: 'center',
        width: '47%',
        padding: normalize(10),
        borderRadius: normalize(10),
        alignItems: "center",
    },
    box_pension2: {
        backgroundColor: "#edac3b",
        alignSelf: 'center',
        width: '50%',
        padding: normalize(10),
        borderRadius: normalize(10),
        alignItems: "center",
    },
    box_sub: {
        flexDirection: "row",
        alignItems: "center",
    },
    name_text: {
        fontSize: normalize(24),
        fontWeight: '500',
        fontFamily:'Kanit-SemiBold',
    },
    sub_menu_text: {
        fontSize: normalize(18),
        marginLeft:20,
        fontWeight: '500',
        fontFamily:'Kanit-Medium',
    },
    white: {
        color: '#ffffff',
        fontFamily:'Kanit-SemiBold',
    },

    name_text_hospital: {
        fontSize: normalize(18),
        fontWeight: '500',
        color: '#ffffff',
        fontFamily:'Kanit-SemiBold',
    },
    container_sub_menu: {
        flexDirection: 'column',
        
        backgroundColor:'#f8f8f8',
        borderRadius: normalize(10),
        marginHorizontal: '5%',
        paddingVertical:5,
    },
    sub_menu_item: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: '5%',
        marginVertical: '1.5%',
        borderRadius: normalize(10),
        backgroundColor: '#ffffff',
    },
    img: {
        width: 150,
        height: 150,
        marginTop: normalize(15),
    },
    col: {
        justifyContent: "space-between",
        flexDirection: "column",
        height: 120,
    },
    icon: {
        margin: 5,
    },
    boxWithShadow: {
        elevation: 5,
        shadowColor: '#52006A',
    },
    img_bg: {
        width: 30,
        height: 30,
        
    },
    cover_icon:{
        backgroundColor:'#c2e6ff',
        borderRadius: normalize(5),
        alignItems: 'center',
        padding:5,
    },
    button_change_hospital: {
        backgroundColor: '#FFC43D',
        alignItems: "center",
        borderRadius: normalize(10),
        padding: 10,
    },
    buttonText_l: {
        fontWeight: '500',
        fontFamily:'Kanit-Medium',
    },
    status_text:{fontFamily:'Kanit-Medium',},
    margin_bottom: {
        marginVertical: 20,
    },


});
export default Profile;