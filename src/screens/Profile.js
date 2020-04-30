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
 import CardViewSmall from '../components/Cards/CardViewSmall';
 import QRCodeScanner from 'react-native-qrcode-scanner';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
class Profile extends Component {


  constructor(props) {
  super(props);
  this.state={

    name:"Nick R. Bocker",
    phoneNumber:"(+1) 312 320 2104",
    email:"janedoe@gmail.com",
    swtich:false,
    qr:""
    


  }
  }

  componentDidMount()
  {
    SplashScreen.hide();

    

  }

  onPressSwitch = () => {
    this.setState({ switch: !this.state.switch });
  }
onSuccess = e =>{

  this.setState({
    qr:e.data
  })

}

  
  render(){
  return (
    <>
      

      <View style={{flex:1,paddingHorizontal:10,backgroundColor:"#E5E5E5",paddingBottom:20}}>


{/* 
      <QRCodeScanner
        onRead={this.onSuccess}
        
       
      />

          <Text>{this.state.qr}</Text> */}

      <View style={styles.LogoView}>
        <Image style={styles.LogoStyle} source={require('../assets/blocked.png')}></Image>
      </View>




      <View style={{height:50,marginTop:20,
        // backgroundColor:"red",
        justifyContent:"center"}}>
        <TitleDetail
        title="BLOCK ED PROFILE"
        detail=""
        ></TitleDetail>
      </View>


      <View style={{height:hp('30%'),justifyContent:"center",alignItems:"center",resizeMode:"contain"}}>
        <Image source={require('../assets/qrcode.png')}></Image>
      </View>


      <CardViewSmall>
          <Text style={styles.InputTextStyle}>{this.state.name}</Text>
      </CardViewSmall>



      <CardViewSmall>
          <Text style={styles.InputTextStyle}>{this.state.phoneNumber}</Text>
      </CardViewSmall>

      <CardViewSmall>
          <Text style={styles.InputTextStyle}>{this.state.email}</Text>
      </CardViewSmall>



<View style={{marginTop:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>


  <View style={{flex:1}}><Text style={[styles.InputTextStyle,{fontSize:hp('2.2%')}]}>Push Notifications</Text></View>


       <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><SwitchToggle
          containerStyle={{
            // marginTop: 16,
            width: 50,
            height: 25,
            borderRadius: 25,
            backgroundColor: '#FFFF',
            padding: 0,
          }}
          backgroundColorOn="#3FB65F"
          circleStyle={{
            width: 22,
            height: 22,
            borderRadius: 11,
            backgroundColor: 'white', // rgb(102,134,205)
          }}
          switchOn={this.state.switch}
          onPress={this.onPressSwitch}
          circleColorOff='white'
          circleColorOn='#FFFF'
          duration={300}
        />
        </View>
 

</View>


<View style={{marginTop:20}}><Text style={[styles.InputTextStyle,{fontSize:hp('2.2%')}]}>Change your Social Networks</Text></View>

<View style={{marginTop:20,height:45,flexDirection:"row"}}>



<View style={{flex:1.6,marginRight:20}}>
<CardViewSmall

      check={true}
>
<TouchableOpacity style={{flex:1}}>
<View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10}}><Image style={{height:"100%",width:"100%",tintColor:"#478DF7", resizeMode:"contain"}} 
 source={require('../assets/zoom.png')}></Image></View>
</TouchableOpacity>
</CardViewSmall>
</View>


<View style={{flex:1,marginRight:20}}>
<CardViewSmall
      check={true}
>

<TouchableOpacity style={{flex:1}}>
<View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10}}><Image
 style={{height:"100%",width:"100%",resizeMode:"contain"}}  source={require('../assets/classroom.png')}></Image></View>
</TouchableOpacity>
</CardViewSmall>
</View>


<View style={{flex:1,marginRight:20}}>
<CardViewSmall
      check={true}
>
<TouchableOpacity style={{flex:1}}>
<View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10}}><Image style={{height:"100%",width:"100%", resizeMode:"contain"}}  source={require('../assets/facebook.png')}></Image></View>
</TouchableOpacity>
</CardViewSmall>
</View>


<View style={{flex:1,marginRight:20}}>
<CardViewSmall
      check={true}
>
<TouchableOpacity style={{flex:1}}>
<View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10}}><Image style={{height:"100%",width:"100%", resizeMode:"contain"}}  source={require('../assets/instagram1.png')}></Image></View>
</TouchableOpacity>
</CardViewSmall>
</View>




</View>
      

       
        

        </View>

    </>
  );
          }
};

const styles = StyleSheet.create({

    InputTextStyle:{


        fontSize:hp('2%'),
        color:"#000000",
        fontFamily:"Sansation_Bold"
    
        },
            
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

export default Profile;
