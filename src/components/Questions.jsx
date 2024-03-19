import React from 'react'
import "../App.css"
const Questions = () => {
    return (


        <div class="mt-10 scrollbar h-[500px]  overflow-scroll relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-xs text-gray-100 uppercase bg-gray-700 ">
                    <tr>
                        <div className='flex justify-space-between'>
                            <th scope="col" class="px-6 py-3">
                                Problem Statement
                            </th>
                        </div>
                        <th scope="col" class="px-6 py-3">
                            Solve
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="  bg-gray-800 dark:border-gray-700 text-white hover:bg-gray-600">
                        <div className='flex justify-space-between'>
                            <td scope="col" class="p-4">
                                <input id="checkbox-all-search" type="checkbox" class=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600"></input>
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit voluptate fuga dolore cumque officia illum quibusdam enim, earum repellat, ab minima? Velit soluta, ipsum dolorem dolore ipsa ducimus quia.
                            </td>
                        </div>
                        <td scope="col" class="px-6 py-3 text-sky-600">
                          <a href="#">Category</a>  
                        </td>
                    </tr>

                    <tr class="  bg-gray-800 dark:border-gray-700 text-white hover:bg-gray-600">
                        <div className='flex justify-space-between'>
                            <td scope="col" class="p-4">
                                <input id="checkbox-all-search" type="checkbox" class=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600"></input>
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit voluptate fuga dolore cumque officia illum quibusdam enim, earum repellat, ab minima? Velit soluta, ipsum dolorem dolore ipsa ducimus quia.
                            </td>
                        </div>
                        <td scope="col" class="px-6 py-3 text-sky-600">
                          <a href="#">Category</a>  
                        </td>
                    </tr>

                    <tr class="  bg-gray-800 dark:border-gray-700 text-white hover:bg-gray-600">
                        <div className='flex justify-space-between'>
                            <td scope="col" class="p-4">
                                <input id="checkbox-all-search" type="checkbox" class=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600"></input>
                            </td>
                            <td scope="col" class="px-6 py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit voluptate fuga dolore cumque officia illum quibusdam enim, earum repellat, ab minima? Velit soluta, ipsum dolorem dolore ipsa ducimus quia.
                            </td>
                        </div>
                        <td scope="col" class="px-6 py-3 text-sky-600">
                          <a href="#">Category</a>  
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default Questions