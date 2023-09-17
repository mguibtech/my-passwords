import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

export function PasswordItem({data, removePassword}){
    return(
        <Pressable onPress={removePassword} style={style.item}>
            <Text style={style.text}>
                {data}
            </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    item:{
        backgroundColor: '#000',
        width: '100%',
        padding: 10,
        marginBottom: 14,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: '#fff'
    }

})