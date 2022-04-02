import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import HomeWatchList from '../components/HomeWatchList'
import HomeTopMovers from '../components/HomeTopMovers'
import HomeRewards from '../components/HomeRewards'

const Home = () => {
  return (
    <SafeAreaView style = {{ flex: 1, backgroundColor: 'white', marginBottom: 90 }}>
      <ScrollView style = {{ flex: 1 }}>
        <View>
          <View style = {{ alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
            <Image
              source = {require('../assets/images/wallet.jpeg')}
              style = {{ width: 220, height: 220 }}
            />
            <Text style = {{ fontSize: 20, fontWeight: '600', color: '#5d616d', paddingTop: 10 }}>
              Welcome to Coinbase-Clone
            </Text>
            <Text style = {{ fontSize: 16, fontWeight: '400', color: '#5d616d', paddingTop: 10 }}>
              Make your first investment today
            </Text>
          </View>
          <View style = {{ paddingTop: 30 }}>
            <TouchableOpacity style = { styles.appButtonContainer }>
              <Text style = {{ fontSize: 16, color: 'white', fontWeight: '600', alignSelf: 'center' }}>
                Fund Account
              </Text>
            </TouchableOpacity>
          </View>

          <View style = {{ paddingTop: 50, paddingHorizontal: 20 }}>
            <HomeWatchList />
          </View>

          <View style = {{ paddingTop: 50, paddingHorizontal: 20 }}>
            <HomeTopMovers />
          </View>

          <View style = {{ paddingTop: 50, paddingHorizontal: 20 }}>
            <HomeRewards />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#2150f5',
    borderRadius: 8,
    paddingVertical: 17,
    paddingHorizontal: 100,
    width: '80%',
    alignSelf: 'center'
  }
})

export default Home