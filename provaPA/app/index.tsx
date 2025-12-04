import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Background } from '@react-navigation/elements';

export default function HomeScreen() {
    const [text, setText] = useState('Hello') ;
  
    return (
      
      <View style={[styles.Background ,styles.container]} >
        
        <View style={styles.Header}>
          
          <Image source={require('./bar.png')} style={styles.image}/>
          <Image source={require('./search.png')} style={styles.image2}/>
        
        </View>

        <View>
            <Text style={styles.text}>Timer Mode </Text>
        </View>
        
        <View >
          <Image style={styles.image3} source={require('./image1.png')} />

        </View>
        <View >
          <Text style={styles.text}> 01:00:00 </Text>

        </View>
        <View style={styles.box} >
          <Image style={styles.image4} source={require('./load.png')} />
        </View>
     

        <View>
          <Image style={styles.image4} source={require('./play.png')} />
          
        </View>
      </View>
    
   
  );
}


const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap:10
    },
  Background : {
    backgroundColor:'#9370DB',
    flex:1
  },
  Header : {
    display:'flex',
    gap:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  box : {
    display:'flex',
    gap:30,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  image : {
    width:30,
    height:70
  },
  image2 : {
    width:300,
    height:80
  },
  image3 : {
    height:200,
    width:200
  },
  image4: {
    height:100,
    width:300
  },
  text : {
    fontFamily : "heather",
    fontSize: 30,
    alignSelf: "flex-start",
    fontWeight:'900',
    marginBottom: 10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  }


});
