import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform, Pressable, ScrollView} from 'react-native';
import { Entypo, AntDesign, FontAwesome5, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';

export default GroupsOptions = ({navigation}) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{flexDirection:'row', alignContent:'space-between', left: 17 ,width: 355, height: 40, backgroundColor:'white', marginTop:5, borderRadius: 25}}>

            <FontAwesome5 name="search" size={24} color="#273c75" style={{top:7, left:5, paddingLeft:10}} />

            <TextInput style={{left:12, width:290}}/>

            </View>

            <View style={{top:20, flexDirection: 'row', justifyContent:'space-evenly' }}>
                    
                    <View style={{backgroundColor:'white', paddingLeft:20, paddingRight:20, paddingBottom:10, paddingTop:10, borderRadius:20, flexDirection:'row'}}>
                        
                        <Pressable style={{flexDirection:'row'}} onPress={()=>{navigation.navigate('ContactsOptions')}}>
                            <FontAwesome5 name="user-friends" size={24} color="black" style={{top:5}}/>
                            <Text style={{fontWeight:'bold', left: 10, top:7}}>Connections</Text>
                        </Pressable>

                        
                    </View>

                    <View style={{backgroundColor:'#74b9ff', paddingLeft:20, paddingRight:20, paddingBottom:10, paddingTop:10, borderRadius:20, flexDirection:'row'}}>
                        
                        <Pressable style={{flexDirection:'row'}} onPress={()=>{navigation.navigate('GroupsOptions')}}>
                            <MaterialIcons name="groups" size={36} color="black" />
                            <Text style={{fontWeight:'bold', left: 10, top:7}}>Groups</Text>
                        </Pressable>

                        
                    </View>


                    

            </View>
           
            <SafeAreaView style={{flexDirection:'column', justifyContent:'center', paddingTop:30, paddingBottom:50}}>
                
                
                <ScrollView>
                    <View style={{top:10, paddingBottom:300}}>
                        
                        
                        <View style={{top: 10, left:-5, width: 500, height: 125, backgroundColor:'white', flexDirection:'row'}}>
                            {/* <View style={{flexDirection:'row', alignContent:'center', left:39, backgroundColor:'#2D77BC', width:30, height:30, borderRadius:34, top:34, zIndex:1}}>
                                <Text style={{color:'white', fontSize:15, left:9, top:5}}>4</Text>
                            </View> */}

                            <Image source={require("../assets/pexels-photo-335393 2.png")} style={{top: 24, left:20}}/>

                            <View style={{top: 34, left: 30}}>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Students Support</Text>
                                <Text style={{fontSize: 10}}>Suziejonson@Gmail.com</Text>
                                <View style={{flexDirection:"row"}}>
                                <Entypo name="location-pin" size={24} color="gray" />
                                    <Text style={{fontSize: 10, color:'grey'}}>Brampton, Ontario</Text>
                                </View>


                                <View style={{flexDirection:"row", left:170, top:-50, justifyContent: 'space-between'}}>
                                    <Pressable onPress={()=>{navigation.navigate('StudentSupport')}}>
                                        <View style={{flexDirection:'row', alignContent:'center', left:14, backgroundColor:'white', width:40, height:40, borderRadius:34, borderWidth:2, borderColor:"#273c75"}}>
                                            <AntDesign name="message1" size={24} color="#273c75" style={{left:6, top:6}}/>
                                        </View>
                                    </Pressable>
                                    <View style={{flexDirection:'row', alignContent:'center', left:-15, backgroundColor:'#2D77BC', width:40, height:40, borderRadius:34}}>
                                        <Entypo name="phone" size={24} color="white" style={{left:8, top:8}}/>
                                    </View>
                                </View>
                            </View>

                        </View>





                        <View style={{top: 25, left:-5, width: 500, height: 125, backgroundColor:'white', flexDirection:'row'}}>
                           

                            <Image source={require("../assets/Toronto-Neighbourhood-Guide-Streetsville12 2.png")} style={{top: 24, left:20}}/>

                            <View style={{top: 34, left: 30}}>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Streetsville Neighbourhood</Text>
                                <Text style={{fontSize: 10}}>Calebmiller@Gmail.com</Text>
                                <View style={{flexDirection:"row"}}>
                                <Entypo name="location-pin" size={24} color="gray" />
                                    <Text style={{fontSize: 10, color:'grey'}}>Brampton, Ontario</Text>
                                </View>


                                <View style={{flexDirection:"row", left:170, top:-50, justifyContent: 'space-between'}}>
                                    <View style={{flexDirection:'row', alignContent:'center', left:11, backgroundColor:'white', width:40, height:40, borderRadius:34, borderWidth:2, borderColor:"#273c75"}}>
                                        <AntDesign name="message1" size={24} color="#273c75" style={{left:6, top:6}}/>
                                    </View>
                                    <View style={{flexDirection:'row', alignContent:'center', left:-71, backgroundColor:'#2D77BC', width:40, height:40, borderRadius:34}}>
                                        <Entypo name="phone" size={24} color="white" style={{left:8, top:8}}/>
                                    </View>
                                </View>
                            </View>

                        </View>





                        <View style={{top: 40, left:-5, width: 500, height: 125, backgroundColor:'white', flexDirection:'row'}}>
                            <Image source={require("../assets/download (5) 2.png")} style={{top: 24, left:20}}/>

                            <View style={{top: 34, left: 30}}>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Hackathon Event</Text>
                                <Text style={{fontSize: 10}}>Junedavis@Gmail.com</Text>
                                <View style={{flexDirection:"row"}}>
                                <Entypo name="location-pin" size={24} color="gray" />
                                    <Text style={{fontSize: 10, color:'grey'}}>Guelph, Ontario</Text>
                                </View>


                                <View style={{flexDirection:"row", left:170, top:-50, justifyContent: 'space-between'}}>
                                    <View style={{flexDirection:'row', alignContent:'center', left:11, backgroundColor:'white', width:40, height:40, borderRadius:34, borderWidth:2, borderColor:"#273c75"}}>
                                        <AntDesign name="message1" size={24} color="#273c75" style={{left:6, top:6}}/>
                                    </View>
                                    <View style={{flexDirection:'row', alignContent:'center', left:-15, backgroundColor:'#2D77BC', width:40, height:40, borderRadius:34}}>
                                        <Entypo name="phone" size={24} color="white" style={{left:8, top:8}}/>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <View style={{top: 55, left:-5, width: 500, height: 125, backgroundColor:'white', flexDirection:'row'}}>
                            <Image source={require("../assets/calender 2.png")} style={{top: 24, left:20}}/>

                            <View style={{top: 34, left: 30}}>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Events & News</Text>
                                <Text style={{fontSize: 10}}>Susangarcia@Gmail.com</Text>
                                <View style={{flexDirection:"row"}}>
                                <Entypo name="location-pin" size={24} color="gray" />
                                    <Text style={{fontSize: 10, color:'grey'}}>Markham, Ontario</Text>
                                </View>


                                <View style={{flexDirection:"row", left:170, top:-50, justifyContent: 'space-between'}}>
                                    <View style={{flexDirection:'row', alignContent:'center', left:11, backgroundColor:'white', width:40, height:40, borderRadius:34, borderWidth:2, borderColor:"#273c75"}}>
                                        <AntDesign name="message1" size={24} color="#273c75" style={{left:6, top:6}}/>
                                    </View>
                                    <View style={{flexDirection:'row', alignContent:'center', left:-13, backgroundColor:'#2D77BC', width:40, height:40, borderRadius:34}}>
                                        <Entypo name="phone" size={24} color="white" style={{left:8, top:8}}/>
                                    </View>
                                </View>
                            </View>

                        </View>





                        <View style={{top: 70, left:-50, width: 500, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>
                            <Text style={{color:'white', top:8, right:5}}>Recommended Groups</Text>
                        </View>




                        <View style={{top: 75, width: -10, height: 35, flexDirection:'row', justifyContent:'space-between', borderRadius:50}}>
                            <View style={{flexDirection:'column', marginTop:20, marginLeft:10, height:150, width:115, backgroundColor:"#74b9ff", borderRadius:20}}>
                                <Image source={require("../assets/IMG_3083.png")} style={{top: 24, left:35}}/>

                                <View style={{top: 50, left:5, width: 105, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>

                                    <Text style={{color:'white', fontSize:10, top:10}}>Momstalk</Text>
                                    <Feather name="plus-circle" size={24} color="white" style={{top:6, left:4}}/>
                                </View>

                            </View>


                            <View style={{flexDirection:'column', marginTop:20, marginLeft:10, height:150, width:115, backgroundColor:"#74b9ff", borderRadius:20}}>
                                <Image source={require("../assets/IMG_3084.png")} style={{top: 24, left:35}}/>

                                <View style={{top: 50, left:5, width: 105, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>

                                    <Text style={{color:'white', fontSize:10, top:10}}>Teamgreen</Text>
                                    <Feather name="plus-circle" size={24} color="white" style={{top:6, left:4}}/>
                                </View>

                            </View>


                            <View style={{flexDirection:'column', marginTop:20, marginLeft:10, height:150, width:115, backgroundColor:"#74b9ff", borderRadius:20}}>
                                <Image source={require("../assets/IMG_3085.png")} style={{top: 24, left:35}}/>

                                <View style={{top: 50, left:5, width: 105, height: 35, backgroundColor:'#4a69bd', flexDirection:'row', justifyContent:'center', borderRadius:50}}>

                                    <Text style={{color:'white', fontSize:10, top:10}}>7Mentalhealth</Text>
                                    <Feather name="plus-circle" size={24} color="white" style={{top:6, left:4}}/>
                                </View>

                            </View>
                            
                        </View>


                        
                    </View>
                    
                   


                    

                </ScrollView>
                

                

                
                


            </SafeAreaView>
       
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#dfe6e9",
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