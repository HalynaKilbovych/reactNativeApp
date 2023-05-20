import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import PostsScreen from "./PostScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
        tabBarStyle: {
          paddingHorizontal: 25,
          paddingTop: 10,
          paddingBottom: 25,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="plus" color={color} size={size} />
          ),
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// const Tabs = createBottomTabNavigator();

// const Home = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Profile") {
//             iconName = focused
//               ? "ios-information-circle"
//               : "ios-information-circle-outline";
//           } else if (route.name === "Settings") {
//             iconName = focused ? "ios-list-box" : "ios-list";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//       }}
//     >
//       <Tabs.Screen name="Post" component={PostsScreen} headerShown = "false"/>
//       <Tabs.Screen name="CreatePost" component={CreatePostsScreen} />
//       <Tabs.Screen name="Profile" component={ProfileScreen} />
//     </Tabs.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Home;