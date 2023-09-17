import {View, Text, StyleSheet, Pressable, TouchableOpacity, Alert } from "react-native"
import * as Clipboard from 'expo-clipboard'

import useStorage from '../../hooks/useStorage'


export function ModalPassword({password, onClose}){

const { getItem, saveItem, removeItem } = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)

        Alert.alert('Senha salva com sucesso!')
        onClose()
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.innerText}>{password}</Text>
                </Pressable>
                
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: '#fff',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: '#0e0e0e',
        width: '85%',
        padding: 12,
        borderRadius: 8
    },
    innerText:{
        color: '#fff',
        textAlign: 'center'
    },
    buttonArea:{
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: '#392de9'
    },
    buttonSaveText:{
        color: '#fff',
        fontWeight: 'bold',
    }
})