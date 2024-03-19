//import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform, StatusBar, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { AntDesign, FontAwesome5, SimpleLineIcons, Feather } from "@expo/vector-icons";

import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";


    
const SideBars1 = ({navigation}) => {
  const signOutUser = async () => {
    try {
      if (auth.currentUser === null) {
        console.log("logoutPressed: There is no user to logout!")
      } else {
        await signOut(auth)
        console.log("logoutPressed: Logout complete")
        alert("logout complete!")
        navigation.navigate("userOption")
      }
    } catch(error) {
      console.log("ERROR when logging out")
      console.log(error)
    }
  }
  return (
    <ScrollView style={[styles.container]}>
        <SafeAreaView style={{flexDirection:'column', justifyContent:'center', paddingBottom:210}}>

            <View style={{flexDirection:'column', marginTop:'12%'}}>
                <Image
                style={{ width: 300, height: 300, alignSelf: "center", borderRadius: 150 }}
                contentFit="cover"
                source={require("../assets/img-3069.png")}
                />

                <Text style={[styles.headingText]}>Ava Thomas</Text>

            </View>

            <View style={{flexDirection: "row", left: 60}}>
                <AntDesign styles={[styles.ellipseIcon, {right:34}]} name="mail" size={24} color="#273c75" />
                <Text style={[styles.text, {left: 20}]}>Ana.thomas@Gmail.com</Text>
            </View>
        
            <View style={{flexDirection: "row", left: 60, top:7}}>
                <FontAwesome5 name="phone" size={24} color="#273c75" />                
                <Text style={[styles.text, {left: 20}]}>(437) 123 4567</Text>
            </View>


            


            <View style={{flexDirection: "row", left: 30, top:80, borderBottomWidth:1, width: 100, borderBottomColor:"#95a5a6"}}>
                
            </View>


            
        
            <View style={{flexDirection: "row", left: 30, top:100}}>
                <SimpleLineIcons name="settings" size={24} color="#95a5a6" />                
                <Text style={[styles.text, {left: 20,  color:"#95a5a6"}]}>System Settings</Text>
            </View>

            <View style={{flexDirection: "row", left: 30, top:120}}>
                <Feather name="help-circle" size={24} color="#95a5a6" />                
                <Text style={[styles.text, {left: 20,  color:"#95a5a6"}]}>Help Center</Text>
            </View>

            <View style={{flexDirection: "row", left: 30, top:140}}>
                <Pressable onPress={()=>{signOutUser()}}>
                    <AntDesign name="logout" size={24} color="#95a5a6" />                
                    <Text style={[styles.text, {left: 50,  color:"#95a5a6", top: -25}]}>Logout</Text>
                </Pressable>
            </View>


        </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
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
        backgroundColor: '#f1f2f6',
        borderBottomWidth: 2,
        left:25,
        width: 340,
        borderRadius: 5,
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

export default SideBars1;