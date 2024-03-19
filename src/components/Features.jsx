import React from 'react'

const Features = () => {
  return (
    <main className="p-4 md:p-8 bg-gray-800 dark:bg-gray-900 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
   
    <a href="/roadmaps">
      <div class="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="https://th.bing.com/th/id/OIP.BcyHQfN34tJ9WWczLqSkXgHaHa?rs=1&pid=ImgDetMain"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Roadmaps</h2>
          <p className="text-gray-300 dark:text-gray-300">
           Best availabel roadmaps of all  latest technology
          </p>
        </div>
      </div>
    </a>
    <a href="jobs">
      <div class="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="https://imgs.search.brave.com/XbvWxEzQQBiZNQFSZK58NxnEKCFQD4oK8E5KCarYmbg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9q/b2ItaGlyaW5nLXZh/Y2FuY3ktdGVhbS1p/bnRlcnZpZXctY2Fy/ZWVyLXJlY3J1aXRp/bmdfNTM4NzYtMTIx/MjY4LmpwZz9zaXpl/PTYyNiZleHQ9anBn"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Explore Jobs</h2>
          <p className="text-gray-300 dark:text-gray-300">
             You can get the notification of all the latest tech jobs.
          </p>
        </div>
      </div>
    </a>
    <a href="videoResource">
      <div className="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="https://wwwcdn.cincopa.com/blogres/wp-content/uploads/2019/02/video-tutorial-image.jpg"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Video Resources</h2>
          <p className="text-gray-300 dark:text-gray-300">
            Best avilable free playlist video for all the  latest techniology .
          </p>
        </div>
      </div>
    </a>
    <a href="#">
      <div className="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="https://imgs.search.brave.com/ZAhMCyjVg7dceRxeFF5aUsVcpQ8DGm4Rhd12RUMXSu4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MDIzNzIzMS9waG90/by9wcmVzcy1oZWFk/bGluZXMtY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9TlZCZ01QN1hJ/eldpMG50dWctemhw/RS1jTEpSOWJZZWwx/YnQwNnlhRG5BMD0"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Articles</h2>
          <p className="text-gray-300 dark:text-gray-300">
            Atricles on latest technology wit daily updates
          </p>
        </div>
      </div>
    </a>
  </div>
</main>
  )
}

export default Features