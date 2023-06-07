// import { create } from 'zustand'


// type Store = {
//     basket: any;
//     addToBag:(arg:any)=>void
// }

// const useStore = create<Store>((set) => ({
//     basket:[],

//     addToBag: (nextItem: any) => ({basket:[...state, nextItem]})
// }))

// type Basket = {
//     pizza:{
//         name:string,
//         price:number,
//         size:string,
//         ingredients:string[],
//         unit:number
//     }[]
// }

// type Store = {
//     basket: Basket;
//     setBasket: (input: Basket) => void;
//   }

// const useBasketStore = create<Store>((set) => ({
//   basket:{
//     pizza:[
//         {
//             name:"", 
//             price:0,
//             size:"",
//             ingredients:[""],
//             unit:0
//         }
//     ]
// },

// setBasket:(input)=>set({basket: input})

// }))


// import { create } from 'zustand'
// type Basket = {
//         pizza:{
//             name:string,
//             price:number,
//             // size:string,
//             // ingredients:string[],
//             // unit:number
//         }[]
//     }

//     type Store = {
//             basket: Basket;
//             setBasket: (input: Basket) => void;
//           }

//           const useBasketStore = create<Store>((set) => ({
//               basket:{
//                 pizza:[
//                     {
//                         name:"", 
//                         price:0,
//                         // size:"",
//                         // ingredients:[""],
//                         // unit:0
//                     }
//                 ]
//             },
            
//             setBasket:(input)=>set({basket: input})
            
//             }))