import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    gap: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  content: {
    flexDirection: 'row',
    gap: 6,
  },
  textTask: {
    fontFamily: theme.fonts.family.regular,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
})
