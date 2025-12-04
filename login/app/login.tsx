  import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
  import {useState, useEffect} from 'react';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { app } from '../firebaseConfig'
  import { Link, router } from 'expo-router';
  
  
  export default function Login() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const auth = getAuth(app)



  return (
    <View style={styles.container }>
      <View style={styles.nav}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
      <View style={styles.body}>

        <TextInput placeholder='Email' style={styles.input} onChangeText={(value) => setEmail(value)}></TextInput>
        <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} onChangeText={(value) => setPassword(value)}></TextInput>
 
        <TouchableOpacity style={styles.button} >
          <Text style={styles.textbutton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap:10,
    backgroundColor:'#9370DB'
    },
  nav:{
    width: "100%",
    height : "20%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    width: "100%",
    height : "10%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap : 20  
  },
  
  text : {
    color: "Black",
    fontSize: 50,
    fontFamily: 'MyCustomFontName',
  },
  img : {
    width: "40%",
    height: "100%"
  },
  input: {
    backgroundColor: '#C71585',
    width: 300,
    height: 45,
    borderRadius: 10,
    padding: 10,
    color: 'black'
  },
  button : {
    backgroundColor: "#C71585",
    width: 300,
    height: 45,
    borderRadius: 10,
    padding: 10,
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
  },
  button2 : {
    width: 300,
    height: 20,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row"
  },
  button3 : {
    width: 80,
    height: 20,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row"
  },
  textbutton :{
    fontSize: 20,
    color: "black"
  },
  textbutton2 :{
    fontSize: 20,
    color: "black"
  }

});
