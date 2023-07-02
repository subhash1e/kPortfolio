import React, {useEffect, useState} from "react"
import SanityClient  from "../client.js";
function Project(){
    const [projectData, setProjectData] = useState(null)

    useEffect(()=>{
      SanityClient.fetch(`*[_type == "project"]{
        title, data, place,
        description, projectType, link,
        tags
      }`).then((data)=>setProjectData(data))
    })


    return(
      <main className="bg-green-100 min-h-screen p-12">
        <section className="contaienr mx-auto">
          <h1 className="text-5xl flex justify-center cursive">Project Page</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my project</h2>
          { 
            projectData && projectData.map((project,index)=> 
            (
          <section className="grid grid-cols-2 gap-8">
            <article className="relative rounded-lg shadow-xl bg-white p-16">
              <h3 className="text-gray-800 text-3xl font-bold mb-2 
                hover:text-red-700">
                <a href={project.link} alt={project.title}
                  target="_blank" rel="noopener nore">
                  {project.title}
                </a>
              </h3>
              <div className="text-gray-500 text-xs space-x-4">
                <span>
                  <strong className="font-bold">Finished on</strong>:{" "}{new Date(project.date).toDateString()}
                </span>
                <span>
                  <strong className="font-bold">Location</strong>:{" "}
                  {project.place}
                </span>
                <span>
                  <strong className="font-bold">Type</strong>{" "}{project.projectType}
                </span>
                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <a href={project.link}
                rel = "noopener noreferrer"
                className="text-red-500 hover:underline
                 hover:text-red-400 text-xl">
                  View The Project
                 </a>
                 <span role="img" aria-aria-label="right pointer">👉</span>
              </div>
            </article>
          </section>
         )
    )}
        </section>
      </main>
    )
};
export default Project;