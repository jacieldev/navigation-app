import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
   return (
      <SafeAreaView>
         <View className='mt-6 mx-2.5'>
            <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-3xl '>
               hello world
            </Text>

            <Text className='text-3xl font-work-black'>hello world </Text>

            <Text className='text-3xl font-work-light'>hello world </Text>

            <Text className='text-3xl font-work-medium'>hello world </Text>
         </View>
      </SafeAreaView>
   )
}

export default App;