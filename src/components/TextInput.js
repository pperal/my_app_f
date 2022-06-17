
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, Image, Button } from 'react-native';

const TextInput = () => {
    return (
        <TextInput
            style={styles.input}
            key="field1"
            name="field1"
            placeholder="หมายเลขบัตรประชาชน(13 หลัก)"
            keyboardType='numeric'
            maxLength={10}
            onChange={({ target }) => setInputs(state => ({ ...state, field1: target.value }))} value={inputs.field1} />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: '#e9ebee',
    },
});

export default TextInput;