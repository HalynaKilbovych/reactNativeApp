import React from "react";
import { Image } from "react-native";
import {Text,View} from "react-native";
import { StyleSheet } from "react-native";
import { Header } from "../Components/Header";

export default PostsScreen = () => {
  return (
    <>
      <Header title="Posts" />
      <View style={styles.container}>
        <View style={styles.userWrapper}>
          <View style={styles.userAvatar}>
            <Image />
          </View>
          <View>
            <Text style={styles.login}>Name</Text>
            <Text style={styles.mail}>mango@mail.com</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: "4%",
    paddingVertical: "7%",
    backgroundColor: "#FFF",
  },
  userAvatar: {
    display: "flex",
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginRight: 8,
  },
  userWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "7%",
  },
  login: {
    fontSize: 13,
    fontWeight: "700",
  },
  mail: {
    fontSize: 11,
    color: "#BDBDBD",
  },ginBottom: 10,
});