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
  TextInput
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import LinearGradient from 'react-native-linear-gradient';
import { Navigation } from "react-native-navigation";
import TitleDetail from '../components/TitleDetail';
import CardView from '../components/Cards/CardView';
import TeachingCourses from '../components/DropDowns/TeachingCourses';
import CardViewSmall from '../components/Cards/CardViewSmall';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class PhoneAuthentication extends Component {


  constructor(props) {
  super(props);
  this.state={
    box1:undefined,
    box2:undefined,
    box3:undefined,
    box4:undefined,

  }
  }

  componentDidMount()
  {
    SplashScreen.hide();

    

  }

  navigation_to_other_screen = ()=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:"UserCertificates",
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


  onchange_box1 = (value) =>{

    this.setState({
        box1:value
    })
    if(value.length==1)
    {
        this.focusNextField('2');

    }


}

onchange_box2 = (value) =>{

    this.setState({
        box2:value
    })
    if(value.length==1)
    {
        this.focusNextField('3');

    }
    if(value.length==0)
    {
        this.focusNextField('1');
    }

}

onchange_box3 = (value) =>{

    this.setState({
        box3:value
    })
    if(value.length==1)
    {
        this.focusNextField('4');

    }
    if(value.length==0)
    {
        this.focusNextField('2');
    }

}

onchange_box4 = (value) =>{

    this.setState({
        box4:value
    })
    
    if(value.length==0)
    {
        this.focusNextField('3');
    }

}


focusNextField=(nextField)=> {
  this.refs[nextField].focus();
}


login_with_zoom = ()=>{

    console.warn("Zoom Clicked");
      
}


login_with_google_classroom = ()=>{

    console.warn("classroom Clicked");

  }

  login_with_facebook = ()=>{

    console.warn("facebook Clicked");

  }


login_with_instagram = ()=>{

    console.warn("instagram Clicked");

  }

  on_touch_button =()=>{
    this.navigation_to_other_screen();
  }
  
  render(){
  return (
    <>
      

      <View style={{flex:1,paddingHorizontal:10,backgroundColor:"#E5E5E5",paddingBottom:20}}>

        


      <View style={styles.LogoView}>
        <Image style={styles.LogoStyle} source={require('../assets/blocked.png')}></Image>
      </View>




      <View style={{height:50,marginTop:20,
        // backgroundColor:"red",
        justifyContent:"center"}}>
        <TitleDetail
        title="PHONE VERIFICATION"
        detail="Enter your OTP"
        ></TitleDetail>
      </View>



    

    <View style={{height:45,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:30,marginTop:20}}>

    <View style={{flex:1,marginRight:20}}>
    
      <CardViewSmall
       check={true}
      >

      <TextInput

        //  keyboardType={"number-pad"} 
        ref="1"
        style={styles.InputTextStyle}
        onChangeText={(value)=>this.onchange_box1(value)}
        value={this.state.box1}
        // placeholder="+44"
        autoCapitalize = 'none'
        placeholderTextColor="#9B9B9B"
        maxLength={1}
        keyboardType="phone-pad"

        />
      
      </CardViewSmall>
      </View>
      <View style={{flex:1,marginRight:20}}>

      <CardViewSmall
      check={true}
      >

      <TextInput

          //  keyboardType={"number-pad"} 
          ref="2"
          style={styles.InputTextStyle}
          onChangeText={(value)=>this.onchange_box2(value)}
          value={this.state.box2}
          // placeholder="+44"
          autoCapitalize = 'none'
          placeholderTextColor="#9B9B9B"
          maxLength={1}
          keyboardType="phone-pad"

          />
      
      </CardViewSmall>
      </View>

      <View style={{flex:1,marginRight:20}}>
      <CardViewSmall
      check={true}
      >



      <TextInput

          //  keyboardType={"number-pad"} 
          ref="3"
          style={styles.InputTextStyle}
          onChangeText={(value)=>this.onchange_box3(value)}
          value={this.state.box3}
          // placeholder="+44"
          autoCapitalize = 'none'
          placeholderTextColor="#9B9B9B"
          maxLength={1}
          keyboardType="phone-pad"

          />
      
      </CardViewSmall>
      </View>

      <View style={{flex:1}}>
      <CardViewSmall
      check={true}
      >



      <TextInput

        //  keyboardType={"number-pad"} 
        ref="4"
        style={styles.InputTextStyle}
        onChangeText={(value)=>this.onchange_box4(value)}
        value={this.state.box4}
        // placeholder="+44"
        autoCapitalize = 'none'
        placeholderTextColor="#9B9B9B"
        maxLength={1}
        keyboardType="phone-pad"

        />
      
      </CardViewSmall>
      </View>
      </View>


      <View style={{height:50,flexDirection:"row",marginTop:20,justifyContent:"center"}}>
        <Text style={styles.InputTextStyle}>Didn’t receive your code?</Text>
        <TouchableOpacity onPress={()=>this.on_touch_button()}><Text style={[styles.InputTextStyle,{color:"#3FB65F"}]}> Send</Text></TouchableOpacity>
      </View>



      
      

      

       
        

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

    fontSize:hp('2%'),
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

    InputTextStyle:{


      fontSize:hp('2%'),
      color:"#000000",
      fontFamily:"Sansation_Bold",
      textAlign:"center",
  
      },
  
  
});

export default PhoneAuthentication;
