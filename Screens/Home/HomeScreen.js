import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
<View style={styles.container}>
<StatusBar style="auto" />

      <Text> Home Screen </Text>


    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  title: {
  fontSize: 24,
  marginBottom: 20,
  }
  });