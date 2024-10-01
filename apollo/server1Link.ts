import { ApolloLink, HttpLink } from "@apollo/client";


import { SERVER_1 } from "../config/secrets";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
export const server1Link =  ()=> { 
  let token =''
  try {
    token = typeof(window) !=='undefined'? `Bearer ${localStorage.getItem('yellow-cartee') as string}`:''
  } catch (error) {
    console.log(error);
    
     token =''
  }
  return ApolloLink.from([
//   new HttpLink({
//           uri: SERVER_1,
//       headers: {      
//            authorization: token,
//            'Apollo-Require-Preflight': 'true',
// // 'Access-Control-Allow-Credentials':'true'
//     },
//   })
    createUploadLink({
      uri: SERVER_1,
      headers: {      
           authorization: token,
           'Apollo-Require-Preflight': 'true',
// 'Access-Control-Allow-Credentials':'true'
    },
      credentials: 'include',
      fetch,

    }),
  ])}