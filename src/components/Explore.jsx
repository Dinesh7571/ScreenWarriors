import React from 'react'

const Explore = () => {
    return (
        <div class="bg-[#0d1117] text-white min-h-screen p-12">
            <h1 class="text-6xl font-bold mb-4">Explore</h1>
            <p class="text-xl mb-12">
                It is a community effort to create roadmaps, guides and other educational content to help guide
                developers in picking up a path and guide their learnings.
            </p>

         <div className='flex justify-center'>
            <div class="grid grid-cols-2 gap-4 md:w-[50%] sm:w-[100%] h-50">
                <a href='/videoResource' class="  whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white rounded-lg px-4 flex flex-col items-center justify-center">
                Video Resource
                </a>
                <a href='/roadmaps' class="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-red-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                    Roadmaps
                </a>
                <a href='/jobs' class="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-purple-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                    Jobs
                </a><a href='dsa' class="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-yellow-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                    Dsa Problems
                </a>
                <a  href='#' class=" whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-green-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                    Aptitude & Reasoning
                </a>
                <a href='#' class="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-orange-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
                    Engineering Notes
                </a>
            </div>
         </div>
        </div>
        
    )
}

export default Explore