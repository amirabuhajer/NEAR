import * as React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, Platform, StatusBar, ScrollView } from "react-native";
import { Entypo, AntDesign, FontAwesome5, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';


export default StudentSupport = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={{top: 25, paddingBottom:300}}>
                <View style={{top: 10, left:-5, width: 500, height: 125, flexDirection:'row'}}>
                    <Image source={require("../assets/IMG_3074.png")} style={{top: 24, left:20}}/>

                    <View style={{top: 34, left: 30, backgroundColor:'#ced6e0', width: 250, borderRadius:25, paddingTop:23, paddingLeft:12}}>
                        <Text style={{fontSize: 20}}>Hey, anyone else feeling overwhelmed by the workload this semester?</Text>
                                    
                    </View>
                </View>

                <View style={{top: 35, left:-5, width: 500, height: 125, flexDirection:'row'}}>
                    <Image source={require("../assets/IMG_3057.png")} style={{top: 24, left:19,}}/>

                    <View style={{top: 34, left: 25, backgroundColor:'#ced6e0', width: 250, borderRadius:25, paddingTop:15, paddingLeft:12}}>
                        <Text style={{fontSize: 20}}>Yeah, it's been pretty intense. I'm struggling to keep up with readings and assignments.</Text>
                                    
                    </View>
                </View>


                <View style={{top: 65, left:9, width: 500, height: 160, flexDirection:'row'}}>

                    <View style={{top: 34, left: 110, backgroundColor:'#74b9ff', width: 250, borderRadius:25, paddingTop:23, paddingLeft:12}}>
                        <Text style={{fontSize: 20}}>I hear you. Have you tried setting a schedule or breaknig down tasks into asmaller, manageable chunks?</Text>
                                    
                    </View>
                </View>

                <View style={{top: 100, left:-5, width: 500, height: 140, flexDirection:'row'}}>
                    <Image source={require("../assets/IMG_3074.png")} style={{top: 24, left:20}}/>

                    <View style={{top: 34, left: 30, backgroundColor:'#ced6e0', width: 250, borderRadius:25, paddingTop:23, paddingLeft:12}}>
                        <Text style={{fontSize: 20}}>That's a good idea, Ava, I'll give that a try to see if it helps me stay on top of things.</Text>
                                    
                    </View>
                </View>


                <View style={{top: 150, left:-5, width: 500, height: 125, flexDirection:'row'}}>
                    <Image source={require("../assets/IMG_3071.png")} style={{top: 24, left:20}}/>

                    <View style={{top: 50, left: 30, backgroundColor:'#ced6e0', width: 50, borderRadius:25, paddingTop:1, paddingLeft:12, height:49}}>
                        <Text style={{fontSize:34}}>...</Text>
                    </View>
                </View>


            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal:3,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    headingText: {
      fontSize: 30,
      textAlign: "center",
      paddingBottom: 5,
      fontWeight: "bold"
    },
    text: {
      fontSize: 18,
      textAlign: "left",
      left: 25
    },
    input: {
        height: 45,
        backgroundColor: 'white',
        //borderBottomWidth: 2,
        left:-10,
        width: 340,
        borderRadius: 25,
        paddingLeft: 15,
    },
    press: {
        backgroundColor: '#273c75',
        height: 45,
        width: 250,
        borderRadius: 25,
        top: 50,
        left: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });