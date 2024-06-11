import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Login } from "./Login";
import { SplashScreen } from "./SplashScreen";
import { Register } from "./Register";

const { Navigator, Screen } = createStackNavigator();

function StackNavigator({
  state,
}: {
  state: {
    isLoading: boolean;
    isSignout: boolean;
    accessToken: string | null;
  };
}) {
  if (state.isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Navigator>
        {state.accessToken == null ? (
          <>
            <Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                title: "Se connecter",
                animationTypeForReplace: state.isSignout ? "pop" : "push",
              }}
            />
            <Screen
              name="Register"
              component={Register}
              options={{
                title: "Créer un compte",
                animationTypeForReplace: state.isSignout ? "pop" : "push",
              }}
            />
          </>
        ) : (
          <>
            <Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
