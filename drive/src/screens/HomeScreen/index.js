// import { styles } from 'ansi-colors';
import React from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from './styles.js';


const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyBADuYrmqFplnVIa4NxY90TTpPln235CxU';



const HomeScreen = (props) => {
    return ( 
        <View >
            {/* <Text>You are </Text> */}
              <MapView
              style={{width: '100%', height: Dimensions.get('window').height - 150}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true} 
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}

    
  />

<MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
  />

  



  <Entypo style={[styles.roundButton, {top: 10, left: 10}]} name={"menu"} size={24} color="grey"/>

  <AntDesign style={[styles.roundButton, {top: 10, right: 10}]} name={"search1"} size={24} color="grey"/>

  <Entypo style={[styles.roundButton, {bottom: 160, left: 10}]} name={"shield"} size={24} color="grey"/>

  <AntDesign style={[styles.roundButton, {bottom: 160, right: 10}]} name={"message1"} size={24} color="grey"/>

  <Entypo style={[styles.roundButton, {bottom: 160, left: 10}]} name={"shield"} size={24} color="grey"/>

  {/* <Entypo style={[styles.goButton, {bottom: 160, left: 10}]} name={"shield"} size={24} color="grey"/> */}




 


  







  <View style={styles.bottomContainer}>

      <Entypo name={"sound-mix"} size={24}/>


      <Text style={styles.bottomText}>You're offline</Text>



      <Entypo name={"menu"} size={24}/>

  </View>




        </View>
    )
}

export default HomeScreen
