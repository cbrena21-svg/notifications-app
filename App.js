import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = [
  require('./assets/IMG/uno.jpg'),
  require('./assets/IMG/dos.jpg'),
  require('./assets/IMG/tres.jpg'),
  require('./assets/IMG/cuatro.jpeg'),
  require('./assets/IMG/cinco.jpg'),
  require('./assets/IMG/seis.jpg'),
  require('./assets/IMG/siete.jpg'),
  require('./assets/IMG/ocho.jpg'),
  require('./assets/IMG/nueve.jpg'),
  require('./assets/IMG/diez.jpg'),
  require('./assets/IMG/once.jpg'),
  require('./assets/IMG/doce.jpg'),
  require('./assets/IMG/trece.jpg'),
  require('./assets/IMG/catorce.jpg'),
  require('./assets/IMG/quince.jpg'),
  require('./assets/IMG/dieciseis.jpg'),
  require('./assets/IMG/diecisiete.jpg'),
  require('./assets/IMG/dieciocho.jpg'),
];
const messages = [
  'Liked your photo',
  'Started following you',
  'Commented on your post',
  'Sent you a friend request',
  'Mentioned you in a comment',
  'Shared your post',
  'Sent you a message',
  'Liked your reel',
  'Reacted ❤️ to your story',
  'Mentioned you in a story',
  'Liked your comment',
  'Invited you to an event',
  'Saved your post',
];
const users = [
  'Jane Doe',
  'John Smith',
  'Emily Brown',
  'Michael Lee',
  'Sophia Wilson',
  'Daniel Martinez',
  'Olivia Garcia',
  'Liam Anderson',
  'Ava Thompson',
  'Noah Hernandez',
  'Isabella Moore',
  'James Taylor',
  'Mia Jackson',
  'Benjamin White',
  'Charlotte Harris',
  'Lucas Martin',
  'Amelia Clark',
  'Henry Lewis',
];

export default function App() {
  const [contador, setContador] = useState(0);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador(record => record + 1);
      const random = Math.floor(Math.random() * 18);
      setNotifications(record => [...record, { id: ((record.length + 1).toString()), message: (messages[Math.floor(Math.random() * 13)]), username: (users[random]), image: (images[random]), seen: false }]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <View style={styles.noti}>
          <Text style={styles.notiText}>{contador}</Text>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
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
              source={item.image}
              style={styles.userImage}
            />
            <View style={styles.notificationText}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.message}>{item.seen}</Text>
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
  noti: {
    alignItems: 'center',
  },
  notiText: {
    color: 'white',
    fontSize: 9,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 40,
    width: 20,
    height: 20,
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
