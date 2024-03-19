import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform, Pressable, ScrollView} from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


export default Post = ({navigation}) => {
    return (
        <ScrollView style={[styles.container]}>
           
            <SafeAreaView style={{flexDirection:'column', justifyContent:'center', paddingTop:50, paddingBottom:10}}>
                <View style={{right:10, top:-25, flexDirection:'column'}}>
                    <Text style={[styles.headingText]}>See Something Say Something</Text>
                </View>
                

                <View style={{top:40}}>
                    <Text style={[styles.text, {bottom:10}]}>Email</Text>
                    <TextInput
                        style={[styles.input]} 
                    />
                </View>

                <View style={{top:60}}>
                    <Text style={[styles.text, {bottom:10}]}>Location</Text>
                    <TextInput
                        style={[styles.input]}
                    />
                </View>

                <View style={{top:80}}>
                    <Text style={[styles.text, {bottom:10}]}>Description</Text>
                    <TextInput
                        style={[styles.input]}
                    />
                </View>

                <View style={{top:160, flexDirection:'row', justifyContent:'space-evenly', zIndex:1, left:79}}>
                    <Text style={{top: 15, right:48, fontWeight:'bold', fontSize:20, color:'#273c75'}}>Upload an Image </Text>
                    <MaterialCommunityIcons name="image-plus" size={54} color="white" style={{right:110}}/>

                </View>

                <View style={{top:170, right: -40, flexDirection:'column', justifyContent:'center'}}>
                    <Image
                        source={require("../assets/Group 2.png")}
                        style={{top:-100, left:-12, width: 340, height: 390}}
                    />
                    <Image
                        source={require("../assets/Group 3.png")}
                        style={{top:-320, left:5}}
                    />
                </View>


                <View style={{top:-155, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={{fontSize: 30, top: 60, right:-13, fontWeight:'bold'}}>Pick your Option</Text>
                    <Entypo name="warning" size={39} color="#57606f" style={{top: 60, right: 15}} />

                </View>
                
                <View style={{top: -285, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{top:220, borderRadius:35, backgroundColor:"#ff6b81"}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15, color:'white'}}>Danger</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#ff7f50'}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15, color:'white'}}>Warning</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#eccc68'}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15, color:'white'}}>Caution</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#70a1ff'}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15, color:'white'}}>Notice</Text>
                    </View>
                </View>

                <View style={{top: -265, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{top:220, borderRadius:35, backgroundColor:"#dfe4ea"}}>
                        <Text style={{paddingBottom:20, paddingTop:20, paddingLeft:55, paddingRight:55}}>Cancel</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#000'}}>
                        <Text style={{paddingBottom:20, paddingTop:20, paddingLeft:55, paddingRight:55, color:'white'}}>Post</Text>
                    </View>
                    
                </View>
                


            </SafeAreaView>
       
            
        </ScrollView>
    );
}

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