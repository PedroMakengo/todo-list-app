import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useState, useEffect } from 'react'

import { styles } from './styles'
import { Header } from '@/components/header'
import { MaterialIcons } from '@expo/vector-icons'
import { Tasks } from '@/components/tasks'

import { supabase } from '@/services/supabase'

export function Index() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TasksProps[]>([])

  const fetchTasks = async () => {
    const { data, error } = await supabase.from('tasks').select('*')

    if (error) {
      console.error(error)
    } else {
      setTasks(data)
    }
  }

  const handleAddTask = async (task: string) => {
    // Inserir informações supabase
    const { data, error } = await supabase
      .from('tasks')
      .insert({ task, completed: false })

    if (error) {
      console.error(error)
    } else {
      setNewTask('')
      await fetchTasks()
    }
  }

  const deleteTask = async (id: number) => {
    const { error } = await supabase.from('tasks').delete().match({ id })

    if (error) {
      console.warn('Error')
    } else {
      await fetchTasks()
    }
  }

  const updateTask = async (id: number, completed: boolean) => {
    const { error } = await supabase
      .from('tasks')
      .update({ completed })
      .match({ id })

    if (!error) {
      await fetchTasks()
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask(newTask)}
        >
          <MaterialIcons name="add" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onCompleted={updateTask} onDelete={deleteTask} />
      ) : (
        <View style={styles.containerTarefas}>
          <Text style={styles.textTarefa}>Não existe tarefa</Text>
        </View>
      )}
    </SafeAreaView>
  )
}
