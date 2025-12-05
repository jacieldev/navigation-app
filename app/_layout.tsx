import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';

import { useEffect } from 'react';
import "./global.css";

SplashScreen.preventAutoHideAsync();

const Rootlayout = () => {

   const [fontsLoaded, error] = useFonts({
      'work-black': require('../assets/fonts/WorkSans-Black.ttf'),
      'work-light': require('../assets/fonts/WorkSans-Light.ttf'),
      'work-medium': require('../assets/fonts/WorkSans-Medium.ttf'),
   })

   useEffect(() => {
      if (error) throw error;

      if (fontsLoaded) SplashScreen.hideAsync();
   }, [fontsLoaded, error])

   if (!fontsLoaded && !error) return null;

   return <Slot />
   // return <Stack />
}

export default Rootlayout