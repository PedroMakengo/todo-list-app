import { StatusBar } from 'expo-status-bar'
import { Index } from '@/app/index'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <Index />
      <StatusBar style="auto" />
    </>
  )
}
