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

import GreenButton from './src/components/Buttons/GreenButton';
import WhiteButton from './src/components/Buttons/WhiteButton';
import TitleDetail from './src/components/TitleDetail';
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {f,authh,db} from './config/config';
import LanguagesDropDown from './src/components/DropDowns/LanguagesDropDown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Navigation } from "react-native-navigation";
class App extends Component {


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
  registerUser =(email,passowrd)=>{

    authh.createUserWithEmailAndPassword(email,passowrd) //yeh register kay baad sign in bhi kar daita ha user ko
    .then((user)=>{
      console.warn("created user is=",user);
    })
    .catch((error)=>{
      console.warn("Error is=",error);
      
    })

  }


  on_touch_button = (value)=>{

    console.warn("Green Button clicked Create Account",value);


this.navigation_to_other_screen();



  }

  navigation_to_other_screen = ()=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:"CreateAccount",
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

  on_touch_white_button=(value)=>{

    console.warn("White Button clicked",value);
    this.navigation_to_other_screen();

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
        <Image style={styles.LogoStyle} source={require('./src/assets/blocked.png')}></Image>
      </View>


      <View style={styles.coverView}>
      <Image style={styles.coverStyle} source={require('./src/assets/cover1.png')}></Image>
      </View>


      <View style={{height:40,marginTop:30,
        // backgroundColor:"red",
        justifyContent:"center"}}>
        <Text style={styles.TitleText}>Please create an account or {"\n"} sign in</Text>
      </View>
      

        <View style={{height:45,marginTop:30,borderRadius:5,borderWidth:1,borderColor:"#3FB65F"}}>
        <GreenButton on_touch={this.on_touch_button}>
        <Text style={styles.WhiteTextStyle}>CREATE ACCOUNT</Text>
        </GreenButton>
        </View>



        <View style={{marginTop:10,height:45}}>
        <WhiteButton on_touch={this.on_touch_white_button}>
        <Text style={styles.GREENTextStyle}>SIGN IN</Text>
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
  },
  TitleText:{


    fontSize:hp('3%'),
    textAlign:"center",
    color:"#000000",
    fontFamily:"Sansation_Bold"

    },

  
});

export default App;
