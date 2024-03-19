// IntroScreen.js
import { useEffect } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
// import video
import { Video } from 'expo-av';

export default IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('userOption');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup function
  }, [navigation]);

  return (
    <SafeAreaView styles={[styles.container]}>
        <View style={{top: 155}}>
            {/* <Image
                source={require('../assets/6.png')}
                style={{ width: 300, height: 300, alignSelf: "center", borderRadius: 150}}
            /> */}
            <Video
                source={require('../assets/app_logo.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay={true}
                isLooping={true}
                style={{ width: 300, height: 300, alignSelf: "center", borderRadius: 150}}
            />
           

        </View>
       

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      paddingHorizontal:4,
      justifyContent: "center",
    },
    headingText: {
      fontSize: 30,
      textAlign: "center",
      paddingBottom: 5,
    },
    text: {
      fontSize: 18,
      textAlign: "center",
      top: 10,
    },    
  });
  