import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList194378Navigator from '../features/ArticleList194378/navigator';
import SignUp21194377Navigator from '../features/SignUp21194377/navigator';
import Settings3194375Navigator from '../features/Settings3194375/navigator';
import CalendarView4194374Navigator from '../features/CalendarView4194374/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList194378: { screen: ArticleList194378Navigator },
SignUp21194377: { screen: SignUp21194377Navigator },
Settings3194375: { screen: Settings3194375Navigator },
CalendarView4194374: { screen: CalendarView4194374Navigator },

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
