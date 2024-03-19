import { StyleSheet, Image, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Pressable } from "react-native";


export default Post3 = ({navigation}) => {
    return(
        <SafeAreaView style={[styles.container]}>
            

            <View style={{flexDirection:'column', alignContent:'space-between', top:-40, left: 140}}>

                <Image source={require('../assets/The Little Things UI Design.png')} style={{right:100, top:56}}/>

                

                


            </View>

            <View style={{justifyContent:'column', alignContent:'center'}}>
                <Text style={{fontSize: 24, fontWeight:'bold', top:70, paddingLeft:35, paddingRight:85}}>Transform your community</Text>
                <Text style={{fontSize: 20, fontWeight:'bold', top:75, paddingLeft:35, paddingRight:35, color:"#8C4343"}}>one action at a Time</Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:120, left: 115, borderWidth:2, width:173, borderColor:"white", borderRadius:10}}>
                <Pressable onPress={()=>{navigation.navigate('MainPage')}}>
                    <Text style={{fontSize:24, paddingLeft:29, paddingRight:19, paddingTop:20, paddingBottom:20, color:"white"}}>Let's start</Text>
                </Pressable>
                
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor:"#FFA7A7", 
    //   marginBottom:-4,
      paddingBottom:530
     
      
     },
    
     
  });