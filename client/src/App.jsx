import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const BBreite = formData.get("BBreite");
    const BHoehe = formData.get("BHoehe");
    const data = Object.fromEntries(FormData);
    console.log(data);

    console.log({ BBreite });
    };

  return (
    <>

    </>
  )
}

export default App
