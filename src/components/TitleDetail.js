import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';

  import LinearGradient from 'react-native-linear-gradient';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TitleDetail = (props) =>{


    return(
        
        <>
            <View style={styles.TitleView}><Text style={styles.TitleText}>{props.title}</Text></View>
            <View style={styles.DetailView}><Text style={styles.DetailText}>{props.detail}</Text></View>
    </>

        

    )



}


const styles = StyleSheet.create({

    container:{
        flex:1
    },
    TitleView:{
height:hp('2%'),

    },
    TitleText:{


    fontSize:hp('2.5%'),
    textAlign:"center",
    color:"#000000",
    fontFamily:"Sansation_Bold"

    },
    DetailView:{
        // maxheight:hp('2.5%'),
        maxHeight:50,
        marginTop:10,
        // backgroundColor:"pink"

    },
    DetailText:{

marginTop:2,
    fontSize:hp('2.2%'),
    color:"#767676",
    textAlign:"center",
    fontFamily:"Sansation_Regular"

    }

});

export default TitleDetail;
