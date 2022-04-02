import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/pages/Home'
import Portfolio from './src/pages/Portfolio'
import Transfer from './src/pages/Transfer'
import Prices from './src/pages/Prices'
import Settings from './src/pages/Settings'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name = 'Home'
          component = {Home}
          options = {{
            tabBarIcon: ({ focused }) => (
              <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source = { require('./src/assets/images/home.png') }
                  resizeMode = 'contain'
                  style = {{
                    width: 17,
                    height: 17,
                    tintColor: focused ? 'blue' : 'gray'
                  }}
                />
                <Text style = {{ color: focused ? 'blue' : 'gray', fontSize: 10 }}>
                  Home
                </Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name = 'Portfolio'
          component={Portfolio}
          options = {{
            tabBarIcon: ({ focused }) => (
              <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source = { require('./src/assets/images/portfolio.png') }
                  resizeMode = 'contain'
                  style = {{
                    width: 17,
                    height: 17,
                    tintColor: focused ? 'blue' : 'gray'
                  }}
                />
                <Text style = {{ color: focused ? 'blue' : 'gray', fontSize: 10 }}>
                  Portfolio
                </Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name = 'Transfer'
          component={Transfer}
          options = {{
            tabBarIcon: ({ focused }) => (
              <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source = { require('./src/assets/images/transfer.png') }
                  resizeMode = 'contain'
                  style = {{
                    width: 40,
                    height: 40,
                    tintColor: focused ? 'blue' : 'gray'
                  }}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name = 'Prices'
          component={Prices}
          options = {{
            tabBarIcon: ({ focused }) => (
              <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source = { require('./src/assets/images/prices.png') }
                  resizeMode = 'contain'
                  style = {{
                    width: 17,
                    height: 17,
                    tintColor: focused ? 'blue' : 'gray'
                  }}
                />
                <Text style = {{ color: focused ? 'blue' : 'gray', fontSize: 10 }}>
                  Prices
                </Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name = 'Settings'
          component={Settings}
          options = {{
            tabBarIcon: ({ focused }) => (
              <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source = { require('./src/assets/images/settings.png') }
                  resizeMode = 'contain'
                  style = {{
                    width: 17,
                    height: 17,
                    tintColor: focused ? 'blue' : 'gray'
                  }}
                />
                <Text style = {{ color: focused ? 'blue' : 'gray', fontSize: 10 }}>
                  Settings
                </Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})