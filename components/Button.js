import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Color from '../config/Colors'
import AppText from './AppText'

const Button = ({ buttonColor, tagName, onPress, textStyle, customStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.tagView, customStyle]}>
        <AppText
          text={tagName}
          customStyle={[styles.tagText, { backgroundColor: buttonColor }, textStyle]}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tagView: {
    paddingHorizontal: 5,
    height: 60,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
    width: 360,
    backgroundColor: Color.buttonBlue,
    marginTop: 20,
  },
  tagText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },
})

export default Button
