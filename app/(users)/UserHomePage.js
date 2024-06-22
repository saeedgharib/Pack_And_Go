import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { getFirestore, collection, query, where, getDocs, setDoc } from 'firebase/firestore';
import DB from '../../database/firebaseConfig'
import { Link, usePathname } from 'expo-router';
import { IconButton } from 'react-native-paper';


const UserHomePage = () => {

const {user}=useUser()

useEffect(() => {
    
  })
  return (
    <View>
        <Text>Users Home {user.emailAddresses[0].emailAddress}</Text>
        <Link href={{
          pathname: '../Profile/[id]',
          params: { id: user.id },
        }}>
              <Text>Go to profile dash</Text>
        </Link>
        <IconButton
   icon="">
  
<Text>press me</Text>
        </IconButton>
         </View>
  )
}

export default UserHomePage
