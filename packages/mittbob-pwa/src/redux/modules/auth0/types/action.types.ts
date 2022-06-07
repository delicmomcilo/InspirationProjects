
export type Error = { error: string };

export type User =  { [key: string] : string};

export type SignInSuccessPayload = { isAuthenticated: boolean, user: User}
