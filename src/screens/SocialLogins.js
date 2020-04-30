import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {f,authh,db} from '../../config/config';
import LinearGradient from 'react-native-linear-gradient';
import TitleDetail from '../components/TitleDetail';
import { Navigation } from "react-native-navigation";
// import { LoginButton, AccessToken } from 'react-native-fbsdk';
 import { LoginManager,AccessToken  } from 'react-native-fbsdk';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class SocialLogins extends Component {


  constructor(props) {
  super(props);
  this.state={

    teacher:false


  }
  }

  componentDidMount()
  {
    SplashScreen.hide();
    if(this.props.teacher)
    {
      this.setState({
        teacher:true
      })

    }
    else
    {

    }

    

  }

  navigation_to_other_screen = (screenName)=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:screenName,
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


login_with_zoom = ()=>{

    console.warn("Zoom Clicked");
    if(this.state.teacher)
    {
      this.navigation_to_other_screen("UserCertificates");
    }
    else
    {
      this.navigation_to_other_screen("UserSignUpDetails");
    }
    
      
}


login_with_google_classroom = ()=>{

    console.warn("classroom Clicked");
    if(this.state.teacher)
    {
      this.navigation_to_other_screen("UserCertificates");
    }
    else
    {
      this.navigation_to_other_screen("UserSignUpDetails");
    }

  }

  login_with_facebook = ()=>{

    console.warn("facebook Clicked");

    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );

          
          return AccessToken.getCurrentAccessToken();
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    ).then(data =>{

      const Credentials=f.auth.FacebookAuthProvider.credential(data.accessToken);

      return f.auth().signInWithCredential(Credentials);

    })
    .then(user =>{

      console.log("facebook current user is=",user);

    })

  }


login_with_instagram = ()=>{

    console.warn("instagram Clicked");
    if(this.state.teacher)
    {
      this.navigation_to_other_screen("UserCertificates");

    }
    else
    {
      this.navigation_to_other_screen("UserSignUpDetails");
    }

  }
  
  render(){
  return (
    <>
      

      <View style={{flex:1,paddingHorizontal:10,backgroundColor:"#E5E5E5",paddingBottom:20}}>





{/* 
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>  */}

        


      <View style={styles.LogoView}>
        <Image style={styles.LogoStyle} source={require('../assets/blocked.png')}></Image>
      </View>




      <View style={{height:50,marginTop:20,
        // backgroundColor:"red",
        justifyContent:"center"}}>
        <TitleDetail
        title="SOCIAL LOGIN"
        detail="Fill in your account details using"
        ></TitleDetail>
      </View>


      <TouchableOpacity onPress={()=>this.login_with_zoom()} style={styles.ButtonView}>
          <Image style={{marginRight:10,marginTop:1,resizeMode:"contain",height:10}}  source={require('../assets/zoom.png')}></Image>
          <Text style={styles.WhiteTextStyle}>Login with Zoom (required)</Text>
    </TouchableOpacity>



    <TouchableOpacity onPress={()=>this.login_with_google_classroom()} style={[styles.ButtonView,{backgroundColor:"#20A464",borderColor:"#20A464"}]}>
          <Image style={{marginRight:10,marginTop:1,resizeMode:"contain"}}  source={require('../assets/classroom.png')}></Image>
          <Text style={styles.WhiteTextStyle}>Login with Google Classroom (required)</Text>
    </TouchableOpacity>



    <TouchableOpacity onPress={()=>this.login_with_facebook()} style={[styles.ButtonView,{backgroundColor:"#3B5998",borderColor:"#3B5998"}]}>
          <Image style={{marginRight:10,marginBottom:1, resizeMode:"contain",height:20}}  source={require('../assets/facebook.png')}></Image>
          <Text style={styles.WhiteTextStyle}>Login with Facebook</Text>
    </TouchableOpacity>


<LinearGradient 
start={{x: 1, y: 0}} end={{x: 0, y: 1}}
colors={['#C837AB','#FF543E','#FFDD55']} style={styles.linearGradient}> 
    <TouchableOpacity onPress={()=>this.login_with_instagram()} style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Image style={{marginRight:10, resizeMode:"contain",height:20}}  source={require('../assets/instagram.png')}></Image>
          <Text style={styles.WhiteTextStyle}>Login with Instagram</Text>
    </TouchableOpacity>

    </LinearGradient>
      

       
        

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
        

  WhiteTextStyle:{

    fontSize:hp('2%'),
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
  
  
});

export default SocialLogins;
