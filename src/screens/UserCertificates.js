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

import { Navigation } from "react-native-navigation";

import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import LinearGradient from 'react-native-linear-gradient';
import TitleDetail from '../components/TitleDetail';
import CardView from '../components/Cards/CardView';
import TeachingCourses from '../components/DropDowns/TeachingCourses';
import CheckBox from 'react-native-check-box';
import DocumentPicker from 'react-native-document-picker';
import GreenButton from '../components/Buttons/GreenButton';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class UserCertificates extends Component {


  constructor(props) {
  super(props);
  this.state={
isChecked:false
    


  }
  }

  componentDidMount()
  {
    SplashScreen.hide();

    

  }

  navigation_to_other_screen = ()=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:"Profile",
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

  pick_Certificate = async()=>{

    // Pick a single file
try {
  const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.allFiles],
  });
  console.log(
    res.uri,
    res.type, // mime type
    res.name,
    res.size
  );
} catch (err) {
  if (DocumentPicker.isCancel(err)) {
    // User cancelled the picker, exit any dialogs or menus and move on
  } else {
    throw err;
  }
}

  }

  on_touch_button = ()=>{

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
        title="SIGN UP"
        detail="Please fill beow details to create a new account"
        ></TitleDetail>
      </View>



    
    
      <CardView>
      <TeachingCourses></TeachingCourses>
      </CardView>


      <View style={{marginTop:20}}>
        <Text style={styles.InputTextStyle}>Upload your teaching certification and degrees in education</Text>
      </View>



      <CardView>
        <TouchableOpacity onPress={()=>this.pick_Certificate()} style={{flex:1}}>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",alignItems:"center"}}>
      <Text style={[styles.InputTextStyle,{fontSize:hp('2%')}]}>
        Certification</Text>
        <Image style={{resizeMode:"contain",marginRight:5}} source={require('../assets/page.png')}></Image>
        </View>
        </TouchableOpacity>
      </CardView>

      <CardView>
        <TouchableOpacity onPress={()=>this.pick_Certificate()} style={{flex:1}}>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",alignItems:"center"}}>
      <Text style={[styles.InputTextStyle,{fontSize:hp('2%')}]}>
      Education Degree</Text>
        <Image style={{resizeMode:"contain",marginRight:5}} source={require('../assets/page.png')}></Image>
        </View>
        </TouchableOpacity>
      </CardView>


<View>
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
      </View>




<View style={{flex:1,justifyContent:"flex-end"}}>
<View style={{height:45,marginTop:30,borderRadius:5,borderWidth:1,borderColor:"#3FB65F"}}>
        <GreenButton on_touch={this.on_touch_button}>
        <Text style={styles.WhiteTextStyle}>SIGN UP</Text>
        </GreenButton>
</View>
</View>



      
        </View>

    </>
  );
          }
};

const styles = StyleSheet.create({

  InputTextStyle:{


    fontSize:hp('2.2%'),
    color:"#000000",
    fontFamily:"Sansation_Bold",
    // textAlign:"center",

    },
    linearGradient: {
        // flex: 1,
        height:45,
        marginTop:15,
        borderRadius:5,
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
  
  
});

export default UserCertificates;
