
jest.mock('react-navigation', () => {
    return {
        createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
        createStackNavigator: jest.fn(),
        navigationOptions: {}
    }

})