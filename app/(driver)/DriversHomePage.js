import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { getFirestore, collection, query, where, getDocs, setDoc } from 'firebase/firestore';
import DB from '../../database/firebaseConfig'
import { Link } from 'expo-router';
import { IconButton } from 'react-native-paper';


const DriversHomePage = () => {

const {user}=useUser()

useEffect(() => {
    
  })
  return (
    <View>
        <Text>Driver Home {user.emailAddresses[0].emailAddress}</Text>
        <Link href='https://assured-alpaca-88.accounts.dev/user'>
              <Text>Go to profile dash</Text>
        </Link>
        <IconButton
   icon="">
  
<Text>press me</Text>
        </IconButton>
         </View>
  )
}

export default DriversHomePage
