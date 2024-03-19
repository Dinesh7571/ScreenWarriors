import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Jobs = () => {
  //const [jobs, setJobs] = useState([]);
  const color =["bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500","bg-blue-500","bg-red-500","bg-purple-500","bg-yellow-500","bg-green-500","bg-orange-500"] 

const jobs=[
    {
        "job_title": "Front End Entry Level",
        "company": "Safeway",
        "location": "Washington, DC (On-site)",
        "type": "Part-time",
        "post_date": "3 hours ago",
        "benefits": "401(k) benefit",
        "url": "https://www.linkedin.com/jobs/view/3860768044"
      },
      {
        "job_title": "Remote Online chat specialist",
        "company": "Talentify.io",
        "location": "United States (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860779427"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "New Haven, CT (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860781832"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Paterson, NJ (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860783690"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Edison, NJ (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860782809"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Bear, DE (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860779938"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Boston, MA (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860783681"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Stamford, CT (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860782818"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Manchester, NH (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860784306"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Bear, DE (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860779930"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Richmond, VA (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860786019"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Norfolk, VA (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860781834"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Fort Lauderdale, FL (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860779930"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Lewiston, ME (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860780839"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Raleigh, NC (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860779952"
      },
      {
        "job_title": "FT Data Entry Clerk - Work From Home",
        "company": "RemoteWorker US",
        "location": "Lewes, DE (Remote)",
        "type": "Full-time",
        "post_date": "1 hour ago",
        "url": "https://www.linkedin.com/jobs/view/3860784299"
      },

]
  

// //   const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs',
//     params: {
//       keywords: 'golang',
//       locationId: '92000000',
//       datePosted: 'anyTime',
//       sort: 'mostRelevant'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'd969ee7debmsh5532b9729408bcbp149ec2jsnba7306542b4f',
//       'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
    


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const options = {
//           method: 'GET',
//           url: 'https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs',
//           headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key': 'd969ee7debmsh5532b9729408bcbp149ec2jsnba7306542b4f',
//             'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
//           },
         
//             params: {
//                       keywords: 'golang',
//                       locationId: '92000000',
//                       datePosted: 'anyTime',
//                       sort: 'mostRelevant'
//                     },
//                     headers: {
//                               'X-RapidAPI-Key': 'd969ee7debmsh5532b9729408bcbp149ec2jsnba7306542b4f',
//                               'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
//                             }
//           }
    

//         const response = await axios(options);
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div className='bg-gray-800 min-h-screen'>
  {/* {jobs && jobs.map(item => ( */}
  <div class="bg-[#0d1117] text-white  p-12">
  <h1 class="text-6xl font-bold mb-4">Jobs</h1>
  <p class="text-xl mb-12">
    It is a community effort to create roadmaps, guides and other educational content to help guide
    developers in picking up a path and guide their learnings.
  </p>
  </div>

  <div className="grid grid-cols-3 gap-6 p-6">
        {jobs.map((item, index) => (
          <div key={index} className={`border border-gray-700 rounded ${color[index%12]} p-6`}>
            <div className="font-bold text-xl mb-2 text-gray-100">JOB TITLE: {item.job_title}</div>
            <p className="text-gray-300 text-base mb-2">COMPANY: {item.company}</p>
            <p className="text-gray-300 text-base mb-2">Location: {item.location}</p>
            <p className="text-gray-300 text-base mb-2">Type: {item.type}</p>
            <p className="text-gray-300 text-base">Post Date: {item.post_date}</p>
            <a href={item.url} className="text-gray-100 text-base">Apply</a>
          </div>
        ))}
      </div>
  
    </div>
  );
};
