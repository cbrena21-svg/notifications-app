import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, } from 'react-native';
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

//Marcar como leido
const handlePress = (id) => {
    setNotifications(currentNotifications => 
      currentNotifications.map(item => {
        if (item.id === id && !item.seen) {
          // Si la tocamos y no estaba vista, bajamos el contador
          setContador(prev => (prev > 0 ? prev - 1 : 0));
          return { ...item, seen: true };
        }
        return item;
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <View style={styles.noti}>
          {contador > 0 && <Text style={styles.notiText}>{contador}</Text>}
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
          <TouchableOpacity activeOpacity={0.7} onPress={() => handlePress(item.id)} style={[styles.notification, item.seen ? styles.readBackgroundColor : styles.unreadBackground]}>
            <Image source={item.image} style={styles.userImage} />
            <View style={styles.notificationText}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            {!item.seen && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8d8d8d',
  },
  barraSuperior: {
    width: '90%',
    padding: 20,
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

  },
  noti: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  //arregle para que se viera en la esquinita de la campana
  notiText: {
    color: 'white',
    fontSize: 9,
    backgroundColor: 'red',
    borderRadius: 40,
    width: 20,
    height: 20,
    textAlign: 'center',
    position: 'absolute',
    top: -8,
    right: -8,
    zIndex: 1,
    lineHeight: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  listContent: {
    paddingHorizontal: '5%',
    paddingBottom: 20,
  },
  notification: {
    width: '100%',
    padding: 15,
    marginTop: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unreadBackground: {
    backgroundColor: '#f0f0f0',
  },
  readBackgroundColor: {
    backgroundColor: '#c2c2c2',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginLeft: 10,
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
    fontSize: 15,
  },
  message: {
    color: '#666',
    fontSize: 13,
  },
});