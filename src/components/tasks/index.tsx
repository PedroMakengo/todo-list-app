import { Button, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

interface Task {
  text: string
  completed: boolean
}
type Props = {
  tasks: Task[]
}

export function Tasks({ tasks }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {tasks.map((task, index) => (
        <View style={styles.container} key={index}>
          <Text style={[styles.textTask, task.completed && styles.completed]}>
            {task.text}
          </Text>

          <View style={styles.content}>
            <TouchableOpacity>
              <MaterialIcons name="check" size={22} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete" size={22} color="#ccc" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
