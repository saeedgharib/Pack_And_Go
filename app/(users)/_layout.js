import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth} from '@clerk/clerk-expo';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#fff'} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
         
        //   backgroundColor: 'lightgreen',
        },
        headerBackground:()=>(
            <BlurView
intensity={90}
style={{
... StyleSheet.absoluteFillObject,
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
overflow: "hidden",
backgroundColor: "transparent",
}}
/>
        ),
        headerTintColor: '#fff',
        tabBarActiveTintColor:'green',
      }}>
      <Tabs.Screen
        name="UserHomePage"
        options={{
        
        //   headerStyle:{opacity:500},
          headerTitle: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Home',
          headerRight: () => <Ionicons name='person-circle' size={42} color='white' />
                  }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name='Profile/[id]'
        
        options={{
          href:{
            pathname:'Profile/[id]',
            params:{id:1}
          },
          headerTitle: 'My Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
          tabBarLabel: 'My Profile',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;