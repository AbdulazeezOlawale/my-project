import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
const logoImage = require('./assets/images.jpeg');

const App = () => {
  return (
    <View style = {{padding: 20}}>
      <ScrollView>
        
        <Image source={{ uri: "https://stecs.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_img.c10f00dc.webp&w=3840&q=75"}} style={{height: 300, width: 300}}/>
        <Text style={{fontSize: 22}}>Develop, review, and deploy
          Learn how to develop by reading the docs in the Develop section. You'll learn how to create UI elements, add unit tests, include native modules, and more.

          Once you've developed your app, you can share it with your teammates for review.

          Finally, you can build and submit your project to the app stores.

          Step-by-step guide
          For a guided, step-by-step walkthrough of building an app with Expo from start to finish, check out the tutorial.

          Previous (Get started)

          Start developing

          Next (Develop)

          Tools for development

          Was this doc helpful?



          Share your feedback

          Ask a question on the forums

          Edit this page

          Last updated on May 22, 2024
          Sign up for the Expo Newsletter

          reader@email.com

          Sign Up
        </Text>
        <Image source={{ uri: "https://stecs.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_img.c10f00dc.webp&w=3840&q=75"}} style={{height: 300, width: 300}}/>
      </ScrollView>
    </View>
  )
}

export default App