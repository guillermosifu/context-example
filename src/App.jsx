import { UserProvider } from "./UserContext";
import "./App.css";
import UserProfile from "./UserProfile";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>esta es el uso de Context</h1>
           <UserProfile />
      </div>
   
    </UserProvider>
  );
}

export default App;
