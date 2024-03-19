import {Text, View, SafeAreaView, StyleSheet, Platform, StatusBar, Pressable} from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default UserOption = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={[styles.container]}>
                <View style={{right: 140}}>
                    <Text style={[styles.headingText]}>NEAR</Text>
                </View>


                <View style={{top: 100, flexDirection:"row", justifyContent :'center'}}>
                    <Text style={{fontSize:40, fontWeight:'bold', top:13}}>Hello</Text>
                    <MaterialCommunityIcons name="human-greeting-variant" size={50} color="black" style={{top:13, left: 7}}/>
                </View>
                <View style={{top:130, left: 65, flexDirection:'row'}}>
                    <Text style={{color:'#747d8c'}}>Creating a safer neighbourhood for</Text>
                    
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{top: 130, left: 140, color:"#e74c3c"}}>Canadians</Text>
                    <FontAwesome5 style={{top:130, left:145}} name="canadian-maple-leaf" size={24} color="#e74c3c" />
                </View>
                <View style={{top: 150, left:60}}>
                    <Pressable style={[styles.press]} onPress={()=>{navigation.navigate('Login')}} >
                        <Text style={{fontSize: 18, color:'white'}}>Login</Text>
                    </Pressable>
                    <Pressable style={[styles.press1]} onPress={()=>{navigation.navigate('SignUp')}}>
                        <Text style={{fontSize: 18, color: '#273c75'}}>Signup</Text>
                    </Pressable>

                </View>
                
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
     paddingHorizontal:10,
    },
    headingText: {
     fontSize:25,
     textAlign:"center",
     paddingBottom:5,
     fontWeight:"bold",
     top: 15
    },
    text: {
     fontSize:16
    },
    press:{
        backgroundColor: '#273c75',
        height: 45,
        width: 250,
        borderRadius: 25,
        top: 100,
       
        justifyContent: 'center',
        alignItems: 'center',
      },
      press1:{
        backgroundColor: '#ffff',
        height: 45,
        width: 250,
        borderRadius: 25,
        top: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#273c75'
      },
      press2:{
        backgroundColor: '#a5b1c2',
        height: 45,
        width: 340,
        borderRadius: 15,
        top: 160,
        left: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
      }
  });