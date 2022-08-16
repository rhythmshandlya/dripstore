import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const axiosPrivate = axios.create({
  baseURL: "http://dripstore.com/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json, text/plain, /",
  },
  withCredentials: false,
});

export default function Home() {
  const [status, setStatus] = useState("")
  useEffect( () => {
    const fetchApi = async ()=>{
        const res = await axiosPrivate.get('/products');
        console.log(res);
        setStatus(res.data.status);
    }
    fetchApi();
  },[])
        console.log(res);
  
  return (
    <div className={styles.container}>
      {status}
    </div>
  )
}
