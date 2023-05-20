import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { StyleSheet } from "react-native";

const commentsData = [
  { id: '1', author: 'User1', comment: 'Great post!' },
  { id: '2', author: 'User2', comment: 'I love it!' },
  { id: '3', author: 'User3', comment: 'Awesome!' },
];

export default function CommentsScreen() {
  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.author}>{item.author}</Text>
      <Text style={styles.comment}>{item.comment}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image
          source={{  }}
          style={styles.image}
        />
      </View>
      <View>
      <FlatList
        data={commentsData}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
      />
      </View>
      <FlatList
        data={commentsData}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  postContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    marginBottom: 20,
    marginTop: 100,
    height: 240, 
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  postText: {
    fontSize: 16,
  },
  commentContainer: {
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    padding: 20, 
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  comment: {
    fontSize: 16,
  },
});