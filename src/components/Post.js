import { useEffect, useState } from "react";
import React from "react"
import { Link } from 'react-router-dom';
import SanityClient  from "../client";
function Post(){
    const [postData, setPost] = useState(null);

    useEffect(()=>{
        SanityClient
            .fetch(`*[_type == "post"]{
                title,slug, mainImage{
                        asset->{_id,url},alt
                    }
            }`).then((data) => setPost(data))
            .catch(console.error)
        }, [])
        console.log(postData)
    
    
    return(
    <main className="bg-blue-300 min-h-screen p-20">
      <section className="container mx-auto">
        <h1 className="cursive text-5xl flex justify-center">Blogpost Page</h1>
        <h2 className="text-lg text-gray-600 flex
        justify-center mb-12">Welcome to my blogpost page</h2>
        {postData && postData.map((post,index)=>(
            <div className="grid m-8
             md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article>
                    <Link to={"/post/"+post.slug.current} key={post.slug.current}>
                    <span className="block h-64  relative rounded shadow 
                    leading-snug 
                    border-b-8 border-t-8 border-l-2 border-r-2 border-green-400">
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                            className="w-full h-full rounded absolute"/>

                        <span className="mb-4 relative h-full w-full justify-center items-end flex">
                            <h3 className=" text-gray-700 text-lg  font-blog
                            px-2 m-2 bg-red-300">{post.title}</h3>                                        
                        </span>
                    </span>
                    </Link>
                </article>
            </div>
        ))}
        
      </section>
    </main>
)};
export default Post;