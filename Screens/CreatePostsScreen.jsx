import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Header } from "../Components/Header";

const initialFormState = {
  name: "",
  location: "",
};

export default function CreatePostsScreen() {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  const keyboardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const handleFocus = (inputName) => {
    setIsKeyboardShow(true);
  };

  const handleBlur = () => {
    setIsKeyboardShow(false);
  };

  const handleChangeText = (value, fieldName) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, location } = formState;
    if (!name || !location) {
      alert("Please fill out the form completely");
      return;
    }
    setFormState(initialFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
      <Header title="Add post" />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.photoWrapper}>
                <Image />
                <TouchableOpacity style={styles.cameraBtn}>
                  <AntDesign name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
              <Text style={styles.photoText}>Add photo</Text>
              <View style={{ gap: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Name your post"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  onChangeText={(value) => handleChangeText(value, "name")}
                />
                <View style={styles.locationWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Location"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleFocus("location")}
                    onBlur={() => handleBlur("location")}
                    onChangeText={(value) =>
                      handleChangeText(value, "location")
                    }
                  />
                  <EvilIcons
                    style={styles.inputIcon}
                    name="location"
                    size={25}
                    color="#BDBDBD"
                  />
                </View>
              </View>
              {!isKeyboardShow && (
                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                  <Text style={styles.submitBtnText}>Publish</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
          {!isKeyboardShow && (
            <View style={styles.deleteBtnWrapper}>
              <TouchableOpacity style={styles.deleteBtn}>
                <FontAwesome name="trash-o" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    display: "flex",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#FFF",
  },
  photoWrapper: {
    height: 240,
    backgroundColor: "#F6F6F6",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
    cameraBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    position: "absolute",
  },
  photoText: {
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 8,
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8", 
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 15,
  },
  locationWrapper: {
    position: "relative",
    paddingLeft: 30, 
  },
  inputIcon: {
    position: "absolute",
    top: 15,
    height: 25,
  },
  submitBtn: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
    marginTop: 43,
    width: '100%',
  },
  submitBtnText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  deleteBtnWrapper: {
    position: "absolute",
    bottom: 34,
    alignSelf: "center",
  },
  deleteBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
  });