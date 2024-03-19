import React from 'react'
import Questions from './Questions'

const DsaProblems = () => {

    const topic = ["String", "Array", "linked-List", "Dynamic", "Stack", "Queue", "linked-List", "Dynamic", "Stack", "Queue"]

    return (
        <div class="bg-[#0d1117] text-white min-h-screen p-12">
            <h1 class="text-6xl font-bold mb-4"> DSA Problems</h1>
            <p class="text-xl mb-12">
                It is a community effort to create roadmaps, guides and other educational content to help guide
                developers in picking up a path and guide their learnings.
            </p>
            <div className='w-70'>
                {topic.map((item) => (
                    <button type="button" class="  m-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center me-2 mb-2">{item}</button>
                ))}
            </div>
            <Questions />
        </div>

    )
}

export default DsaProblems