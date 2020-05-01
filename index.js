import { Navigation } from "react-native-navigation";

import App from "./App";

import SocialLogins from './src/screens/SocialLogins';
import CreateAccount from './src/screens/CreateAccount';
import UserCertificates from './src/screens/UserCertificates';
import UserSignUpDetails from './src/screens/UserSignUpDetails';
import PhoneAuthentication from './src/screens/PhoneAuthentication';
import Profile from './src/screens/Profile';



Navigation.registerComponent('WelcomeScreen', () => App);
Navigation.registerComponent('SocialLogins', () => SocialLogins);
Navigation.registerComponent('CreateAccount', () => CreateAccount);
Navigation.registerComponent('UserCertificates', () => UserCertificates);
Navigation.registerComponent('UserSignUpDetails', () => UserSignUpDetails);
Navigation.registerComponent('PhoneAuthentication', () => PhoneAuthentication);
Navigation.registerComponent('Profile', () => Profile);
Navigation.events().registerAppLaunchedListener(() => {


    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: false,
            animate: false,
          },

        statusBar: {

             
             visible: false,
            //  backgroundColor:"#FFFF",
              // style: 'light',
            //  hideWithTopBar: true,


            //  drawBehind: true,
            //  visible: false,
            //  hideWithTopBar: true,
         
     },
     
         
      
        })











   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
                // name:"UserSignUpDetails",
                //  name:"SocialLogins",
                // name: 'PhoneAuthentication',
                    name: 'WelcomeScreen',
               options: {
                 statusBar: {
                   
                   visible: false,
                   
                 }
              }
             }
           }  
         ]
        
       }
     }
    
  });
});