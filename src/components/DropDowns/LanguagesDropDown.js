import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  StatusBar
} from 'react-native';
// import { Chevron } from 'react-native-shapes';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const sports = [
  {
    label: 'English',
    value: 'English',
    
    
  },
  {
    label: 'French',
    value: 'French',
  },
  {
    label: 'Spanish',
    value: 'Spanish',
  },
  {
    label: 'Chinese',
    value: 'Chinese',
  },
  {
    label: 'Hindi',
    value: 'Hindi',
  }
  
 
  
];

export default class LanguagesDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      
      favSport3: this.props.defaultValue,
      allCompanies:this.props.allCompanies,
      
      allCompaniesDropDown:[]
      
      
    };

      // this.InputAccessoryView = this.InputAccessoryView.bind(this);
  }

  componentDidMount(){
    StatusBar.setHidden(true);
  }



 

  changeValue = async (val,index)=>{

    // console.log("dropdwon value is=",val);

    
    await this.setState({favSport3: val});

    var answer=this.state.favSport3;
    console.log("dropdwon value is=",answer);

    this.props.child(answer);
    
    // this.props.functioncall(this.state.favSport3);

  }

  render() {
    const placeholder = {
       label: 'Choose Language',
       value: null,
       
      //  color: '#999999',
      //  fontSize:13
    };

    return (
      
        <View style={styles.container}>

        {/* <Text>custom icon using react-native-shapes</Text> */}
        {/* and useNativeAndroidPickerStyle={false} with underlineColorAndroid */}
        <RNPickerSelect
          placeholder={placeholder}
          items={sports}
          onValueChange={(value,index) => {this.changeValue(value,index) }}
          style={{
              ...pickerSelectStyles,
            iconContainer: {
               top: 13,
               right: 5,
              //  justifyContent:"center",
              //  alignItems:"center"
              
            },
            placeholder: {
              fontSize:hp('2.5%'),
              fontWeight:"bold",
              color:"#010169",
              fontFamily:"Sansation_Regular"
              // fontStyle: "normal",
            },
            
            
            
            
          }}
          Icon={() => { return null
            
          }}
          value={this.state.favSport3}
           useNativeAndroidPickerStyle={false}
           

           
          
            //  textInputProps={{ underlineColorAndroid: 'cyan' }}
          
        />

       
</View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //  paddingVertical: 40,
    //  paddingHorizontal: 10,
    //  flex: 1,
    // height:"100%",
    // width:"100%",
     
    //  paddingTop:2,
          //  backgroundColor:"green",
   
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
     paddingVertical: 16,
     paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 4,
    color: '#999999',
    //  flex:1,

     paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    // fontSize:hp('0%'),
    
     height:40,
    
      fontWeight:"bold",
    fontFamily:"Sansation_Regular",
      // paddingHorizontal: 10,
         paddingVertical: 0,
    // borderWidth: 0.5,
     borderColor: 'white',
    borderRadius: 8,
     color: 'black',
    paddingRight: 2, // to ensure the text is never behind the icon
    paddingLeft:0,
      //  backgroundColor:"pink"
  },
});
  