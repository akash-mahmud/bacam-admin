import { ApolloLink } from "@apollo/client";

import { server1Link } from "./server1Link";





export const splitLink = server1Link()
