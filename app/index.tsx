import { Redirect } from 'expo-router';
import React from 'react';


const App = () => {

   return <Redirect href='/home' />
   // return (
   //    <SafeAreaView>
   //       <View className='mt-6 mx-2.5'>
   //          <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-3xl text-primary'>
   //             hello world
   //          </Text>

   //          <Text className='text-3xl font-work-black text-secondary'>hello world </Text>

   //          <Text className='text-3xl font-work-light text-secondary-200'>hello world </Text>
   //          <Text className='text-3xl font-work-light text-secondary-100'>hello world </Text>

   //          <Text className='text-3xl font-work-medium text-tertiary'>hello world </Text>
   //       </View>
   //    </SafeAreaView>
   // )
}

export default App;