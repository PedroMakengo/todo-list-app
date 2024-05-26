import { View, SafeAreaView, Text, TextInput } from 'react-native'
import { useState } from 'react'

import { styles } from './styles'
import { Header } from '@/components/header'

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
      </View>
    </SafeAreaView>
  )
}
