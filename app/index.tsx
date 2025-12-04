import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
   return (
      <SafeAreaView>
         <View className='mt-6 mx-2.5'>
            <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-3xl text-primary'>
               hello world
            </Text>

            <Text className='text-3xl font-work-black text-secondary'>hello world </Text>

            <Text className='text-3xl font-work-light text-secondary-200'>hello world </Text>
            <Text className='text-3xl font-work-light text-secondary-100'>hello world </Text>

            <Text className='text-3xl font-work-medium text-tertiary'>hello world </Text>
         </View>
      </SafeAreaView>
   )
}

export default App;