import React from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const InputTextView = (props) => {
    return (

        <TextInput

        style={styles.InputTextStyle}
        {...props}
        
        // onChangeText={(value)=>this.on_change_phone_number(value)}
        // value={this.state.phoneNumber}
        // placeholder="Phone Number"
        // keyboardType="number-pad"
        // placeholderTextColor="#808080"
        
  
          />
    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},

InputTextStyle:{


    fontSize:hp('2%'),
    color:"#000000",
    fontFamily:"Sansation_Bold"

    },
});

export default InputTextView;
