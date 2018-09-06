import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import SettingsScreen from '../Containers/SettingsScreen'
import NotificationsScreen from '../Containers/NotificationsScreen'
import ExploreScreen from '../Containers/ExploreScreen'
import MainScreen from '../Containers/MainScreen'
import { Colors, Images } from '../Themes/'
import styles from './Styles/NavigationStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// Manifest of possible screens
const MainStack = StackNavigator({
  MainScreen: { screen: MainScreen,
  navigationOptions: {
      title:"Wallet App",
      titleStyle:{marginBottom:10},
      headerStyle: {
          backgroundColor: Colors.white
      },
      headerRight: (<Image source = {Images.addWalletInactive} style={styles.rightButton}/>),
      headerLeft: (<Image source = {Images.menuInactive} style={styles.leftButton}/>),
      headerTintColor: Colors.darkGray
    }, 
},
},
 {
  // Default config for all screens
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  MainScreen: { screen: MainStack,
  				navigationOptions: ({ navigation }) => ({
        			activeTintColor: Colors.darkGray,
        			inactiveTintColor: Colors.lightGray,
        			tabBarIcon: ({ focused }) => {
        					const image = focused 
        					? Images.wallet
        					: Images.walletInactive
        					return (
            				<Image 
                			source={image}
                			style={styles.tabIcon}/>
        						)
    						}
      			}) },
  ExploreScreen: { screen: ExploreScreen,
  				navigationOptions: ({ navigation }) => ({
        			activeTintColor: Colors.darkGray,
        			inactiveTintColor: Colors.lightGray,
        			tabBarIcon: ({ focused }) => {
        					const image = focused 
        					? Images.explore
        					: Images.exploreInactive
        					return (
            				<Image 
                			source={image}
                			style={styles.tabIcon}/>
        						)
    						}
      			}) },
  NotificationsScreen: { screen: NotificationsScreen,
  				navigationOptions: ({ navigation }) => ({
        			activeTintColor: Colors.darkGray,
        			inactiveTintColor: Colors.lightGray,
        			tabBarIcon: ({ focused }) => {
        					const image = focused 
        					? Images.notifications
        					: Images.notificationsInactive
        					return (
            				<Image 
                			source={image}
                			style={styles.tabIcon}/>
        						)
    						}
      			}) },
  SettingsScreen: { screen: SettingsScreen,
  				navigationOptions: ({ navigation }) => ({
        			activeTintColor: Colors.darkGray,
        			inactiveTintColor: Colors.lightGray,
        			tabBarIcon: ({ focused }) => {
        					const image = focused 
        					? Images.settings
        					: Images.settingsInactive
        					return (
            				<Image 
                			source={image}
                			style={styles.tabIcon}/>
        						)
    						}
      			}) },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  tabBarOptions: {
            showLabel: false, 
            activeTintColor: Colors.darkGray,
  					inactiveTintColor: Colors.lightGray,
  					backgroundColor: Colors.white },
  navigationOptions: {
   
    headerStyle: styles.header
  }
})


export default PrimaryNav
