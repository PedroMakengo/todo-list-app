import { Button, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'

export function Tasks() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Estudar</Text>
        <Button title="Concluir" />
        <Button title="Excluir" />
      </View>
    </ScrollView>
  )
}
