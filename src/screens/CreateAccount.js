import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import GreenButton from '../components/Buttons/GreenButton';
import WhiteButton from '../components/Buttons/WhiteButton';
import TitleDetail from '../components/TitleDetail';
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// import {f,authh,db} from './config/config';
import LanguagesDropDown from '../components/DropDowns/LanguagesDropDown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Navigation } from "react-native-navigation";
class CreateAccount extends Component {


  constructor(props) {
  super(props);
  this.state={

    language:""


  }
  }

  componentDidMount()
  {
    SplashScreen.hide();

    //  this.registerUser("testing@gmail.com","testing");

  }
 


  on_touch_button = (value)=>{

    console.warn("Green Button clicked As a Student",value);


this.navigation_to_other_screen();



  }

  navigation_to_other_screen = ()=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:"SocialLogins",
        passProps: {
          passProps: "text"
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


  navigation_to_teacher_screen = ()=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:"SocialLogins",
        passProps: {
          teacher: true
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

  on_touch_white_button=(value)=>{

    console.warn("White Button clicked",value);
    this.navigation_to_teacher_screen();

  }

  receive_language_from_child = (value)=>{

    this.setState({language:value})

    console.warn("in Parent Langugae is=",this.state.language);

  }
  render(){
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}

      <View style={{flex:1,paddingHorizontal:10,backgroundColor:"#E5E5E5",paddingBottom:20}}>

        

      <View style={{
          // backgroundColor:"pink",
        //  flex:1,
        // marginTop:20,
        height:hp('5%'),
        // width:wp('50%'),
        alignItems:"flex-end"
        }}>
          <LanguagesDropDown
          child={this.receive_language_from_child} 
          ></LanguagesDropDown>
      </View>


      <View style={styles.LogoView}>
        <Image style={styles.LogoStyle} source={require('../assets/blocked.png')}></Image>
      </View>


      <View style={styles.coverView}>
      <Image style={styles.coverStyle} source={require('../assets/create_account_image.png')}></Image>
      </View>


      <View style={{height:50,marginTop:30,
        // backgroundColor:"red",
        justifyContent:"center"}}>
        <TitleDetail
         title="CREATE ACCOUNT"
         detail="Please tap if you would like to sign up"
        ></TitleDetail>
      </View>
      

        <View style={{height:45,marginTop:30,borderRadius:5,borderWidth:1,borderColor:"#3FB65F"}}>
        <GreenButton on_touch={this.on_touch_button}>
        <Text style={styles.WhiteTextStyle}>As A STUDENT</Text>
        </GreenButton>
        </View>



        <View style={{marginTop:10,height:45}}>
        <WhiteButton on_touch={this.on_touch_white_button}>
        <Text style={styles.GREENTextStyle}>As A TEACHER</Text>
        </WhiteButton>
        </View>

        

        </View>

    </>
  );
          }
};

const styles = StyleSheet.create({

  WhiteTextStyle:{

    fontSize:hp('2.5%'),
    color:"#FFFF",
    fontFamily:"Sansation_Regular"

  },
  GREENTextStyle:{

    fontSize:hp('2.5%'),
    color:"#3FB65F",
    fontFamily:"Sansation_Regular"

  },
  LogoView:{
    // backgroundColor:"grey",
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    height:hp('8%')

  },
  LogoStyle:{

  resizeMode:"contain",
   flex:1
    

  },
  coverView:{
    // backgroundColor:"blue",
    marginTop:30,
    justifyContent:"center",
    alignItems:"center",
     flex:1
    //  height:hp('32%')

  },
  coverStyle:{
    resizeMode:"contain",
    flex:1
  }

  
});

export default CreateAccount;
