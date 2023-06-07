


import Link from "next/link";
import { useState } from "react";
import { userNames } from "./existingCustomers-data";


export default function ExistingCustomer() {
  const [users, setUsers] = useState(userNames);
  // const [winners, setWinner] = useState([]);


 let randomName: string | undefined;
 function getRandomName() {
   return (randomName = users[Math.floor(Math.random() * userNames.length)]);
      }
      const handleGetRandomName = () => {
      
        setTimeout(() => {
          getRandomName();
            const updateNameList = users.filter((user) => user !== randomName);
            setUsers(updateNameList);
            },2000
          )}



  return (
     <div className="mx-auto flex  min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
      <div className="mx-auto py-8 w-[600px] justify-self-center bg-[#303133] px-8 align-middle border-2 border-orange-500">
         <h1
           className="pl-2 text-left text-2xl font-normal 
         text-white "
         >
           Existing customer : 
         </h1> 
          <p className=" text-orange-500 text-2xl pl-2 py-5 ">
            {getRandomName()}
            </p> 
         <div className="mx-[5%]  md:mx-3  lg:mx-6">
  
          {/* <ul className="text-orange-500">
            {winners.map((winner,index) => (
              <li className="text-green-600" key={index}>
                {winner}
              </li>
            ))}
          </ul> */}
         </div>
       </div>
       <div className="flex justify-center mt-16">
         <Link
           className=" m-10 space-y-4 rounded-lg bg-white text-xl font-bold py-6 px-10"
           href="/delivery"
           onClick={handleGetRandomName} 
         
         >
           Start Order
         </Link>
       </div>
     </div>
   );
 }









 

 

//   return (
//     <div className="App">
//       <header className="App-header">
//         <ul id="userList">
//           {users.map((user, index) => (
//             <li className="list-item" key={index}>
//               {user}
//             </li>
//           ))}
//         </ul>
//         <div className="react-container">
//           {uiProps.displayProgressBarr && <ProgressBar />}
//           {error.loading ? (
//             <Spinner />
//           ) : (
//             <img src={logo} className="App-logo" alt="logo" />
//           )}

//           <h1>30</h1>

//           <button
//             onClick={handleGetRandomName}
//             disabled={uiProps.buttonDisabled}
//           >
//             Get random name
//           </button>
//         </div>
//         <ul className="winners">
//           {winners.map((winner, index) => (
//             <li key={index} className="list-item">
//               {winner}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }