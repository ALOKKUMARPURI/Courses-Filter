// import React from 'react'
// import Card from './Card';
// import { useState } from 'react';

// const Cards = (props) => {
//     let courses = props.courses;
//     let category = props.category;
//     const [likedCourses, setLikedCourses] = useState([]);
    
//     function getCourses()  {
//         if(category === "All") { 
//             let allCourses = [];
//             Object.values(courses).forEach(array => {
//                 array.forEach(courseData => {
//                     allCourses.push(courseData); 
//                 })
//             })
//             return allCourses;
//         }
//         else {
//             //main sirf specific cate0gry ka data array krunga  
//             return courses[category];      
//         }

//     }

//   return (
//     <div className="flex flex-wrap justify-center gap-4 mb-4">
//       {
//         getCourses().map( (course) => (
//             <Card key={course.id} 
//             course = {course}  
//             likedCourses={likedCourses}
//             setLikedCourses={setLikedCourses}/>
//         )) 
//       }
//     </div>
//   )
// }

// export default Cards


// No data Found


import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return courses[category];
        }
    }

    // Check if courses data is empty
    if (!courses || Object.keys(courses).length === 0) {
        return <div className="error-message">Empty Data Found</div>;
    }

    const courseList = getCourses();

    // Check if courseList is empty
    if (!courseList || courseList.length === 0) {
        return <div className="error-message">Empty Data Found</div>;



    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                courseList.map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            }
        </div>
    );
}

export default Cards;



