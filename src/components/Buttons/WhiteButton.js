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

const WhiteButton = (props) =>{


    return(
        
        
        <TouchableOpacity onPress={()=>props.on_touch("White")} style={styles.ButtonView}>
            {/* <LinearGradient colors={['#63B368', '#63B368', '#63B368']} style={styles.linearGradient}> */}

            {props.children}
            {/* </LinearGradient> */}
            
        </TouchableOpacity>

        

    )



}


const styles = StyleSheet.create({
ButtonView: {

//  height:55,
flex:1,

justifyContent:"center",
alignItems:"center",

backgroundColor:"#F4F7FC",
borderWidth:1,
borderColor:"#63B368",
borderRadius:5

// marginLeft:10,
// marginRight:10


},
linearGradient:{
    flex:1,
    justifyContent:"center",
alignItems:"center",

}
});

export default WhiteButton;
