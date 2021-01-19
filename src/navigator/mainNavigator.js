import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList194380Navigator from '../features/ArticleList194380/navigator';
import ArticleList194379Navigator from '../features/ArticleList194379/navigator';
import ArticleList194378Navigator from '../features/ArticleList194378/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList194380: { screen: ArticleList194380Navigator },
ArticleList194379: { screen: ArticleList194379Navigator },
ArticleList194378: { screen: ArticleList194378Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
