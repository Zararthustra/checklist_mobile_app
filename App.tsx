import "react-native-gesture-handler";
import { useEffect, useMemo, useReducer } from "react";
import { Text, View } from "react-native";
import { jwtDecode } from "jwt-decode";
import { useColorScheme } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StackNavigator from "./src/screens/StackNavigator";
import { deleteAS, getAS, setAS } from "@utils/asyncStorage";
import { AuthContext } from "@utils/authContext";
import { ILoginRequest } from "@interfaces/index";
import { login, register } from "@queries/index";
import { ToastProvider } from "react-native-toast-notifications";
import { IconError, IconLoader, IconSuccess, IconWarning } from "@assets/index";

const queryClient = new QueryClient();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  // Set darkmode from AS on mounting
  useEffect(() => {
    const setDarkmode = async () => {
      const isDarkmodeAS = await getAS("colorScheme");
      if (!!isDarkmodeAS && isDarkmodeAS !== colorScheme) toggleColorScheme();
    };
    setDarkmode();
  }, [colorScheme, toggleColorScheme]);

  const [state, dispatch] = useReducer(
    (
      prevState: any,
      action: {
        type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
        token?: string | null;
      }
    ) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            accessToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            accessToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            accessToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      accessToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let accessToken = null;

      try {
        accessToken = await getAS("accessToken");
      } catch (e) {
        console.log("Error while retrieving user token: ", e);
      }

      // Validate token
      if (!!accessToken)
        try {
          const decodedToken = jwtDecode<any>(accessToken);
          const currentTime = Math.floor(Date.now() / 1000);

          if (decodedToken.exp < currentTime) dispatch({ type: "SIGN_OUT" });
          else dispatch({ type: "RESTORE_TOKEN", token: accessToken });
        } catch (e) {
          console.log("Invalid token:", e);
          dispatch({ type: "SIGN_OUT" });
        }
      else dispatch({ type: "SIGN_OUT" });

      dispatch({ type: "RESTORE_TOKEN", token: accessToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: ILoginRequest) => {
        try {
          const res = await login(data);
          await setAS("accessToken", res.access);
          await setAS("refreshToken", res.refresh);
          dispatch({ type: "SIGN_IN", token: res.access });
          return data;
        } catch (error: any) {
          console.error("Error while logging user: ", error);
          return error.code;
        }
      },
      signOut: async () => {
        try {
          await deleteAS("accessToken");
          await deleteAS("refreshToken");
        } catch (error) {
          console.error("Error while deleting user token: ", error);
        } finally {
          dispatch({ type: "SIGN_OUT" });
        }
      },
      signUp: async (data: ILoginRequest) => {
        try {
          await register(data);
          dispatch({ type: "SIGN_OUT" });
          return data;
        } catch (error: any) {
          console.error("Error while register user: ", error);
          return error.code;
        }
      },
    }),
    []
  );

  return (
    <ToastProvider
      placement="top"
      offset={50}
      successIcon={<IconSuccess color="white" size={20} />}
      successColor="#61a146"
      dangerIcon={<IconError color="white" size={20} />}
      dangerColor="#ef4444"
      warningIcon={<IconWarning color="white" size={20} />}
      warningColor="#FFC53D"
      normalColor="#0090FF"
      renderType={{
        loading: (toast) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              borderRadius: 5,
              padding: 10,
              backgroundColor: "#3E63DD",
            }}
          >
            <IconLoader width={20} height={20} style={{ color: "white" }} />
            <Text style={{ color: "white", fontWeight: 600 }}>
              {toast.message}
            </Text>
          </View>
        ),
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={authContext}>
          <StackNavigator state={state} />
        </AuthContext.Provider>
      </QueryClientProvider>
    </ToastProvider>
  );
}
