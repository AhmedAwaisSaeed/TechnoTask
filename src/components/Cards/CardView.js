import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const CardView = (props) => {
    return (
        <View style={styles.cardView}>
            {props.children}
        </View>
    )
}

export default CardView;

const styles = StyleSheet.create({


    cardView: {
        shadowColor: '#3E5884',
        shadowOffset: {width:1, height: 1},
    
        shadowOpacity: 1,
    
        elevation: 3,
        shadowRadius: 2,
        
        paddingLeft:15,
        paddingRight:10,
        marginTop:20,
        // overflow: 'hidden',
        //   flex: 1,
        //  flex: 1,
        height:50,
        // alignItems:"center",
        justifyContent:"center",
         
         
        // marginLeft:10,
        // marginRight:10,
    
    
         backgroundColor: '#FFFF',
        //  borderColor:"#ECEFF6",
        // borderWidth:0.5,
         borderRadius: 5,
        // paddingBottom:20,
        // marginBottom:20
      },


})
