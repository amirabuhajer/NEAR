import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, ScrollView, Platform, StatusBar, TextInput, SafeAreaView} from "react-native";
import { Entypo, AntDesign, FontAwesome5, Feather, FontAwesome } from "@expo/vector-icons";


export default EventsPage = ({navigation}) => {
    return (
        <SafeAreaView style={[styles.container]}>
          <View style={{flexDirection:'column', marginBottom:-0, bottom:23, backgroundColor:"#74b9ff", width:905, height: 100, left: -23, marginTop:-30}}>
    
            
    
            <View style={{flexDirection:'row', alignContent:'space-between', left: 34 ,width: 355, height: 40, backgroundColor:'white', marginTop:29, borderRadius: 25}}>
    
              <FontAwesome5 name="search" size={24} color="#273c75" style={{top:7, left:5, paddingLeft:10}} />
    
              <TextInput style={{left:12, width:290}}/>
    
            </View>
    
          </View>
    
          <ScrollView style={{marginBottom:74}}>
              
    
            
    
    
    
    
              <View style={{flexDirection:'row', marginBottom:3, marginTop:12, backgroundColor:"#1C558A", width:365, height: 170, left: 3, borderRadius:25}}>
                        
                <Image 
                        source={require('../assets/IMG_3110.png')}
                        style={{width: 175, height: 170, left:0, top:0, borderRadius:25}} // replace 100 with the desired width and height
                    /> 

                <View style={{flexDirection:'column', left:20}}>
                    <View style={{backgroundColor:'white', width:80, height:40, bottom:-15, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Event</Text>
                    </View>

                    <Text style={{color:'white', fontSize:13, fontWeight:'bold', top:20, right:-3}}>Pizza eating contest ...</Text>

                    <View style={{ flexDirection:'row', width:150, height:40, bottom:-23}}>
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text style={{color:'white', fontSize:13, top:2, right:-3}}>Cooksville, Mississauga, Ontario</Text>
                    </View>

                    <View style={{backgroundColor:'white', width:120, height:40, bottom:-20, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Book Event</Text>
                    </View>
                </View>

                

                


              </View>



              <View style={{flexDirection:'row', marginBottom:3, marginTop:12, backgroundColor:"#1C558A", width:365, height: 170, left: 3, borderRadius:25}}>
                        
                <Image 
                        source={require('../assets/IMG_3110.png')}
                        style={{width: 175, height: 170, left:0, top:0, borderRadius:25}} // replace 100 with the desired width and height
                    /> 

                <View style={{flexDirection:'column', left:20}}>
                    <View style={{backgroundColor:'white', width:80, height:40, bottom:-15, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Club</Text>
                    </View>

                    <Text style={{color:'white', fontSize:13, fontWeight:'bold', top:22, right:-3}}>Weekly chess club ...</Text>

                    <View style={{ flexDirection:'row', width:150, height:40, bottom:-25}}>
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text style={{color:'white', fontSize:13, top:2, right:-3}}>Cooksville, Mississaugua, Ontario</Text>
                    </View>

                    <View style={{backgroundColor:'white', width:120, height:40, bottom:-20, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Book Club</Text>
                    </View>
                </View>

              </View>
              
              <View style={{flexDirection:'row', marginBottom:3, marginTop:12, backgroundColor:"#1C558A", width:365, height: 170, left: 3, borderRadius:25}}>
                        
                <Image 
                        source={require('../assets/IMG_3110.png')}
                        style={{width: 175, height: 170, left:0, top:0, borderRadius:25}} // replace 100 with the desired width and height
                    /> 

                <View style={{flexDirection:'column', left:20}}>
                    <View style={{backgroundColor:'white', width:80, height:40, bottom:-15, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Event</Text>
                    </View>

                    <Text style={{color:'white', fontSize:13, fontWeight:'bold', top:22, right:-3}}>Beach painting (self love) ...</Text>

                    <View style={{ flexDirection:'row', width:150, height:40, bottom:-25}}>
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text style={{color:'white', fontSize:13, top:2, right:-3}}>Cooksville, Mississauga, Ontario</Text>
                    </View>

                    <View style={{backgroundColor:'white', width:120, height:40, bottom:-20, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Book Event</Text>
                    </View>
                </View>

                

                


              </View>


              <View style={{flexDirection:'row', marginBottom:3, marginTop:12, backgroundColor:"#1C558A", width:365, height: 170, left: 3, borderRadius:25}}>
                        
                <Image 
                        source={require('../assets/IMG_3110.png')}
                        style={{width: 175, height: 170, left:0, top:0, borderRadius:25}} // replace 100 with the desired width and height
                    /> 

                <View style={{flexDirection:'column', left:20}}>
                    <View style={{backgroundColor:'white', width:80, height:40, bottom:-15, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Activity</Text>
                    </View>

                    <Text style={{color:'white', fontSize:13, fontWeight:'bold', top:22, right:-3}}>Daily Sick kids volunteering ...</Text>

                    <View style={{ flexDirection:'row', width:150, height:40, bottom:-25}}>
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text style={{color:'white', fontSize:13, top:2, right:-3}}>Cooksville, Mississauga, Ontario</Text>
                    </View>

                    <View style={{backgroundColor:'white', width:120, height:40, bottom:-20, borderRadius:15}}>
                        <Text style={{left:23, top:10}}>Book Activity</Text>
                    </View>
                </View>


              </View>

              <View style={{flexDirection:'row', left:10, width: 350, height: 40, backgroundColor:"#1C558A", top:8, borderRadius:18}}>
                    <Text style={{color:'white', left: 80, fontSize:23, fontWeight:'bold'}}>Host you own</Text>
                    <AntDesign name="arrowdown" size={28} color="white" style={{left:87, top:1}} />
              </View>

              <View style={{top: 7, width: -10, height: 35, flexDirection:'row', justifyContent:'space-between', borderRadius:50, bottom:-34}}>
                            <View style={{flexDirection:'column', marginTop:20, marginLeft:10, height:150, width:115, backgroundColor:"#74b9ff", borderRadius:20}}>
                                <Image source={require("../assets/IMG_3077.png")} style={{top: 24, left:35}}/>

                                <View style={{top: 50, left:5, width: 105, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>

                                    <Text style={{color:'white', fontSize:10, top:10}}>Lara Ahmed</Text>
                                    <Feather name="plus-circle" size={24} color="white" style={{top:6, left:4}}/>
                                </View>

                            </View>


                            <View style={{flexDirection:'column', marginTop:20, marginLeft:10, height:150, width:115, backgroundColor:"#74b9ff", borderRadius:20}}>
                                <Image source={require("../assets/pexels-photo-1043471 1.png")} style={{top: 24, left:35}}/>

                                <View style={{top: 50, left:5, width: 105, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>

                                    <Text style={{color:'white', fontSize:10, top:10}}>Jayden Will</Text>
                                    <Feather name="plus-circle" size={24} color="white" style={{top:6, left:4}}/>
                                </View>

                            </View>


                            <View style={{flexDirection:'column', marginTop:20, marginLeft:10, height:150, width:115, backgroundColor:"#74b9ff", borderRadius:20}}>
                                <Image source={require("../assets/pexels-photo-1499327 1.png")} style={{top: 24, left:35}}/>

                                <View style={{top: 50, left:5, width: 105, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>

                                    <Text style={{color:'white', fontSize:10, top:10}}>Sadie Garcia</Text>
                                    <Feather name="plus-circle" size={24} color="white" style={{top:6, left:4}}/>
                                </View>

                            </View>
                            
                        </View>

              
    
    
    
          </ScrollView>
    
    
        </SafeAreaView>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:"#ffff", 
         paddingHorizontal:10,
       },
       
    });
    
    