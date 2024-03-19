import {useState} from 'react'
import { Pressable, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Image } from 'react-native';

export default Favorites = ({navigation}) => {
  const [onePressed, setOnePressed] = useState(false);
  const [twoPressed, setTwoPressed] = useState(false);
  const [threePressed, setThreePressed] = useState(false);
  const [fourPressed, setFourPressed] = useState(false);
  const [fivePressed, setFivePressed] = useState(false);
  const [sixPressed, setSixPressed] = useState(false);
  const [sevenPressed, setSevenPressed] = useState(false);
  const [eightPressed, setEightPressed] = useState(false);


  // set functions to these states to set view with image and text to be pressed and has a border with color blue
  const pressOne = () => {
    setOnePressed(!onePressed);
  }
  const pressTwo = () => {
    setTwoPressed(!twoPressed);
  }
  const pressThree = () => {
    setThreePressed(!threePressed);
  }

  const pressFour = () => {
    setFourPressed(!fourPressed);
  }
  const pressFive = () => {
    setFivePressed(!fivePressed);
  }
  const pressSix = () => {
    setSixPressed(!sixPressed);
  }
  const pressSeven = () => {
    setSevenPressed(!sevenPressed);
  }
  const pressEight = () => {
    setEightPressed(!eightPressed);
  }
   

  return (
    <SafeAreaView style={[styles.container]}>
      {/* set 8 views. two views per row down having some text in those view in columns */}
      <ScrollView style={{marginBottom:-900}}>

        <View style={{ backgroundColor:"#273c75", height:60, marginBottom: 10, width:570}}>
          <Text style={{color:'white', fontSize:24, fontWeight:'bold', paddingTop:12, paddingLeft:45}}>Pick you favourite activities</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', top:40, marginBottom:10}}>
          <Pressable
              onPress={() => setOnePressed(!onePressed)}
            >
            <View style={{backgroundColor:'#F9EBA6', width:160, height:110, left:23, borderRadius:12, borderWidth: (onePressed == true ? 3 : 0), borderColor: (onePressed == true ? '#273c75': '')}}>
              <Image source={require('../assets/fluent-emoji-flat_person-biking.png')} style={{width:50, height:50, left:53, top:10}}/>
              <Text style={{fontSize:18, top:20, left:13}}>Physical activity</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setTwoPressed(!twoPressed)}
          >
            <View style={{backgroundColor:'#FFA6A6', width:160, height:110, right:23, borderRadius:12, borderWidth: (twoPressed == true ? 3 : 0), borderColor: (twoPressed == true ? '#273c75': '')}}>
            <Image source={require('../assets/twemoji_beach-with-umbrella.png')} style={{width:50, height:50, left:50, top:10}}/>
              <Text style={{fontSize:18, top:20, left:33}}>Travelling</Text>
            </View>
          </Pressable>
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', top:50, marginBottom:20}}>
          <Pressable
            onPress={() => setThreePressed(!threePressed)}
          >
          <View style={{backgroundColor:'#85B6FF', width:160, height:110, left:23, borderRadius:12, borderWidth: (threePressed == true ? 3: 0), borderColor: (threePressed == true ? '#273c75': '')}}>
            <Image source={require('../assets/twemoji_service-dog.png')} style={{width:50, height:50, left:50, top:10}}/>
            <Text style={{fontSize:18, top:20, left:55}}>Pets</Text>
          </View>
          </Pressable>

          <Pressable
            onPress={() => setFourPressed(!fourPressed)}
          >
          <View style={{backgroundColor:'#1FDABD', width:160, height:110, right:23, borderRadius:12, borderWidth: (fourPressed == true ? 3: 0), borderColor: (fourPressed == true ? '#273c75': '')}}>
          <Image source={require('../assets/flat-color-icons_graduation-cap.png')} style={{width:50, height:50, left:50, top:10}}/>
            <Text style={{fontSize:18, top:20, left:30}}>Education</Text>
          </View>
          </Pressable>

        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', top:50, marginBottom:20}}>
          <Pressable
            onPress={() => setFivePressed(!fivePressed)}
          >
          <View style={{backgroundColor:'#FF93CD', width:160, height:110, left:23, borderRadius:12, borderWidth: (fivePressed == true ? 3: 0), borderColor: (fivePressed == true ? '#273c75': '')}}>
            <Image source={require('../assets/twemoji_handshake-medium-light-skin-tone-medium-dark-skin-tone.png')} style={{width:50, height:50, left:50, top:10}}/>
            <Text style={{fontSize:18, top:20, left:25}}>Volunteering</Text>
          </View>
          </Pressable>


          <Pressable
            onPress={() => setSixPressed(!sixPressed)}
          >
          <View style={{backgroundColor:'#78BEFF', width:160, height:110, right:23, borderRadius:12, borderWidth: (sixPressed == true ? 3: 0), borderColor: (sixPressed == true ? '#273c75': '')}}>
          <Image source={require('../assets/flat-color-icons_selfie.png')} style={{width:50, height:50, left:50, top:10}}/>
            <Text style={{fontSize:18, top:20, left:30}}>Technology</Text>
          </View>
          </Pressable>

        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', top:50, marginBottom:20}}>
          <Pressable
            onPress={() => setSevenPressed(!sevenPressed)}
          >
          <View style={{backgroundColor:'#FFAB7B', width:160, height:110, left:23, borderRadius:12, borderWidth: (sevenPressed == true ? 3: 0), borderColor: (sevenPressed == true ? '#273c75': '')}}>
            <Image source={require('../assets/twemoji_globe-showing-asia-australia.png')} style={{width:50, height:50, left:50, top:10}}/>
            <Text style={{fontSize:18, top:20, left:2}}>Cultural immersion</Text>
          </View>
          </Pressable>

          <Pressable
            onPress={() => setEightPressed(!eightPressed)}
          >
          <View style={{backgroundColor:'#BBAAFF', width:160, height:110, right:23, borderRadius:12, borderWidth: (eightPressed == true ? 3: 0), borderColor: (eightPressed == true ? '#273c75': '')}}>
          <Image source={require('../assets/twemoji_houses.png')} style={{width:50, height:50, left:50, top:10}}/>
            <Text style={{fontSize:18, top:20, left:51}}>Clubs</Text>
          </View>
          </Pressable>
        </View>

        <View style={{ backgroundColor:"#D9D9D9", height:55, marginBottom: 90, width:350, top:70, left:18, borderRadius:10}}>
          <Text style={{color:'#273c75', fontSize:14, fontWeight:'bold', paddingTop:17, paddingLeft:90}}>Select Minimum 2 options</Text>
        </View>


        {/* navigate to 'post1' */}
        <Pressable style={{left:330}} onPress={()=>{navigation.navigate('Post1')}}>
            <Text style={styles.text}>Next</Text>
        </Pressable>
      </ScrollView>

      
      

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      paddingHorizontal:3,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    pressable: {
      margin: 20,
      padding: 10,
      backgroundColor: '#ddd',
      flexDirection: 'row',
    },
    pressed: {
      borderColor: 'blue',
      borderWidth: 2,
    },
    text: {
      fontSize: 16,
      color:'#273c75'
    },
  });