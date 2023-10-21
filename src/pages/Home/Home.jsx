import React from 'react';
import Header from './shared/Header/Header';
import Banner from './shared/Banner\'/Banner';
import Brands from './shared/Brands/Brands';
import Services from './shared/Services/Services';
import About from './shared/About/About';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [theme,setTheme]=useState("light");
    const [mode,setMode]=useState(false);

    useEffect(()=> {
        if(theme ==="dark"){
               document.documentElement.classList.add("dark"); 
            
        }
        else{
            document.documentElement.classList.remove("dark"); 
                // const text="dark";
        }

    },[theme]);
const handleSwitch=()=>{
    setTheme(theme === "dark"?"light":"dark");
    setMode(current=>!current)
}
    return (
        <div className='dark:bg-black'>
            <Header handleSwitch={handleSwitch} mode={mode}></Header>
            <Banner/>
            <Brands/>
            <Services/>
            <About/>
        </div>
    );
};

export default Home;