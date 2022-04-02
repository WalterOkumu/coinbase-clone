import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

const SettingsSecurity = () => {
    const [faceID, setFaceID] = useState(false)
    const [privacy, setPrivacy] = useState(false)

    return (
        <View style = {{ marginBottom: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>
                Security
            </Text>
            <View style={{ paddingTop: 30, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                    <Text style={{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5 }}>
                        Require PIN / Face ID
                    </Text>
                    <ToggleSwitch
                        isOn = {faceID}
                        onColor = '#2150f5'
                        offColor = '#ddd'
                        size = 'medium'
                        onToggle = { (isOn) => !faceID ? setFaceID(true) : setFaceID(false) }
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                    <Text style={{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5, color: !faceID ? '#ddd' : 'black' }}>
                        PIN / Face ID Settings
                    </Text>
                    <Image
                        source = {require('../../assets/images/arrow.jpg')}
                        style = {{ width: 10, height: 10 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                    <Text style={{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5 }}>
                        Privacy Mode
                    </Text>
                    <ToggleSwitch
                        isOn = {privacy}
                        onColor = '#2150f5'
                        offColor = '#ddd'
                        size = 'medium'
                        onToggle = { (isOn) => !privacy ? setPrivacy(true) : setPrivacy(false) }
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                    <Text style={{ fontSize: 17, fontWeight: '300', letterSpacing: 0.5 }}>
                        Support
                    </Text>
                    <Image
                        source = {require('../../assets/images/arrow.jpg')}
                        style = {{ width: 10, height: 10 }}
                    />
                </View>

                <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity style = { styles.appButtonContainer }>
                        <Text style = { styles.appButtonText }>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SettingsSecurity

const styles = StyleSheet.create({
    appButtonContainer: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingVertical: 17,
        paddingHorizontal: 100
    },
    appButtonText: {
        fontSize: 16,
        color: 'red',
        fontWeight: '600',
        alignSelf: 'center'
    }
})