import { View, Text, Image } from 'react-native'
import React from 'react'

const SettingsAccount = () => {
  return (
    <View>
      <Text style = {{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>
        Account
      </Text>
      <View style = {{ flexDirection: 'column', paddingTop: 30 }}>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style = {{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, marginBottom: 30 }}>
                Limits and Features
            </Text>
            <Image
                source = {require('../../assets/images/arrow.jpg')}
                style = {{ width: 10, height: 10 }}
            />
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style = {{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, marginBottom: 30 }}>
                Native Currency
            </Text>
            <Image
                source = {require('../../assets/images/arrow.jpg')}
                style = {{ width: 10, height: 10 }}
            />
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style = {{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, marginBottom: 30 }}>
                Country
            </Text>
            <Image
                source = {require('../../assets/images/arrow.jpg')}
                style = {{ width: 10, height: 10 }}
            />
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style = {{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, marginBottom: 30 }}>
                Privacy
            </Text>
            <Image
                source = {require('../../assets/images/arrow.jpg')}
                style = {{ width: 10, height: 10 }}
            />
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style = {{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, marginBottom: 30 }}>
                Phone Number
            </Text>
            <Image
                source = {require('../../assets/images/arrow.jpg')}
                style = {{ width: 10, height: 10 }}
            />
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style = {{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, marginBottom: 30 }}>
                Notification Settings
            </Text>
            <Image
                source = {require('../../assets/images/arrow.jpg')}
                style = {{ width: 10, height: 10 }}
            />
        </View>
      </View>
    </View>
  )
}

export default SettingsAccount