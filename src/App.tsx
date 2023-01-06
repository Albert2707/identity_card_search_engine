import Req from "./Components/Form/Req";
import UserCard from "./Components/User/UserCard";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App  mt-14 container mx-auto">
        <Req />
      </div>
    </QueryClientProvider>
  );
}

export default App;
