import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const Greet = ({name}) => {
  return (
    <View>
      <Text style = {styles.container}>Greet, {name}</Text>
    </View>
  )
}

export default Greet

const styles = StyleSheet.create({
    container: {color: "white", fontSize: 16, paddingHorizontal: 10, paddingVertical: 10}
})