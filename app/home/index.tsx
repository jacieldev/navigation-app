import React from 'react'
import { View } from 'react-native'

import { Link, router } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const Home = () => {
   return (
      <SafeAreaView >
         {/* this is a way */}
         <CustomButton color='primary' onPress={() => router.push('/products')}>
            this is the button
         </CustomButton>

         {/* this is another way */}
         <Link className='mt-5' href='/products' asChild>
            <CustomButton color='primary'>
               this is the button with Link tag
            </CustomButton>
         </Link>

         {/* <View className='px-10'>
            <Link className='mb-5' href='/profile'>Profile</Link>
            <Link className='mb-5' href='/settings'>Settings</Link>
         </View> */}
      </SafeAreaView>
   )
}

export default Home;