import { View, Text } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Adicione uma {'\n'}
        <Text style={styles.subtitle}>Nova tarefa</Text>
      </Text>
    </View>
  )
}
