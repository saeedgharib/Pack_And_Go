import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { useLocalSearchParams } from 'expo-router';

const Profile = () => {

    const {id} =useLocalSearchParams()
  const { user } = useUser();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();

  const onSaveUser = async () => {
    try {
      // This is not working!
      if (user) {
        await user.update(
            {
            firstName:FirstName,
            lastName:LastName,
    
          });
      } else {
        console.log(
            "user does not exist"
        )
      }
      
    console.log(" updated")
    } catch (e) {
      console.log('error', JSON.stringify(e));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Good morning {user?.firstName} {user.lastName}! {id}
      </Text>

      <TextInput placeholder={user.firstName}  onChangeText={setFirstName} style={styles.inputField} />
      <TextInput placeholder={user.lastName}  onChangeText={setLastName} style={styles.inputField} />
      <Button onPress={()=>onSaveUser()} title="Update account" color={'#6c47ff'}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Profile;