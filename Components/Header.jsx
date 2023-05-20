import React from "react";
import {Text,View,TouchableOpacity,} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {title === "Posts" && (
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      )}

      {title !== "Posts" && (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Posts")}
        >
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
headerContainer: {
    display: "flex",
    paddingTop: 55,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingBottom: 11,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
  },
  backBtn: {
    position: "absolute",
    left: 10,
    top: 55,
  },
  logOutBtn: {
    position: "absolute",
    right: 10,
    top: 55,
  },
});