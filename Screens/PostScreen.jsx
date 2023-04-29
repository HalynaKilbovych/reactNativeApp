import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
} from "react-native";

const POSTS = [
  {
    id: "1",
    title: "Post 1",
    imageUrl: "https://source.unsplash.com/random/340x240",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    title: "Post 2",
    imageUrl: "https://source.unsplash.com/random",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    title: "Post 3",
    imageUrl: "https://source.unsplash.com/random",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function PostsScreen() {
  const [posts, setPosts] = useState(POSTS);

  const renderItem = ({ item }) => (
    <View style={styles.post}>
        <View style={styles.imageWrapper}> 
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
        </View>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.postsContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  post: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  imageWrapper: { 
    width: "100%", 
    height: 240, 
  }, 
  postImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  postDescription: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});