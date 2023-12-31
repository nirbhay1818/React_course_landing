import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
  let courses=props.courses;
  let category=props.category
  const [LikedCourses,setLikedCourses]=useState([])

  function getCourses(){
      if(category === "All"){
        let allCourses=[]
        Object.values(courses).forEach(array=>{
          array.forEach(courseData=>{
            allCourses.push(courseData);
      })
    })
    return allCourses;
    }
    else{
      // only specific category data is show
      return courses[category];
    }
    
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course)=>{
          return <Card key={course.id} course={course} LikedCourses={LikedCourses} setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards
