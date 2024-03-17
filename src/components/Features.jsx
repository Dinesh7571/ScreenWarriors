import React from 'react'

const Features = () => {
  return (
    <main className="p-4 md:p-8 bg-gray-800 dark:bg-gray-900 min-h-screen">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <a href="#">
      <div className="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="/placeholder.svg"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Card Title 1</h2>
          <p className="text-gray-300 dark:text-gray-300">
            This is a description for the first card. It contains information about the card.
          </p>
        </div>
      </div>
    </a>
    <a href="#">
      <div class="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="/placeholder.svg"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Card Title 2</h2>
          <p className="text-gray-300 dark:text-gray-300">
            This is a description for the second card. It contains information about the card.
          </p>
        </div>
      </div>
    </a>
    <a href="#">
      <div class="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="/placeholder.svg"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Card Title 3</h2>
          <p className="text-gray-300 dark:text-gray-300">
            This is a description for the third card. It contains information about the card.
          </p>
        </div>
      </div>
    </a>
    <a href="#">
      <div className="card shadow-lg rounded-lg overflow-hidden bg-gray-700 dark:bg-gray-800">
        <img
          src="/placeholder.svg"
          alt="Card image"
          className="w-full h-48 object-cover"
          width="300"
          height="200"
          style={{aspectRatio: '300/200', objectFit: 'cover'}}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-100 dark:text-gray-100">Card Title 3</h2>
          <p className="text-gray-300 dark:text-gray-300">
            This is a description for the third card. It contains information about the card.
          </p>
        </div>
      </div>
    </a>Name
  </div>
</main>
  )
}

export default Features