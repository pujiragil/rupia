import { useState } from "react";
import HeroComponents from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import {obj1, obj2, obj3} from "../components/Section/data"
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Index() {
  const [ open, setOpen ] = useState(false)

  const isToggle = () => {
    setOpen(!open)
  }

  return(
    <>
      <Sidebar open={open} isToggle={isToggle}/>
      <Navbar open={open} isToggle={isToggle}/>
      <HeroComponents id="discover"/>
      <Section {...obj1}/>
      <Section {...obj2}/>
      <Services id="services"/>
      <Section {...obj3}/>
      <Footer/>
    </>
  )
}