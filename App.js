import { View, Text, Image, ScrollView, Button, Modal } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
const logoImage = require("./assets/images.jpeg");

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [hideSb, setHideSb] = useState(false)

  return (
    <View style={{ padding: 20, backgroundColor: "orange" }}>
      <ScrollView>
        <Image
          source={{
            uri: "https://stecs.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_img.c10f00dc.webp&w=3840&q=75",
          }}
          style={{ height: 300, width: 300 }}
        />
        <Text style={{ fontSize: 22 }}>
          Develop, review, and deploy Learn how to develop by reading the docs
          in the Develop section. You'll learn how to create UI elements, add
          unit tests, include native modules, and more. Once you've developed
          your app, you can share it with your teammates for review. Finally,
          you can build and submit your project to the app stores. Step-by-step
          guide For a guided, step-by-step walkthrough of building an app with
          Expo from start to finish, check out the tutorial. Previous (Get
          started) Start developing Next (Develop) Tools for development Was
          this doc helpful? Share your feedback Ask a question on the forums
          Edit this page Last updated on May 22, 2024 Sign up for the Expo
          Newsletter reader@email.com Sign Up
        </Text>
        <Image
          source={{
            uri: "https://stecs.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_img.c10f00dc.webp&w=3840&q=75",
          }}
          style={{ height: 300, width: 300 }}
        />

        <Button
          title="Open Modal"
          onPress={() => setModalIsVisible(true)}
          color="midnightblue"
        />

        <Modal
          visible={modalIsVisible}
          style={{ height: 200 }}
          onRequestClose={() => setModalIsVisible(false)}
          presentationStyle="pageSheet"
          animationType="slide"
        >
          <View
            style={{
              padding: 20,
              backgroundColor: "cyan",
              height: 200,
              flex: 1,
            }}
          >
            <Text>This is the modal section</Text>

            <Button title="Close" onPress={() => setModalIsVisible(false)} />
          </View>
        </Modal>
        <Button title={hideSb ? "hide status bar" : "Show status bar"} onPress={() => setHideSb(!hideSb)}/>
      </ScrollView>

      <StatusBar backgroundColor="black" barStyle = 'light-content' hidden = {hideSb}/>
    </View>
  );
};

export default App;
