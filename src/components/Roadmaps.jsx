import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Roadmaps = () => {
 const [data, setData] = useState(null);
    useEffect(() => {
       
        const apiUrl = 'http://localhost:3000/roadmaps';
         axios.get(apiUrl)
          .then(response => {
            setData(response.data);
           
          })
          .catch(error => {
            setError(error);
           console.log(error)
          });
      }, []);


 const color =["bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500","bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500"] 



  return (
    <div class="bg-[#0d1117] text-white min-h-screen p-12">
  <h1 class="text-6xl font-bold mb-4"> Roadmaps</h1>
  <p class="text-xl mb-12">
    It is a community effort to create roadmaps, guides and other educational content to help guide
    developers in picking up a path and guide their learnings.
  </p>
  <div class="grid  md:grid-cols-3 sm:grid-cols-1 gap-6">
  {data && data.map((item,index) => (
           <Link key={index} to={item.link} class={` hover:opacity-[70%] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-10 px-4 py-2 ${color[index%10]} text-white border border-[#30363d]`}>
            
              {item.title}
            
            </Link>
          ))}
   
  </div>
</div>
  )
}

export default Roadmaps