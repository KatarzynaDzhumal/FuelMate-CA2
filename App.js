import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView,} from "react-native";

export default function App() {
  const [screen, setScreen] = useState("Home");

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>FuelMate Ireland</Text>
        <Text style={styles.subtitle}>
          Your fuel. Your cards. One place.
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {screen === "Home" && (
          <View>
            <Text style={styles.heading}>
              Welcome to FuelMate!
            </Text>

            <Text style ={styles.description}>
              Manage your fuel cards and spending in one place
            </Text>

            <TouchableOpacity
              style={styles.card}
              onPress={() => setScreen("Cards")}
            >
              <Text style={styles.cardTitle}>My Cards</Text>
              <Text>View and add your fuel cards</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => setScreen("Stations")}
            >
              <Text style={styles.cardTitle}>Find Stations</Text>
              <Text>Find petrol and diesel stations</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => setScreen("Spending")}
            >
              <Text style={styles.cardTitle}>Fuel Spending</Text>
              <Text>Keep track of your fuel costs</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => setScreen("Compare")}
            >
              <Text style={styles.cardTitle}>Compare Fuel Prices</Text>
              <Text>Find out how much you could save</Text>
            </TouchableOpacity>
          </View>
        )}

        {screen === "Cards" && (
          <View>
            <Text style={styles.heading}>My Cards</Text>
            <Text>Your saved cards will appear here.</Text>
          </View>
        )}

        {screen === "Stations" && (
          <View>
            <Text style={styles.heading}>Find Stations</Text>
            <Text>Find petrol stations near you.</Text>
          </View>
        )}

        {screen === "Spending" && (
          <View>
            <Text style={styles.heading}>Fuel Spending</Text>
            <Text>View and manage your fuel spending.</Text>
          </View>
        )}

        {screen === "Compare" && (
          <View>
            <Text style={styles.heading}>Compare Fuel Prices</Text>
            <Text>Compare fuel prices and calculate savings.</Text>
          </View>
        )}

        {screen === "Profile" && (
          <View>
            <Text style={styles.heading}>My Profile</Text>
            <Text>Manage your account and settings.</Text>
          </View>
        )}

      </ScrollView>

      <View style={styles.navigation}>
        {["Home", "Cards", "Stations", "Spending", "Profile"].map(
          (item) => (
            <TouchableOpacity
              key={item}
              style={styles.navButton}
              onPress={() => setScreen(item)}
            >
              <Text style={[
                styles.navText,
                screen === item && styles.activeNav
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        )}

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F7F5",
  },

  header: {
    backgroundColor: "#23965C",
    padding: 25,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },

  content: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#343A40",
  },

  description: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9E1DC",
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#23965C",
    marginBottom: 8,
  },

  navigation: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#D9E1DC",
    paddingVertical: 15,
  },

  navButton: {
    flex: 1,
    alignItems: "center",
  },

  navText: {
    fontSize: 12,
    color: "#666666",
  },

  activeNav: {
    color: "#23965C",
    fontWeight: "bold",
  },

});