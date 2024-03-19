import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons'; // for the icons

import MainPage from "./screens/MainPage";
import IntroScreen from "./screens/IntroScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import userOption from "./screens/userOption";
import EventsPage from "./screens/Events";

// import the sidebars1.js file
import Favorites from "./screens/favorites";

import sidebars1 from "./screens/sidebars1";

import ContactsOptions from "./screens/ContactsOptions";
import GroupsOptions from "./screens/GroupsOptions";

import StudentSupport from "./screens/StudentSupport";  

import Post from "./screens/Post";


import Post1 from './screens/post1'
import Post2 from './screens/post2'
import Post3 from './screens/post3'

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MainTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainPage} options={{headerShown: false, tabBarIcon: ()=>{return(<Entypo name="home" size={24} color="#273c75" />)}}} />
        <Tab.Screen name="Events" component={EventsPage} options={{headerTitle: "Events", 
              headerStyle: { backgroundColor: "#74b9ff"}, 
              headerTitleAlign:'center',
              headerRight: () => (
                <Image 
                  source={require('./assets/img-3069.png')} // replace with your image path
                  style={{ width: 40, height: 40, marginRight: 10, borderRadius:23 }} // adjust size and margin as needed
                />
              ), tabBarIcon: ()=>{return(<MaterialIcons name="event" size={24} color="#273c75" />)}}}/>
        <Tab.Screen name="Post" component={Post} options={{headerShown: false, tabBarIcon: ()=>{return(<FontAwesome5 name="plus" size={24} color="#273c75" />)}}}/>
        <Tab.Screen name="Contacts" component={ContactsOptions} options={{headerShown:false, tabBarIcon: ()=>{return(<MaterialIcons name="message" size={24} color="#273c75" />)}}}/>
        <Tab.Screen name="Profile" component={sidebars1} options={{headerShown: false, tabBarIcon: ()=>{return(<FontAwesome5 name="user-alt" size={24} color="#273c75" />)}}}/>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="userOption"
            component={userOption}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: true, headerTitle: ""}}
          />
          <Stack.Screen
            name="Login"
            component={SignInScreen}
            options={{ headerShown: true , headerTitle: ""}}
          />
          <Stack.Screen
            name="MainPage"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EventsPage"
            component={EventsPage}
            options={{ 
              headerShown: true, 
              headerTitle: "Events", 
              headerStyle: { backgroundColor: "#74b9ff"}, 
              headerTitleAlign:'center',
              headerRight: () => (
                <Image 
                  source={require('./assets/img-3069.png')} // replace with your image path
                  style={{ width: 40, height: 40, marginRight: 10, borderRadius:23 }} // adjust size and margin as needed
                />
              )
            }}
            />
          <Stack.Screen
            name="sidebars1"
            component={sidebars1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContactsOptions"
            component={ContactsOptions}
            options={{ 
              headerShown: true, 
              headerTitle: "Contacts", 
              headerStyle: { backgroundColor: "#74b9ff"}, 
              headerTitleAlign:'center',
              headerRight: () => (
                <Image 
                  source={require('./assets/img-3069.png')} // replace with your image path
                  style={{ width: 40, height: 40, marginRight: 10, borderRadius:23 }} // adjust size and margin as needed
                />
              )
            }}
            
          />
          <Stack.Screen
            name="GroupsOptions"
            component={GroupsOptions}
            options={{ 
              headerShown: true, 
              headerTitle: "Contacts", 
              headerStyle: { backgroundColor: "#74b9ff"}, 
              headerTitleAlign:'center',
              headerRight: () => (
                <Image 
                  source={require('./assets/img-3069.png')} // replace with your image path
                  style={{ width: 40, height: 40, marginRight: 10, borderRadius:23 }} // adjust size and margin as needed
                />
              )
            }}
              
          />

          <Stack.Screen
            name="StudentSupport"
            component={StudentSupport}
            options={{ headerShown: true, headerTitle: "Student Support", headerStyle: { backgroundColor: "#74b9ff"}}}
          />

          <Stack.Screen
            name="Post"
            component={Post}
            options={{ headerShown: true, headerTitle: "Post", headerStyle: { backgroundColor: "#74b9ff"}}}
          />


          <Stack.Screen
            name="Post1"
            component={Post1}
            options={{ headerShown: false }}
            />

          <Stack.Screen
            name="Post2"
            component={Post2}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Post3"
            component={Post3}
            options={{ headerShown: false }}
          />

          
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{ headerShown: false }}  
          />

        </Stack.Navigator>
      ) : null}
      

    </NavigationContainer>
  );
};

export default App;
