import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useMeAdminQuery } from '@/graphql/generated/schema';

export interface IAuthContextProps {
	isAuthorized: boolean;
	user: {
		avater?: string | null;
		email?: string | null;
		firstname?: string | null;
		id?: string | null;
		lastname?: string | null;
		role?: string | null;
		status: string;
		phoneNumber?: string | null;
	
	} | null | undefined


	loading: boolean;
	authorize(): void;
	unauthorize(): void;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthContextProviderProps {
	children: ReactNode;
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
	// @ts-ignore

	const { data, loading, refetch } = useMeAdminQuery()



	const value = useMemo(
		() => ({
			isAuthorized: data?.meAdmin?.id ? true : false,
			user: data?.meAdmin,
			loading,
			authorize() {
				refetch()
			},
			unauthorize() {

				//? call server logout and all localstorage and cookie clear function


			},

		}),
		[data, loading],
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
