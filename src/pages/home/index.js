import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import imgLogo from '../../assets/logo.png'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal';

export function Home() {

  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*"
  const [size, setSizes] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [showmodal, setShowModal] = useState(false);

  function generatePassword(){
    let password = ""
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(password)
    setPasswordValue(password)
    setShowModal(true)
  }

  return (
    <View style={styles.container}>
      <Image source={imgLogo} style={styles.logo}/>
      
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSizes(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>
          Gerar senha
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showmodal}
        animationType='fade'
        transparent
      >
        <ModalPassword onClose={() => setShowModal(false)} password={passwordValue} />
      </Modal>
    </View> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor: '#392de9',
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
  }
});
