'use client';
import { ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';
import client from '../apollo/client';

export default function ApolloClientProvider({ children }: { children: ReactNode }) {
	return (
		<>
			<ApolloProvider client={client}>{children}</ApolloProvider>
		</>
	);
}
