import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001" ,
  headers: {
    "Content-Type": "application/json",
  },
})
export default api