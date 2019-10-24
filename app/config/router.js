import React from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import AlertsScreen from '../components/alerts/AlertsScreen';
import DirectoryScreen from '../components/directory/DirectoryScreen';
import CategoryScreen from '../components/directory/CategoryScreen';
import FoodListingsScreen from '../components/food_listings/FoodListingsScreen';
import ListingDescription from '../components/food_listings/ListingDescription';
import NewListingScreen from '../components/food_listings/NewListingScreen';
import ForumScreen from '../components/forum/ForumScreen';
import LoginScreen from '../components/login/LoginScreen';
import TermsAndConditionsScreen from '../components/login/TermsAndConditionsScreen';
import ChatScreen from '../components/others/ChatScreen';
import ProfileScreen from '../components/others/ProfileScreen';
import PlaceholderScreen from '../components/PlaceholderScreen';

//drawer navigation

//console.disableYellowBox = true;

//***************STACK NAVIGATOR*********************
export const LoginScreenStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Save Info',
    }
  },
  TermsAndConditionsScreen: {
    screen: TermsAndConditionsScreen,
    navigationOptions: {
      title: 'Terms and conditions',
    }
  },
},{
  headerMode: 'none',
  navigationOptions: {
    title: 'Login',
    headerVisible: true,
  }
 }
);

export const FoodListingsScreenStack = createStackNavigator({
  FoodListingsScreen: {
    screen: FoodListingsScreen,
    navigationOptions: {
      title: 'Products',
    },
  },
  ListingDescription: {
    screen: ListingDescription,
  },
  ChatScreen: {
    screen: ChatScreen,
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#8200d8',
    headerStyle: {
      backgroundColor: '#b2a100',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});


export const DirectoryScreenStack = createStackNavigator({
  DirectoryScreen: {
    screen: DirectoryScreen,
    navigationOptions: {
      title: 'Categories ',
    }
  },
  CategoryScreen: {
    screen: CategoryScreen,
  },
  ListingDescription: {
    screen: ListingDescription,
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      title: 'Chat',
    }
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#8200d8',
    headerStyle: {
      backgroundColor: '#b2a100',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});


export const ForumScreenStack = createStackNavigator({
  ForumScreen: {
    screen: ForumScreen,
    navigationOptions: {
      title: 'Purchase History',
    },
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
  ListingDescription: {
    screen: ListingDescription,
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#8200d8',
    headerStyle: {
      backgroundColor: '#b2a100',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});

export const AlertsScreenSctack = createStackNavigator({
  AlertsScreen: {
    screen: AlertsScreen,
    navigationOptions: {
      title: 'Vendors',
    }
  },
  PlaceholderScreen: {
    screen: PlaceholderScreen,
    navigationOptions: {
        title: 'Place holder screen',
      },
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#8200d8',
    headerStyle: {
      backgroundColor: '#b2a100',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});

export const ProfileScreenSctack = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
    }
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#8200d8',
    headerStyle: {
      backgroundColor: '#b2a100',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});


//***************DRAWER NAVIGATOR*********************
const DrawerScreen = createDrawerNavigator({
  AlertsScreen: {
    screen: AlertsScreenSctack
  },
  ProfileScreen: {
    screen: ProfileScreenSctack
  }
});


//***************TAB NAVIGATOR (ROOT)*********************
const AppNavigator = createBottomTabNavigator({
  Category: { screen: DirectoryScreenStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="tasks" color={tintColor} size={24}
        />
      )
    })
  },
  Products: { screen: FoodListingsScreenStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="magic" color={tintColor} size={24}
        />
      )
    })
  },
  History: { screen: ForumScreenStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="history" color={tintColor} size={24}
        />
      )
    })
  },
  Vendors: { screen: AlertsScreenSctack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="list-alt" color={tintColor} size={24}
        />
      )
    })
  },
}, {
  initialRouteName: 'Products',
  swipeEnabled: true,
  tabBarOptions: {
      activeTintColor: '#8200d8', // active icon color 8200d8
      inactiveTintColor: '#ffffff',
      style: {
          backgroundColor: '#b2a100' // TabBar background //#848484
      },
      labelStyle:{
        fontSize: 17,
        fontWeight: 'bold'
      },
    }
});

export default createAppContainer(AppNavigator);
