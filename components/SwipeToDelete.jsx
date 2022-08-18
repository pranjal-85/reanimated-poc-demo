import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { ScrollView ,GestureHandlerRootView} from 'react-native-gesture-handler';
import NotificationItem from './NotificationItem';

const MESSAGE = [
  'Slots for the week open. Book “MY SHIFTS” and earn incentives',
  'Festive surge coming up. Incentives upto ₹40. ',
  'Increase your earnings by availing “Mega MG” by completing orders',
  'Increase your earnings by availing “Mega MG” by completing orders',
  'Find the best places to charge your device, fill up your bike etc',
];



const NOTIFICATION = MESSAGE.map((title, index) => ({ title, index }));


const BACKGROUND_COLOR = '#FAFBFF';

export default function SwipeToDelete() {
  const [notification, setNotification] = useState(NOTIFICATION);

  const onDismiss = useCallback((task) => {
    setNotification((notification) => notification.filter((item) => item.index !== task.index));
  }, []);

  const scrollRef = useRef(null);

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Notifications</Text>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {notification.map((task) => (
          <NotificationItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
      </ScrollView>
    </SafeAreaView>

      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
  },
});

