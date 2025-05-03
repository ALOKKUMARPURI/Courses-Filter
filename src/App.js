import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


const App = () => { 
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div> 


    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import Card from './Card';

// const Cards = ({ apiUrl }) => {
//     const [courses, setCourses] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null); // Add error state

//     async function fetchData() {
//         setLoading(true);
//         setError(null); // Reset error state before fetching
//         try {
//             let response = await fetch(apiUrl);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             let output = await response.json();
//             setCourses(output.data);
//         } catch (error) {
//             setError(error.message); // Set error message if fetch fails
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [apiUrl]); // Fetch data when the component mounts or when apiUrl changes

//     if (loading) {
//         return <div className="loading-message">Loading...</div>;
//     }

//     if (error) {
//         return <div className="error-message">{`Error: ${error}`}</div>; // Display error message
//     }

//     if (!courses || Object.keys(courses).length === 0) {
//         return <div className="error-message">Empty Data Found</div>;
//     }

//     return (
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//             {
//                 Object.values(courses).flat().map((course) => (
//                     <Card
//                         key={course.id}
//                         course={course}
//                         likedCourses={likedCourses}
//                         setLikedCourses={setLikedCourses}
//                     />
//                 ))
//             }
//         </div>
//     );
// };

//export default Cards;

