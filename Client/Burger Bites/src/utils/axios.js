import axios from "axios"

export const localRequest = axios.create({
    baseURL: "https://burger-bites-api.dhirenkirpalani.com/",
    // baseURL: "http://localhost:3000/"
})