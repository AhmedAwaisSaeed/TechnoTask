import React from 'react'
import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardViewSmall from '../components/CardViewSmall';

const PopularDestinations = (props) => {
    return (
        <View>
        <View style={styles.headerSection}>
      <View>
        <Text style={styles.popularText}>Popular Destinations</Text>
      </View>


      <TouchableOpacity style={{marginRight:"5%"}}>
        <Text style={styles.viewallText}>view All</Text>
      </TouchableOpacity>
  </View>

<View style={{height:hp('18%'),marginLeft:"5%",
// backgroundColor:"pink",

}}>
  <FlatList
 horizontal={true}
 showsHorizontalScrollIndicator={false}
        data={props.popularDestinations}
        renderItem={({ item,index }) => 
        

          <View style={[
        
            styles.itemView
            ,{marginLeft:index>0 ? wp('2%'):0}
             

              
          ]}>

          <Text style={{color:"#fff"}}>{item.name}</Text>
             
          </View>
          
    
        }
        keyExtractor={item => item.id}
      />

 

</View>
</View>
    )
}

export default PopularDestinations

const styles = StyleSheet.create({

    headerSection:{
        height:hp('3%'),flexDirection:"row",justifyContent:"space-between",
// backgroundColor:"green",
marginHorizontal:"5%",
marginTop:"5%"

    },
    itemView:{
        height:hp('16%'),
        width:wp('32%'),
        borderRadius:20,
        backgroundColor:"grey",
         justifyContent:"center",
         alignItems:"center",
         alignSelf:"center",
         marginRight:wp('2%'),
         shadowColor: "#000000",
         elevation:5,
         shadowOffset: {  width: 0,
            height: 17},
            shadowRadius: 13,
            shadowOpacity: 1,
    },
    popularText:{

        fontSize:RFValue(16),
        color:"#3A3A3A"
    
      },
})
