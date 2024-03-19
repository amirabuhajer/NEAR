import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, ScrollView, Platform, StatusBar, TextInput, SafeAreaView} from "react-native";
import { Entypo, AntDesign, FontAwesome5, Feather, FontAwesome } from "@expo/vector-icons";

const MainPage = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flexDirection:'column', marginBottom:10, backgroundColor:"#74b9ff", width:905, height: 130, left: -23}}>

        <View style={{flexDirection:'row', alignContent:'center'}}>
          <Text style={{fontSize:18, fontWeight:'bold', right: -30, marginTop:8}}>NEAR</Text>
          <Image
                style={{ width: 40, height: 40, alignSelf: "center", borderRadius: 150 , left: 290, top: 10}}
                contentFit="cover"
                source={require("../assets/img-3069.png")}
                />
          
        </View>

        <View style={{flexDirection:'row', alignContent:'space-between', left: 34 ,width: 355, height: 40, backgroundColor:'white', marginTop:23, borderRadius: 25}}>

          <FontAwesome5 name="search" size={24} color="#273c75" style={{top:7, left:5, paddingLeft:10}} />

          <TextInput style={{left:12, width:290}}/>

        </View>

      </View>

      <ScrollView style={{marginBottom:150}}>
          <View style={{flexDirection:'row', alignContent:'space-evenly', marginTop:3, left:2}}>
            <View style={{flexDirection:'row', alignContent:'center', backgroundColor:'#808e9b', width:70, height:30, borderRadius:34}}>
              <Text style={{fontSize:15, alignContent:'center', paddingLeft: 25, paddingTop:4, color:'white', fontWeight:'bold'}}>All</Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'center', backgroundColor:'#fe8787', width:70, height:30, borderRadius:34, left: 4}}>
              <Text style={{fontSize:15, alignContent:'center', paddingLeft: 11, paddingTop:4, color:'white'}}>Danger</Text>            
            </View>

            <View style={{flexDirection:'row', alignContent:'center', backgroundColor:'#ffa06a', width:70, height:30, borderRadius:34, left: 8}}>
              <Text style={{fontSize:15, alignContent:'center', paddingLeft: 7, paddingTop:4, color:'white'}}>Warning</Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'center', backgroundColor:'#ffe144', width:70, height:30, borderRadius:34, left: 12}}>
              <Text style={{fontSize:15, alignContent:'center', paddingLeft: 9, paddingTop:4, color:'white'}}>Caution</Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'center', backgroundColor:'#74b9ff', width:70, height:30, borderRadius:34, left: 16}}>
              <Text style={{fontSize:15, alignContent:'center', paddingLeft: 12, paddingTop:4, color:'white'}}>Notice</Text>
            </View>
          </View>







          <View style={{flexDirection:'column', marginBottom:3, marginTop:12, backgroundColor:"#FE8787", width:405, height: 300, left: -23}}>
                    
              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:5}}>
                <Image 
                  source={require('../assets/img-3057.png')}
                  style={{width: 50, height: 50, borderRadius:24, left:34, top:10}} // replace 100 with the desired width and height
                />  
                <View style={{flexDirection: 'column', alignContent:'space-between', marginTop:10}}>
                    <Text style={{left: 40, fontSize:15}}>Williams Brown</Text>
                    <Text style={{left:40, fontSize:10}}>Toronto, Ontario</Text>
                </View>

                <Entypo name="warning" size={24} color="red" style={{left:130, top:10}}/>
                <Text style={{left:140, fontSize:15, top:10, color:"red"}}>Danger</Text>

              </View>

              <Image 
                  source={require('../assets/img-3063.png')}
                  style={{width: 350, height: 170, left:34, top:20}} // replace 100 with the desired width and height
                /> 

              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:25}}>
                <AntDesign style={{left:40, top:10}} name="heart" size={30} color="pink" />

                <Feather style={{left:60, top:10}} name="message-circle" size={30} color="black" />

                <Feather style={{left:80, top:10}} name="send" size={30} color="black" />

              </View>

          </View>
          <View style={{flexDirection:"column", marginTop:12, left:1, marginBottom:15}}>
            <Text>54 likes</Text>
            <Text>View all 10 comments</Text>
 

            <View style={{flexDirection:"column", marginTop:12, left:1}}>
              <Text style={{fontWeight:'bold'}}>Williams Brown</Text>
              <Text>Protect your home with smart security system ...</Text>    
            </View>

            <View style={{flexDirection:"row", alignContent: 'space-between',marginTop:12}}>
              <View style={{flexDirection:'row', alignContent:'center', left:5, backgroundColor:'#D9D9D9', width:45, height:45, borderRadius:34}}>
              </View>
              <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>Add comment ...</Text>

            </View>

            <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>3 hours ago</Text>
            
          </View>












          <View style={{flexDirection:'column', marginBottom:3, marginTop:35, backgroundColor:"#FE8787", width:405, height: 300, left: -23}}>
                    
              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:5}}>
                <Image 
                  source={require('../assets/img-3069.png')}
                  style={{width: 50, height: 50, borderRadius:24, left:34, top:10}} // replace 100 with the desired width and height
                />  
                <View style={{flexDirection: 'column', alignContent:'space-between', marginTop:10}}>
                    <Text style={{left: 40, fontSize:15}}>Ana Thomas</Text>
                    <Text style={{left:40, fontSize:10}}>Toronto, Ontario</Text>
                </View>

                <Entypo name="warning" size={24} color="red" style={{left:130, top:10}}/>
                <Text style={{left:140, fontSize:15, top:10, color:"red"}}>Danger</Text>

              </View>

              
              <View style={{flexDirection:'row'}}>
                <Image 
                    source={require('../assets/img-3068.png')}
                    style={{width: 175, height: 170, left:34, top:20}} // replace 100 with the desired width and height
                  /> 
                  <Image 
                    source={require('../assets/img-3067.png')}
                    style={{width: 175, height: 170, left:34, top:20}} // replace 100 with the desired width and height
                  /> 
              </View>

              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:25}}>
                <AntDesign style={{left:40, top:10}} name="heart" size={30} color="pink" />

                <Feather style={{left:60, top:10}} name="message-circle" size={30} color="black" />

                <Feather style={{left:80, top:10}} name="send" size={30} color="black" />

              </View>

          </View>
          <View style={{flexDirection:"column", marginTop:12, left:1, marginBottom:15}}>
            <Text>54 likes</Text>
            <Text>View all 10 comments</Text>
 

            <View style={{flexDirection:"column", marginTop:12, left:1}}>
              <Text style={{fontWeight:'bold'}}>Ava Thomas</Text>
              <Text>Beware fo suspicious activities in time parking lot ...</Text>    
            </View>

            <View style={{flexDirection:"row", alignContent: 'space-between',marginTop:12}}>
              <View style={{flexDirection:'row', alignContent:'center', left:5, backgroundColor:'#D9D9D9', width:45, height:45, borderRadius:34}}>
              </View>
              <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>Add comment ...</Text>

            </View>

            <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>24 hours ago</Text>
            
          </View>









          <View style={{flexDirection:'column', marginBottom:3, marginTop:35, backgroundColor:"#fab1a0", width:405, height: 370, left: -23}}>
                    
              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:5}}>
                <Image 
                  source={require('../assets/img-3060.png')}
                  style={{width: 50, height: 50, borderRadius:24, left:34, top:10}} // replace 100 with the desired width and height
                />  
                <View style={{flexDirection: 'column', alignContent:'space-between', marginTop:10}}>
                    <Text style={{left: 40, fontSize:15}}>Huda Zaky</Text>
                    <Text style={{left:40, fontSize:10}}>Markham, Ontario</Text>
                </View>

                <Entypo name="warning" size={24} color="#e17055" style={{left:130, top:10}}/>
                <Text style={{left:140, fontSize:15, top:10, color:"#e17055"}}>Warning</Text>

              </View>

              
              <View style={{flexDirection:'row'}}>
                <Image 
                    source={require('../assets/img-3065.png')}
                    style={{width: 350, height: 240, left:34, top:20}} // replace 100 with the desired width and height
                  /> 
                  
              </View>

              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:25}}>
                <AntDesign style={{left:40, top:10}} name="heart" size={30} color="pink" />

                <Feather style={{left:60, top:10}} name="message-circle" size={30} color="black" />

                <Feather style={{left:80, top:10}} name="send" size={30} color="black" />

              </View>

          </View>
          <View style={{flexDirection:"column", marginTop:12, left:1, marginBottom:15}}>
            <Text>54 likes</Text>
            <Text>View all 10 comments</Text>
 

            <View style={{flexDirection:"column", marginTop:12, left:1}}>
              <Text style={{fontWeight:'bold'}}>Huda Zaky</Text>
              <Text>Join us for a neighborhood cleanup event ...</Text>    
            </View>

            <View style={{flexDirection:"row", alignContent: 'space-between',marginTop:12}}>
              <View style={{flexDirection:'row', alignContent:'center', left:5, backgroundColor:'#D9D9D9', width:45, height:45, borderRadius:34}}>
              </View>
              <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>Add comment ...</Text>

            </View>

            <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>5 hours ago</Text>
            
          </View>










          <View style={{flexDirection:'column', marginBottom:3, marginTop:35, backgroundColor:"#ffeaa7", width:405, height: 380, left: -23}}>
                    
              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:5}}>
                <Image 
                  source={require('../assets/img-3061.png')}
                  style={{width: 50, height: 50, borderRadius:24, left:34, top:10}} // replace 100 with the desired width and height
                />  
                <View style={{flexDirection: 'column', alignContent:'space-between', marginTop:10}}>
                    <Text style={{left: 40, fontSize:15}}>Rachael Smith</Text>
                    <Text style={{left:40, fontSize:10}}>Guelph, Ontario</Text>
                </View>

                <Entypo name="warning" size={24} color="#fdcb6e" style={{left:130, top:10}}/>
                <Text style={{left:140, fontSize:15, top:10, color:"#fdcb6e"}}>Caution</Text>

              </View>

              
              <View style={{flexDirection:'row'}}>
                <Image 
                    source={require('../assets/img-3062.png')}
                    style={{width: 350, height: 250, left:34, top:20}} // replace 100 with the desired width and height
                  /> 
                  
              </View>

              <View style={{flexDirection: 'row', alignContent:'space-between', marginTop:25}}>
                <AntDesign style={{left:40, top:10}} name="heart" size={30} color="pink" />

                <Feather style={{left:60, top:10}} name="message-circle" size={30} color="black" />

                <Feather style={{left:80, top:10}} name="send" size={30} color="black" />

              </View>

          </View>
          <View style={{flexDirection:"column", marginTop:12, left:1, marginBottom:15}}>
            <Text>54 likes</Text>
            <Text>View all 10 comments</Text>
 

            <View style={{flexDirection:"column", marginTop:12, left:1}}>
              <Text style={{fontWeight:'bold'}}>Rachael Smith</Text>
              <Text>Beware of poisonous plants in the park…</Text>    
            </View>

            <View style={{flexDirection:"row", alignContent: 'space-between',marginTop:12}}>
              <View style={{flexDirection:'row', alignContent:'center', left:5, backgroundColor:'#D9D9D9', width:45, height:45, borderRadius:34}}>
              </View>
              <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>Add comment ...</Text>

            </View>

            <Text style={{left: 9, top:9, fontSize:15, color:"#b2bec3"}}>2 days ago</Text>
            
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

export default MainPage;
