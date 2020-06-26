import { Navigation } from "react-native-navigation";

import App from "./App";




Navigation.registerComponent('WelcomeScreen', () => App);

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
      bottomTabs: {
        
        children: [{
          stack: {
            children: [{
              component: {
                id: 'Home',
                name: 'WelcomeScreen',
                passProps: {
                  text: 'This is tab 1'
                }
              }
            }],
            options: {
              
            //   statusBar: {
            //     backgroundColor: 'white',
            //       // drawBehind: true,
            //      visible: true,
            //     // style: 'dark'
            //   },
            
              bottomTabs: { visible: true,animate: false,drawBehind: false}, 
              bottomTab: {
               text: 'Home',
                icon: require('./src/assets/search.png'),
                // icon: require('./src/assets/home.svg'),
                testID: 'FIRST_TAB_BAR_BUTTON',
                selectedIconColor: '#337CC7',
              }
              
            }
          }
        }, 
        {
          stack: {
            children: [{
              component: {
                        id: 'SecondTab',
                           name: 'WelcomeScreen',
                          //  name: 'BottomTabFour',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
    
                  // statusBar: {
                  //   backgroundColor: 'white',
                  //    drawBehind: true,
                  //   visible: false,
                  // },
            
                  bottomTabs: { visible: true,animate: false,drawBehind: false}, 
                  bottomTab: {
                     text: 'Courses',
                    icon: require('./src/assets/car.png'),
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    selectedIconColor: '#337CC7',
                  },
                  
                },
            
            }
          }],
        }
          
          
        },
        {
          stack: {
            children: [{
              component: {
                id: 'ThirdTab',
                          name: 'WelcomeScreen',
                          //  name: 'BottomTabFour',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
    
                  // statusBar: {
                  //     drawBehind: true,
                  //   visible: false,
                  // },
                
                  bottomTabs: { visible: true,animate: false,drawBehind: false}, 
                  bottomTab: {
                    // scale: 5,
                     text: 'Projects',
                    icon: require('./src/assets/steering-wheel.png'),
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    selectedIconColor: '#337CC7',
                  },
                  
                },
            
            }
          }],
        }
        }
      ,

      {
        stack: {
          children: [{
            component: {
                id: 'fourthTab',
                         name: 'WelcomeScreen',
                        // name: 'BottomTabFour',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
  
                // statusBar: {
                //  drawBehind: true,
                //  visible: false,
                // },
                layout: {
                  // direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
                  backgroundColor: 'white',
                  // orientation: ['portrait', 'landscape'] // An array of supported orientations
                },
                bottomTabs: { visible: true,animate: false,drawBehind: false}, 
                bottomTab: {
                  // scale: 5,
                    text: 'Clients',
                  icon: require('./src/assets/Group_1686.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  selectedIconColor: '#337CC7',
                },
                
              },
          
          }
        }],
      }
      },

      
   
     
    
    
    ],

    options: {
      bottomTabs: {
        animate: false,
          titleDisplayMode: 'alwaysHide',
        
      }
    }
      
      }
    }
  });




});