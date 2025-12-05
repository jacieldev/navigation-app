import React from 'react'
import { View } from 'react-native'

import { Link, router } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '@/components/CustomButton'

const Home = () => {
   return (
      <SafeAreaView >

         <View className='px-10 mt-5'>
            <CustomButton
               className='mb-2'
               color='primary'
               onPress={() => router.push('/products')}
            >
               Products
            </CustomButton>

            <CustomButton
               className='mb-2'
               color='primary'
               onPress={() => router.push('/profile')}
            >
               Profile
            </CustomButton>

            <CustomButton
               className='mb-2'
               color='tertiary'
               onPress={() => router.push('/settings')}
            >
               Settings
            </CustomButton>

            <Link className='mb-10' href='/products' asChild>
               <CustomButton variant='text-only' color='primary'>
                  this is the button with Link tag
               </CustomButton>
            </Link>

            {/* <View className='px-10'>
            <Link className='mb-5' href='/profile'>Profile</Link>
            <Link className='mb-5' href='/settings'>Settings</Link>
         </View> */}

         </View>
      </SafeAreaView>
   )
}

export default Home;