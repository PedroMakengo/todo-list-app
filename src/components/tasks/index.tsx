import { Button, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  tasks: TasksProps[]
  onDelete?: (id: number) => void
  onCompleted?: () => void
}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {tasks.map((task, index) => (
        <View style={styles.container} key={index}>
          <Text style={[styles.textTask, task.completed && styles.completed]}>
            {task.task}
          </Text>

          <View style={styles.content}>
            <TouchableOpacity onPress={onCompleted}>
              <MaterialIcons name="check" size={22} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onDelete && onDelete(Number(task.id))}
            >
              <MaterialIcons name="delete" size={22} color="#ccc" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
