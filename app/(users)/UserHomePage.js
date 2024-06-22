import React, { useEffect,useState } from 'react'
import { View,ScrollView,FlatList } from 'react-native'
import { useUser } from '@clerk/clerk-expo'

import { doc } from 'firebase/firestore';
import DB from '../../database/firebaseConfig'
import { Link, usePathname } from 'expo-router';
import { IconButton } from 'react-native-paper';
import { Card, Text, Title, DataTable } from 'react-native-paper';


const UserHomePage = () => {

const {user}=useUser()

const [companies, setCompanies] = useState([]);
const [orderHistory, setOrderHistory] = useState([]);

useEffect(() => {
  // Dummy data for companies
  const dummyCompanies = [
    { id: '1', name: 'Company A', description: 'Description of Company A' },
    { id: '2', name: 'Company B', description: 'Description of Company B' },
    { id: '3', name: 'Company C', description: 'Description of Company C' },
  ];
  setCompanies(dummyCompanies);

  // Dummy data for order history
  const dummyOrders = [
    { id: '1001', date: '2023-01-01', status: 'Delivered' },
    { id: '1002', date: '2023-01-05', status: 'Shipped' },
    { id: '1003', date: '2023-01-10', status: 'Pending' },
  ];
  setOrderHistory(dummyOrders);
}, []);

const renderCompanyCard = ({ item }) => (
  <Card style={{ margin: 10,height:200 }} onPress={() => alert(`Company: ${item.name}`)}>
    <Card.Content>
      <Title>{item.name}</Title>
      <Text>{item.description}</Text>
    </Card.Content>
  </Card>
);

  return (
//     <View>
//         <Text>Users Home {user.emailAddresses[0].emailAddress}</Text>
//         <Link href={{
//           pathname: '../Profile/[id]',
//           params: { id: user.id },
//         }}>
//               <Text>Go to profile dash</Text>
//         </Link>
//         <IconButton
//    icon="">
  
// <Text>press me</Text>
//         </IconButton>
//          </View>
<ScrollView>
<View style={{ padding: 20 }}>
  <Title>Hello, <Title style={{fontWeight:'bold',color:'green'}}>{user?.fullName}</Title></Title>
  
  <FlatList
    data={companies}
    renderItem={renderCompanyCard}
    keyExtractor={item => item.id}
    horizontal
    style={{ marginVertical: 20 }}
  />

  <Title>Previous Order History</Title>
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Order ID</DataTable.Title>
      <DataTable.Title>Date</DataTable.Title>
      <DataTable.Title>Status</DataTable.Title>
    </DataTable.Header>
    {orderHistory.map(order => (
      <DataTable.Row key={order.id}>
        <DataTable.Cell>{order.id}</DataTable.Cell>
        <DataTable.Cell>{order.date}</DataTable.Cell>
        <DataTable.Cell>{order.status}</DataTable.Cell>
      </DataTable.Row>
    ))}
  </DataTable>
</View>
</ScrollView>
  )
}

export default UserHomePage
