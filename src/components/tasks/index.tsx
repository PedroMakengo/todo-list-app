import { Button, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  task: {
    text: string
    completed: boolean
  }
}

export function Tasks({ task }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={[styles.textTask, task.completed && styles.completed]}>
          Estudar
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

      <View style={styles.container}>
        <Text style={[styles.textTask, task.completed && styles.completed]}>
          Estudar
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

      <View style={styles.container}>
        <Text style={[styles.textTask, task.completed && styles.completed]}>
          Estudar
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
    </ScrollView>
  )
}
