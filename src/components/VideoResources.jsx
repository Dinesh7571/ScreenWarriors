import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const VideoResources = () => {
    const [data, setData] = useState(null);
    const color =["bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500","bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500"] 

    useEffect(() => {
       
        const apiUrl = 'http://localhost:3000/video';
         axios.get(apiUrl)
          .then(response => {
            setData(response.data);
            console.log(response.data)
           
          })
          .catch(error => {
            setError(error);
           console.log(error)
          });
      }, []);
    return (
        <div class="bg-[#0d1117] text-white min-h-screen p-12">
            <h1 class="text-6xl font-bold mb-4">Video Resources</h1>
            <p class="text-xl mb-12">
                It is a community effort to find video resources r, guides and other educational content to help guide
                developers in picking up a path and guide their learnings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* //video playlist */}


                {data && data.map((item) => (
                <div key={data._id} className="card shadow-lg rounded-lg overflow-hidden bg-gray-700 ">
              
            
              <iframe width="350" height="200" src={item.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">{item.title}</h2>

                    </div>
                </div>
            ))}



            </div>
        </div>
    )
}

export default VideoResources