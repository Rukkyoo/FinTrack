import axiosInstance from "../axios/axiosInstance";


// Signup
export const signupUser = async (userData: {
    username: string;
    email: string;
    password: string;
    currencycode: string;
}) => {
    try {
        const response = await axiosInstance.post("", { endpoint: "/auth/register", data: userData })
        return response.data;
    } catch (error) {
        console.error("Signup error: ", error)
    }
}

// Login
export const loginUser = async (userData: {
    username: string;
    password: string;
}) => {
    try {
        const response = await axiosInstance.post("", { endpoint: "/auth/login", data: userData })
        return response.data;
    } catch (error) {
        console.error("Login error: ", error)
    }
}