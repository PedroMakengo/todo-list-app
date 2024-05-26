import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: '#333',
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontSize: 22,
    fontFamily: theme.fonts.family.regular,
  },
})
