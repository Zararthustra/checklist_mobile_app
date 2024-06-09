import "react-native-gesture-handler";
import DrawerNavigator from "./src/screens/Drawer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DrawerNavigator />
    </QueryClientProvider>
  );
}
