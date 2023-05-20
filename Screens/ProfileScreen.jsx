import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

export default ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/PhotoBG.jpg")}
    >
      <View style={styles.profileWrapper}>
        <View style={styles.avatarWrap}>
          <Image />
        </View>
        <Text style={styles.title}>Login</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  profileWrapper: {
    position: "relative",
    alignItems: "stretch",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: "80%",
  },
  avatarWrap: {
    position: "absolute",
    display: "flex",
    top: -60,
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 32,
  },
});