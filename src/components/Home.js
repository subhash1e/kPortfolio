import React from "react"
import bgimage from "../Lone Warrior.jpeg"
function Home(){return(
    <main>
    <img src={bgimage} alt="LoneWarrior" 
    className="absolute object-cover w-full h-full"/>
    <section className="relative flex justify-center min-h-screen pt-5 lg:pt-64 px-8">
        <h1 className="text-6xl
         cursive text-red-100 font-bold leading-none
         lg:leading-snug
        ">
        Aloha, I'm Subhash</h1>
    </section>
   
    </main>
)};
export default Home;