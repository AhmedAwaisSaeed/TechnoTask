import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import GreenButton from '../components/Buttons/GreenButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import CheckBox from 'react-native-check-box';

import { Navigation } from "react-native-navigation";
import LinearGradient from 'react-native-linear-gradient';
import TitleDetail from '../components/TitleDetail';
import CardViewSmall from '../components/Cards/CardViewSmall';
import TeachingCourses from '../components/DropDowns/TeachingCourses';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class UserSignUpDetails extends Component {


  constructor(props) {
  super(props);
  this.state={

    firstName:"",
    lastName:"",
    code:"",
    phoneNumber:"",
    country:"",
    email:"",
    password:"",
    isChecked:false,
    keyboardOpen:false

    


  }
  }

  componentDidMount()
  {
    SplashScreen.hide();

  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow =()=> {
    this.setState({
      keyboardOpen:true
    })
    // alert('Keyboard Shown');
  }

  _keyboardDidHide =()=> {
    // alert('Keyboard Hidden');
    this.setState({
      keyboardOpen:false
    })
  }

  navigation_to_other_screen = ()=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:"PhoneAuthentication",
        passProps: {
          text: 'Pushed screen'
        },
        // ,
        options: {
      //   // bottomTabs: { visible: false} 
         statusBar: {
               visible: false,
               
             }
      //       layout: {
      //         // direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
      //         backgroundColor: '#2D4374',
      //         // orientation: ['portrait', 'landscape'] // An array of supported orientations
      //       },
       }
      }
    });





  }

  on_change_first_name = (value)=>{

    this.setState({
      firstName:value
    })

  }

  on_change_last_name = (value)=>{


    this.setState({
      lastName:value
    })
    
  }


  on_change_code = (value)=>{


    this.setState({
      code:value
    })
    
  }


  on_change_phone_number = (value)=>{


    this.setState({
      phoneNumber:value
    })
    
  }


  on_change_country = (value)=>{


    this.setState({
      country:value
    })
    
  }


  on_change_email = (value)=>{


    this.setState({
      email:value
    })
    
  }


  on_change_password = (value)=>{


    this.setState({
      password:value
    })
    
  }


  on_touch_button = (value)=>{

    console.warn("Green Button clicked Submit",value);

this.navigation_to_other_screen();




  }


  
  render(){
  return (
    <>
      

      <View style={{flex:1,paddingHorizontal:10,backgroundColor:"#E5E5E5",paddingBottom:20}}>

        


      <View style={styles.LogoView}>
        <Image style={styles.LogoStyle} source={require('../assets/blocked.png')}></Image>
      </View>




      <View style={{marginTop:20,
        //  backgroundColor:"red",
        justifyContent:"center"}}>
        <TitleDetail
        title="SIGN UP"
        detail="Please fill beow details to create a new account"
        ></TitleDetail>
      </View>


<KeyboardAwareScrollView 

 
enableOnAndroid={true}
 keyboardShouldPersistTaps="handled"
 contentContainerStyle={[this.state.keyboardOpen ? styles.keyboardOpen : styles.keyboardClosed] }
 scrollEnabled={true}> 
    
    
      <CardViewSmall>

      <TextInput

//  keyboardType={"number-pad"} 

      style={styles.InputTextStyle}
      onChangeText={(value)=>this.on_change_first_name(value)}
      value={this.state.firstName}
      placeholder="First Name"
      // autoCapitalize = 'none'
      placeholderTextColor="#808080"
      // keyboardType="number-pad"

        />
      
      </CardViewSmall>



      <CardViewSmall>

      <TextInput

      style={styles.InputTextStyle}
      onChangeText={(value)=>this.on_change_last_name(value)}
      value={this.state.lastName}
      placeholder="Last Name"
      
      placeholderTextColor="#808080"
      

        />
      
      </CardViewSmall>

<View style={{flexDirection:"row"}}>


    <View style={{flex:0.3,marginRight:20}}>
      <CardViewSmall>

      <TextInput

      style={styles.InputTextStyle}
      onChangeText={(value)=>this.on_change_code(value)}
      value={this.state.code}
      placeholder="Code"
      keyboardType="phone-pad"
      placeholderTextColor="#808080"
      

        />
      
      </CardViewSmall>
      </View>



      <View style={{flex:1}}>
      <CardViewSmall>

      <TextInput

      style={styles.InputTextStyle}
      onChangeText={(value)=>this.on_change_phone_number(value)}
      value={this.state.phoneNumber}
      placeholder="Phone Number"
      keyboardType="number-pad"
      placeholderTextColor="#808080"
      

        />
      
      </CardViewSmall>
      </View>

</View> 
      {/* end of row */}


<CardViewSmall>

          <TextInput

          style={styles.InputTextStyle}
          onChangeText={(value)=>this.on_change_country(value)}
          value={this.state.country}
          placeholder="Country"
          // keyboardType="number-pad"
          placeholderTextColor="#808080"


            />

</CardViewSmall>



<CardViewSmall>

          <TextInput

          style={styles.InputTextStyle}
          onChangeText={(value)=>this.on_change_email(value)}
          value={this.state.email}
          placeholder="Email"
          // keyboardType="number-pad"
          placeholderTextColor="#808080"


            />

</CardViewSmall>



<CardViewSmall>

          <TextInput

          style={styles.InputTextStyle}
          onChangeText={(value)=>this.on_change_password(value)}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
          // keyboardType="number-pad"
          placeholderTextColor="#808080"


            />

</CardViewSmall>
      
 <CheckBox
    style={{flex: 1, padding: 10,paddingLeft:0,marginTop:20}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"I agree to the terms and conditions"}
     checkBoxColor={"#3FB65F"}
     
    // checkedCheckBoxColor={"#green"}
    // uncheckedCheckBoxColor={"green"}
    rightTextStyle={styles.InputTextStyle}

/> 

 <View style={{flex:1,justifyContent:"flex-end"}}>
<View style={{height:45,marginTop:30,borderRadius:5,borderWidth:1,borderColor:"#3FB65F"}}>
        <GreenButton on_touch={this.on_touch_button}>
        <Text style={styles.WhiteTextStyle}>SUBMIT</Text>
        </GreenButton>
</View>
</View> 



</KeyboardAwareScrollView>

        </View>

    </>
  );
          }
};

const styles = StyleSheet.create({
    linearGradient: {
        // flex: 1,
        height:45,
        marginTop:15,
        borderRadius:5,
    },

    InputTextStyle:{


    fontSize:hp('2%'),
    color:"#000000",
    fontFamily:"Sansation_Bold"

    },
        

  WhiteTextStyle:{

    fontSize:hp('2.5%'),
    color:"#FFFF",
    fontFamily:"Sansation_Bold"

  },
  GREENTextStyle:{

    fontSize:hp('2.5%'),
    color:"#3FB65F",
    fontFamily:"Sansation_Regular"

  },
  LogoView:{
      marginTop:50,
    //  backgroundColor:"grey",
    justifyContent:"center",
    alignItems:"center",
    height:hp('8%')

  },
  LogoStyle:{

  resizeMode:"contain",
   flex:1
    

  },
  ButtonView: {

      height:45,
      marginTop:15,
      borderRadius:5,borderWidth:1,borderColor:"#2D8CFF",
      flexDirection:"row",
    // flex:1,
    
    justifyContent:"center",
    alignItems:"center",
    
    backgroundColor:"#2D8CFF",
    // marginLeft:10,
    // marginRight:10
    
    
    },
    keyboardClosed:{
      flexGrow:1,
    },
    keyboardOpen:{
      flexGrow:1,
      paddingBottom:"80%"
    }
  
  
});

export default UserSignUpDetails;
