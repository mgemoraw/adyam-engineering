import { type ReactNode, useState, useEffect, useContext, createContext } from 'react';
import api from '../api/api';

interface User {
    id: string;
    name: string;
    email: string;
    fname?: string;
    mname?: string;
    lname?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    // Add more user fields as needed
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
// const CartContext = createContext<{ cart: any[]; addToCart: (item: any) => void; removeFromCart: (itemId: string) => void } | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your auth logic (e.g., check localStorage or API)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setLoading(true);
        // Replace with your login logic (e.g., API call)
        // Example:
        const response = await api.post(email, password);
        // setUser(response.user);
        // localStorage.setItem('user', JSON.stringify(response.user));
        const fakeUser = { id: '1', name: 'John Doe', email };
        setUser(fakeUser);
        localStorage.setItem('user', JSON.stringify(fakeUser));
        setLoading(false);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};