import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })


/*  jest.mock('Linking', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
    canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
    getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  })) 


  jest.mock("react-navigation", ({ createAppContainer: (component) => component})) */

  // Mock your external modules here if needed
// jest
// .mock('react-native-device-info', () => {
//   return { isTablet: jest.fn(() => { return false }) }
// })
/*  jest.mock('react-navigation', () => {
  return {
      createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
      createDrawerNavigator: jest.fn(),
      createMaterialTopTabNavigator: jest.fn(),
      createStackNavigator: jest.fn(),
      StackActions: {
          push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
          replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
      },
      NavigationActions: {
          navigate: jest.fn().mockImplementation(x => x),
      },
      navigationOptions: jest.fn().mockReturnValue(Promise.resolve()),
  }
});  */