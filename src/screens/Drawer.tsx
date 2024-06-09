import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./Home";
import { Login } from "./Login";

const { Navigator, Screen } = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
