import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ImageBackground

} from 'react-native';


import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Navigation } from "react-native-navigation";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import PopularDestinationsComponent from './src/components/PopularDestinations';
import OffersComponent from './src/components/OffersComponent'
class App extends Component {


  constructor(props) {
  super(props);
  this.state={

    popularDestinations:[
      {
        name:"Riyadh"

      },
      {
        name:"Mecca"
      },
      {
        name:"Jeddah"
      }
    ],
    offers:[
      {
        label:"Start earning today",
        text:"Earn up to \n$1000/month"

      },
      {
        label:"Go for a ride",
        text:"Enjoy best ride \nplans with us"

      },
    ]
    


  }
  }


  


  on_touch_button = (value)=>{

    console.warn("Green Button clicked Create Account",value);


this.navigation_to_other_screen();



  }

  navigation_to_other_screen = (screenName)=>{


    Navigation.push(this.props.componentId, {
      component: {
        name:screenName,
        passProps: {
          text: 'Pushed screen'
        },
        
        options: {
      
         statusBar: {
               visible: false,
               
             }

       }
      }
    });





  }


  render(){
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
<SafeAreaView style={{flex:1}}>
<View style={{flex:1}}>

        
<PopularDestinationsComponent
popularDestinations={this.state.popularDestinations}
></PopularDestinationsComponent>

<OffersComponent
offers={this.state.offers}
></OffersComponent>


  
         

        

</View>
</SafeAreaView>

    </>
  );
          }
};

const styles = StyleSheet.create({

  popularText:{

    fontSize:RFValue(16),
    color:"#3A3A3A"

  },

  
  


  
});

export default App;
