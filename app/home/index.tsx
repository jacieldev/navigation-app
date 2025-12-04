import React from 'react'
import { View } from 'react-native'

import { Link, router } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const Home = () => {
   return (
      <SafeAreaView >

         {/* this is another way */}
         <Link className='mb-10' href='/products' asChild>
            <CustomButton color='primary'>
               this is the button with Link tag
            </CustomButton>
         </Link>

         {/* this is a way */}
         <CustomButton className='mb-10' color='primary' onPress={() => router.push('/products')}>
            this is the button
         </CustomButton>

         <CustomButton className='mb-10' color='primary' variant='text-only' onPress={() => router.push('/products')}>
            this is the button
         </CustomButton>


         {/* <View className='px-10'>
            <Link className='mb-5' href='/profile'>Profile</Link>
            <Link className='mb-5' href='/settings'>Settings</Link>
         </View> */}
      </SafeAreaView>
   )
}

export default Home;