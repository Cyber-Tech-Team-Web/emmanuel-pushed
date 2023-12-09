import { FaFigma } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";




function Array() {

  const array = [
    {
      id: 1,
      icon: FaFigma,
      title: "UI / UX Design",
      text: "Building an extended team with Courtney is just like opening your own remote development center, but without the hassle."

    },
    {
      id: 2,
      icon: TbBrandJavascript,
      title: "Frontend Development",
      text: "IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development."

    },
    {
      id: 3,
      icon: FaNodeJs,
      title: "Backend Development",
      text: "Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting."

    },
    {
      id: 4,
      icon: SiAppstore,
      title: "App Development",
      text: "Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom."

    },

  ]  



  const [expandedItems, setExpandedItems] = useState({});

  const toggleText = (index) => {
    setExpandedItems((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '>
      {array.map((item, index) => (
       <Link to={'/services'}> 
       <div className='flex flex-col lg:flex-row md:flex-row gap-4 shadow-gray-500 shadow-md p-2' key={item.id}>
          <item.icon size={60} className='bg-yellow-400 text-black rounded-xl p-2' />
          <div className='text-[#16205F] w-[500px] '>
            <p className='text-[25px] font-semibold pb-2'>{item.title}</p>
            <div className='w-[70%] lg:w-[100%] md:w-[100%]'>
              {expandedItems[index] || item.text.length <= 100 ? (
                <>{item.text}</>
              ) : (
                <>
                  {`${item.text.slice(0, 100)} `}
                  <button onClick={() => toggleText(index)} className=" text-blue-800 font-semibold ">
                    ..See more
                  </button>
                </>
              )}
              {expandedItems[index] && (
                <button onClick={() => toggleText(index)} className="text-blue-600 font-semibold underline">
                  See less
                </button>
              )}
            </div>
          </div>
          
        </div>
        </Link>
      ))}
      
    </div>
  );









  {/*return (

    
<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '>      
       {
          array.map((array) => (
            
            <div className='flex flex-col lg:flex-row md:flex-row gap-4 shadow-gray-500 shadow-md p-2' key={array.id}>
              <array.icon size={60} className='bg-yellow-400 text-black rounded-xl p-2 '/>
              <div className='text-[#16205F] w-[500px] '>
                <p className='text-[25px] font-semibold pb-2'>{array.title}</p>

             
              <div className='w-[70%] lg:w-[100%] md:w-[100%]'>{array.text}
                </div>
                  
               
              </div>
              
            </div>
          ))
        }
    </div>
      )*/}
}

export default Array



