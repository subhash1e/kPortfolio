import React from "react"
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";

function Navbar(){
    return(
        <header className="bg-red-700">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to = '/' exact 
                    activeClassName='text-white'
                    className='
                    text-5xl font-bold cursive tracking-widest
                    inflex-flex items-center py-6 px-3 mr-4 
                    text-red-100 
                    hover:text-green-800 '>
                        Subhash
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName='text-red-100 bg-red-700'
                    className='
                    text-3xl cursive 
                    inflex-flex items-center py-3 px-3 my-5 
                    text-red-200 
                    hover:text-green-800'
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'
                    className='
                    text-3xl cursive 
                    inflex-flex items-center py-3 px-3 my-5 
                    text-red-200 
                    hover:text-green-800'
                    activeClassName='text-green-100 bg-red-800'>
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                    className='
                    text-3xl cursive 
                    inflex-flex items-center py-3 px-3 my-5 
                    text-red-200 
                    hover:text-green-800'
                    activeClassName="text-red-500 bg-red-800"
                   >
                        About Me!
                    </NavLink>
                   
                </nav>
                <div className="inline-flex py-3 px-3 my-6" >
                <SocialIcon url="https://twitter.com/elon_musk" className="mr-4" target="_blank" 
                fgColor='#fff'
                style={{height:35, width:35}}/>
                <SocialIcon url="https://youtube.com/elon_musk" className="mr-4" target="_blank"  
                fgColor='#fff' 
                style={{height:35, width:35}}/>
                <SocialIcon url="https://linkedin.com/in/elon_musk" className="mr-4" target="_blank"  
                fgColor='#fff'
                style={{height:35, width:35}}/>
                <SocialIcon url="https://codeforces.com/profile/maroonbeam20" className="mr-4" target="_blank"  
                fgColor='#fff'
                style={{height:35, width:35}}/>

            </div>
               
            </div>
        </header> 
)};
export default Navbar;