import React from 'react'
import { StyleSheet, Text, View,FlatList,Image,ImageBackground } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OffersComponent = (props) => {
    return (
        <View style={{flex:1,
            // backgroundColor:"pink",
            marginHorizontal:"5%",
            marginTop:"3%"
            }}>
          
              <FlatList
              data={props.offers}
              renderItem={({item})=>
          
            <View style={{height:hp('22%'),
            marginBottom:"5%"
            // backgroundColor:"red"
            }}>
          
            <View style={{height:"15%",
            // backgroundColor:"green",
            marginBottom:"1%",
            justifyContent:"center",}}>
            <Text style={styles.popularText}>{item.label}</Text>
            </View>
          
            <ImageBackground style={{height:"85%",backgroundColor:"grey",borderRadius:20}}>
          
          <View style={{padding:10}}>
          <Text style={styles.itemText}>{item.text}</Text>
          </View>
          
          <View style={styles.hostView}>
            <View style={{paddingLeft:5}}><Text style={{color:"#fff",textAlign:"center",fontSize:RFValue(12)}}>Become a host</Text></View>
            <View style={{paddingRight:5}}>
              <Image style={{tintColor:"#fff"}} source={require('../assets/icons-back-light.png')}></Image>
            </View>
          </View>
            </ImageBackground>
            </View>
          
                
              }
              >
          
              </FlatList>
          
          
            
              
          
          
          </View>
          
          
    )
}

export default OffersComponent

const styles = StyleSheet.create({

    hostView:{
        backgroundColor:"#006EEC",position:"absolute",bottom:0,right:0,height:"30%",width:"45%"
          ,justifyContent:"center",alignItems:"center",justifyContent:"space-between",
          flexDirection:"row",borderTopLeftRadius:10,borderBottomRightRadius:20
          
    },
    popularText:{

        fontSize:RFValue(16),
        color:"#3A3A3A"
    
      },
      itemText:{

        fontSize:RFValue(18),
        color:"#ffff"
    
      }
})
