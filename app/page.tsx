import { redirect } from "next/navigation";
import { Test } from "../components/Test"
import { UserDemo } from "@/components/UserDemo";
import DataFatch from "@/components/DataFatch";
import Button from "@/components/Button";
import Post from "@/components/Post";
import ButtonStyle from "@/components/ButtonStyle";
import TestHook from "@/components/TestHook";
import TestUser from "@/components/TestUser";
import NewUser from "@/components/NewUser";
import UserNew from "@/components/UserNew";
import Counter from "@/components/Counter";
import { UserManager } from "@/components/User";


// const user1 = {
//   name:"Mojidul Islam",
//   age:32,
//   isRegistered:true,
//   lang:["Bangla","English"]
// }

// const users = [
//     {
//         id:1,
//         name:"Mojidul Islam",
//         email:"mojidul31@gmail.com",
//         age:32
//     },
//     {
//         id:2,
//         name:"Nayeem Islam",
//         email:"nayeem1@gmail.com",
//         age:13
//     }
// ]



export default function Home() {
  return (
    <div className="App">
      <h3>React with typescript</h3>
      {/* <Test name="Mojidul Islam" age={32} isRegistered={true} lang={["Bangla","English"]}/>       */}
      {/* <Test user={user1} /> */}
      {/* <UserDemo users={users}/> */}
      {/* <DataFatch status="error" /> */}
      {/* <h1>Childrens</h1> */}
      {/* <Button>Click Me</Button> */}
      {/* <Post/> */}
      {/* <ButtonStyle btnStyle={{color:'red', backgroundColor:'green'}}/> */}
       {/* <h1>User Hooks</h1> */}
       {/* <TestHook /> */}
       {/* <TestUser /> */}
       {/* <NewUser /> */}
       {/* <UserNew /> */}
       {/* <Counter /> */}
       <UserManager/>
    </div>
  );
} 

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h2>
//         Count: {count}
//       </h2>
//     </div>
//   );
// };

// export default App;