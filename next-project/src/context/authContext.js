import { createContext } from "react";

// Create AuthContext with default values
const AuthContext = createContext({
    authStatus: () => {},
    setAuthStatus: () => {},
});

// Export the AuthProvider and AuthContext
export const AuthProvider = AuthContext.Provider;

export default AuthContext;
