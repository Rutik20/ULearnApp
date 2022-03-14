import React from 'react'
import { View, StyleSheet, Platform, Text, TouchableWithoutFeedback } from 'react-native'
import Color from '../config/Colors'
import AppText from './AppText'

export default function IntrestSelection({ label, textIcon }) {
  const [select, changeSelect] = React.useState(false)
  return (
    <TouchableWithoutFeedback onPress={() => changeSelect(!select)}>
      <View style={styles.labelBox}>
        <View
          style={[styles.OuterBox, { borderColor: select ? Color.buttonBlue : Color.transparent }]}
        >
          <View
            style={[
              styles.checkBox,
              { backgroundColor: select ? Color.buttonBlue : Color.transparent },
            ]}
          >
            <Text style={styles.checkStyle}>{select ? '✔' : ''}</Text>
          </View>
          <Text
            style={[
              styles.insideText,
              { color: Platform.OS === 'web' ? Color.black : Color.white },
            ]}
          >
            {textIcon}
          </Text>
        </View>
        <AppText text={label} customStyle={styles.labelStyle} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  OuterBox: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: Color.white,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkStyle: {
    fontSize: 15,
    color: Color.white,
  },
  checkBox: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: 32 }, { translateY: -32 }],
  },
  insideText: {
    fontSize: 30,
    color: Color.white,
    textAlign: 'center',
  },
  labelBox: {
    width: 90,
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  labelStyle: {
    justifyContent: 'center',
    alignContent: 'center',
  },
})
