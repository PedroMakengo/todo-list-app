import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'

import { styles } from './styles'
import { Header } from '@/components/header'
import { MaterialIcons } from '@expo/vector-icons'

export function Index() {
  const [newTask, setNewTask] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="add" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
