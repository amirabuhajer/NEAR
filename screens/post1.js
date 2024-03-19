import * as React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Pressable } from "react-native";


export default Post1 = ({navigation}) => {
    return(
        <SafeAreaView style={[styles.container]}>
            

            <View style={{flexDirection:'row', alignContent:'space-between'}}>
                <Image source={require('../assets/Allura Heart.png')} style={{left:120, top:110}}/>
                <Text style={{left:375, top:-57, fontWeight:'bold', color:'white', transform:[{rotate:'260deg'}], zIndex:1}}>NEAR</Text>
                <Image source={require('../assets/Hands Give1.png')} style={{left:140}}/>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:-290}}>
                <Image source={require('../assets/Allura Heart (1).png')} style={{left:280, top:150}}/>
                <Text style={{left:-50, top:50, fontWeight:'bold', color:'white', transform:[{rotate:'76deg'}], zIndex:1}}>NEAR</Text>

                <Image source={require('../assets/Hands Give2.png')} style={{right:85}}/>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:-540}}>
                <Image source={require('../assets/Allura Heart (2).png')} style={{left:80, top:190}}/>
                <Text style={{left:369, top:35, fontWeight:'bold', color:'white', transform:[{rotate:'282deg'}], zIndex:1}}>NEAR</Text>

                <Image source={require('../assets/Hands Give3.png')} style={{left:95}}/>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:-750}}>
                <Image source={require('../assets/Allura Heart (3).png')} style={{left:280, top:100}}/>
                <Text style={{left:-5, top:23, fontWeight:'bold', color:'white', transform:[{rotate:'76deg'}], zIndex:1}}>NEAR</Text>

                <Image source={require('../assets/Hands Give4.png')} style={{right:110}}/>
            </View>

            

            <View style={{justifyContent:'column', alignContent:'center'}}>
                <Text style={{fontSize: 24, fontWeight:'bold', top:-764, paddingLeft:35, paddingRight:75}}>Empower change with every tap</Text>
                <Text style={{fontSize: 20, fontWeight:'bold', top:-754, paddingLeft:35, paddingRight:35, color:"#B9744D"}}>one action at a Time</Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top: -710}}>
                <Pressable onPress={()=>{navigation.navigate('MainPage')}}>
                    <Text style={{fontSize:24, paddingLeft:20, color:"#273c75"}}>Skip</Text>
                </Pressable>

                <Pressable onPress={()=>{navigation.navigate('Post2')}}>
                    <Text style={{fontSize:24, paddingLeft:255, color:"#273c75"}}>Next</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor:"#F9EBA6", 
      marginBottom:-600,
      marginTop:-70
     },
    
     
  });