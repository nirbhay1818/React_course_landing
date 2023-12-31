import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import {toast} from "react-toastify"

const Card = (props) => {
  let course=props.course
  let LikedCourses=props.LikedCourses;
  let setLikedCourses=props.setLikedCourses;

  function clickHandler(){
    if(LikedCourses.includes(course.id)){
      // Alreday like hua pda hai
      setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
        toast.warning("Like Removed");
      }
      else{
        // Not liked before and inserted these liked courses
        if(LikedCourses.length===0){
          setLikedCourses([course.id])
        }
        else{
          // non-empty phle se
          setLikedCourses((prev)=>[...prev,course.id])
        }
        toast.success("Liked Succesfully")
      }
  }
  
  return (
    <div className='w-[300px] bg-black bg-opacity-80 rounded-md  overflow-hidden '>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt}/>
        <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-10px]
        grid place-items-center'>
          <button onClick={clickHandler}>
            {
              LikedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"/> :  <FcLikePlaceholder fontSize="1.75rem"/> 
            }
          </button>
        </div>
      </div>
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length>100 ?
            (course.description.substr(0,100)) + "....": (course.description)
            }
        </p>
      </div>
    </div>
  )
}

export default Card
