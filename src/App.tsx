import Req from "./Components/Form/Req";
import UserCard from "./Components/User/UserCard";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Components/Footer/Footer";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col relative">
        <div className=" mt-14 container mx-auto flex-1">
          <Req />
        </div>
        <Footer />

      </div>
    </QueryClientProvider>
  );
}

export default App;
