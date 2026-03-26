import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const notifications = [
  { id: '1', username: 'Jane Doe', message: 'Liked your photo' },
  { id: '2', username: 'John Smith', message: 'Started following you' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.barraSuperior}>
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.title}>BLOOM</Text>
        <AntDesign name="check" size={24} color="black" />
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Image
              source={require('./assets/IMG/UserPicture.jpeg')}
              style={styles.userImage}
            />
            <View style={styles.notificationText}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5',
  },
  barraSuperior: {
    width: '90%',
    padding: 20,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  notification: {
    width: '90%',
    padding: 15,
    marginTop: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationText: {
    marginLeft: 15,
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#555',
  },
});
