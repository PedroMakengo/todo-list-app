import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    fontFamily: theme.fonts.family.regular,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
})
