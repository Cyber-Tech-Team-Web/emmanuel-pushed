import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import image from '../assets/contact.jpg'
import js from '../assets/js.png'
import c from '../assets/c.png'
import cc from '../assets/cc.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import flutter from '../assets/flutter.png'
import html from '../assets/html.png'
import ios from '../assets/ios.png'
import java from '../assets/java.png'
import kotlin from '../assets/kotlin.png'
import laravel from '../assets/laravel.png'
import mongo from '../assets/mongo.png'
import native from '../assets/native.png'
import node from '../assets/node.png'
import php from '../assets/php.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import sqlserver from '../assets/sqlserver.png'
import android from '../assets/android.png'
import { useRef } from "react"
import Form from "../components/form"



function Technologies() {

    const array = [
        {
            id: 1,
            img: js,
            link: 'https://www.javascript.com/',
        },
        {
            id: 2,
            img: c,
            link: 'https://www.cprogramming.com/',
        },
        {
            id: 3,
            img: cc,
            link: 'https://www.cprogramming.com/',
        },
        {
            id: 4,
            img: css,
            link: 'https://www.w3.org/Style/CSS/Overview.en.html',
        },
        {
            id: 5,
            img: express,
            link: 'https://expressjs.com/en/5x/api.html',
        },
        {
            id: 6,
            img: flutter,
            link: 'https://docs.flutter.dev/',
        },
        {
            id: 7,
            img: html,
            link: 'https://www.w3schools.com/html/html_intro.asp',
        },
        {
            id: 8,
            img: ios,
            link: 'https://developer.apple.com/documentation/',
        },
        {
            id: 9,
            img: java,
            link: 'https://docs.oracle.com/en/java/',
        },
        {
            id: 10,
            img: kotlin,
            link: 'https://kotlinlang.org/docs/home.html',
        },
        {
            id: 11,
            img: laravel,
            link: 'https://laravel.com/api/10.x/',
        },
        {
            id: 12,
            img: mongo,
            link: 'https://www.mongodb.com/docs/',

        },
        {
            id: 13,
            img: native,
            link: 'https://reactnative.dev/docs/components-and-apis',

        },
        {
            id: 14,
            img: node,
            link: 'https://nodejs.org/docs/latest/api/',

        },
        {
            id: 15,
            img: php,
            link: 'https://www.php.net/docs.php',

        },
        {
            id: 16,
            img: react,
            link: 'https://legacy.reactjs.org/docs/getting-started.html',

        },
        {
            id: 17,
            img: sql,
            link: 'https://dev.mysql.com/doc/',

        },
        {
            id: 18,
            img: sqlserver,
            link: 'https://dev.mysql.com/doc/',

        },
        {
            id: 19,
            img: android,
            link: 'https://developer.android.com/',

        },
    
     ]

     const front = [
        {
            id: 1,
            img: js,
            link: 'https://www.javascript.com/',

        },
        {
            id: 2,
            img: html,
            link: 'https://www.w3schools.com/html/html_intro.asp',

        },
        {
            id: 3,
            img: css,
            link: 'https://www.w3.org/Style/CSS/Overview.en.html',

        },
        {
            id: 4,
            img: react,
            link: 'https://legacy.reactjs.org/docs/getting-started.html',

        },
     ]

     const back = [
        {
            id: 1,
            img: c,
            link: 'https://www.cprogramming.com/',

        },
        {
            id: 2,
            img: cc,
            link: 'https://www.cprogramming.com/',

        },
        {
            id: 3,
            img: node,
            link: 'https://nodejs.org/docs/latest/api/',

        },
        {
            id: 4,
            img: express,
            link: 'https://expressjs.com/en/5x/api.html',

        },
        {
            id: 5,
            img: java,
            link: 'https://docs.oracle.com/en/java/',

        },
        {
            id: 6,
            img: php,
            link: 'https://www.php.net/docs.php',

        },
     ]

     const app = [
        {
            id: 1,
            img: native,
            link: 'https://reactnative.dev/docs/components-and-apis',

        },
        {
            id: 2,
            img: java,
            link: 'https://docs.oracle.com/en/java/',

        },
        {
            id: 3,
            img: kotlin,
            link: 'https://kotlinlang.org/docs/home.html',

        },
        {
            id: 4,
            img: flutter,
            link: 'https://docs.flutter.dev/',

        },
        {
            id: 5,
            img: android,
            link: 'https://developer.android.com/',

        },
        {
            id: 6,
            img: ios,
            link: 'https://developer.apple.com/documentation/',

        },
     ]

     const data = [
        {
            id: 1,
            img: sql,
            link: 'https://dev.mysql.com/doc/',

        },
        {
            id: 2,
            img: sqlserver,
            link: 'https://dev.mysql.com/doc/',

        },
        {
            id: 3,
            img: mongo,
            link: 'https://www.mongodb.com/docs/',

        },
        
     ]


     const allbtn = useRef(null);
     const alltool = useRef(null);
     const frontbtn = useRef(null);
     const fronttool = useRef(null);
     const backbtn = useRef(null);
     const backtool = useRef(null);
     const appbtn = useRef(null);
     const apptool = useRef(null);
     const databtn = useRef(null);
     const datatool = useRef(null);

     const btn1 = () => {
        if(allbtn.current){
            allbtn.current.style.backgroundColor = '#FFF856';
            allbtn.current.style.color = 'black';
            frontbtn.current.style.backgroundColor = 'white';
            frontbtn.current.style.color = '#9F9F9F';
            backbtn.current.style.backgroundColor = 'white';
            backbtn.current.style.color = '#9F9F9F';
            appbtn.current.style.backgroundColor = 'white';
            appbtn.current.style.color = '#9F9F9F';
            databtn.current.style.backgroundColor = 'white';
            databtn.current.style.color = '#9F9F9F';
            fronttool.current.style.display = 'none';
            alltool.current.style.display = 'grid';
            backtool.current.style.display = 'none';
            apptool.current.style.display = 'none';
            datatool.current.style.display = 'none';

        }
     }

     const btn2 = () => {
        if(frontbtn.current){
            frontbtn.current.style.backgroundColor = '#FFF856';
            frontbtn.current.style.color = 'black';
            allbtn.current.style.backgroundColor = 'white';
            allbtn.current.style.color = '#9F9F9F';
            backbtn.current.style.backgroundColor = 'white';
            backbtn.current.style.color = '#9F9F9F';
            appbtn.current.style.backgroundColor = 'white';
            appbtn.current.style.color = '#9F9F9F';
            databtn.current.style.backgroundColor = 'white';
            databtn.current.style.color = '#9F9F9F';
            alltool.current.style.display = 'none';
            fronttool.current.style.display = 'grid';
            backtool.current.style.display = 'none';
            apptool.current.style.display = 'none';
            datatool.current.style.display = 'none';

        }
     }

     const btn3 = () => {
        if(backbtn.current){
            backbtn.current.style.backgroundColor = '#FFF856';
            backbtn.current.style.color = 'black';
            allbtn.current.style.backgroundColor = 'white';
            allbtn.current.style.color = '#9F9F9F';
            frontbtn.current.style.backgroundColor = 'white';
            frontbtn.current.style.color = '#9F9F9F';
            appbtn.current.style.backgroundColor = 'white';
            appbtn.current.style.color = '#9F9F9F';
            databtn.current.style.backgroundColor = 'white';
            databtn.current.style.color = '#9F9F9F';
            alltool.current.style.display = 'none';
            backtool.current.style.display = 'grid';
            fronttool.current.style.display = 'none';
            apptool.current.style.display = 'none';
            datatool.current.style.display = 'none';

        }
     }

     const btn4 = () => {
        if(appbtn.current){
            appbtn.current.style.backgroundColor = '#FFF856';
            appbtn.current.style.color = 'black';
            allbtn.current.style.backgroundColor = 'white';
            allbtn.current.style.color = '#9F9F9F';
            backbtn.current.style.backgroundColor = 'white';
            backbtn.current.style.color = '#9F9F9F';
            frontbtn.current.style.backgroundColor = 'white';
            frontbtn.current.style.color = '#9F9F9F';
            databtn.current.style.backgroundColor = 'white';
            databtn.current.style.color = '#9F9F9F';
            alltool.current.style.display = 'none';
            apptool.current.style.display = 'grid';
            backtool.current.style.display = 'none';
            fronttool.current.style.display = 'none';
            datatool.current.style.display = 'none';

        }
     }

     const btn5 = () => {
        if(databtn.current){
            databtn.current.style.backgroundColor = '#FFF856';
            databtn.current.style.color = 'black';
            allbtn.current.style.backgroundColor = 'white';
            allbtn.current.style.color = '#9F9F9F';
            backbtn.current.style.backgroundColor = 'white';
            backbtn.current.style.color = '#9F9F9F';
            appbtn.current.style.backgroundColor = 'white';
            appbtn.current.style.color = '#9F9F9F';
            frontbtn.current.style.backgroundColor = 'white';
            frontbtn.current.style.color = '#9F9F9F';
            alltool.current.style.display = 'none';
            datatool.current.style.display = 'grid';
            backtool.current.style.display = 'none';
            apptool.current.style.display = 'none';
            fronttool.current.style.display = 'none';

        }
     }

     
    
    
    return (
        < div className="overflow-x-hidden ">
        <Navbar />

        <div id='heropic' className='hidden lg:flex md:flex'>
        <div className='bg-black h-[408px] w-screen bg-opacity-50 '>
          <div className='text-white py-24 flex flex-col items-center justify-center text-center gap-4'>
            <p className='text-[60px] font-semibold'>Technologies</p>
            <p className='w-[450px]'>We specialize in helping you build a team of expert developers.</p>
          </div>
        </div>
      </div>

                          {/*responsive Hero page */}
      <div id='herosmall' className='md:hidden lg:hidden' >
        <div className='bg-black h-full w-screen bg-opacity-50 rounded-bl-[100px]'>
          <div className='text-white py-10 lg:py-24 flex flex-col items-center justify-center text-center lg:gap-4'>
            <p className='text-[30px] md:text-[60px] lg:text-[60px] font-semibold'>Technologies</p>
            <p className='w-[450px] font-thin lg:font-normal md:font-normal p-4'>We specialize in helping you build a team of expert developers.</p>
          </div>
        </div>
      </div>


                    {/* our technologies */}
    <div className="px-4 lg:px-20 flex flex-col gap-6 py-10" >
        <div className="flex flex-col gap-6 mb-14 items-center lg:items-start md:items-start">
            <p className="text-[36px] md:text-[46px] lg:text-[46px] text-[#16205F] font-semibold">Technologies</p>
            <p className=" px-4 text-center md:px-0 md:text-start lg:px-0 lg:text-start md:w-[400px] lg:w-[400px]">Using the right technology for the right problem is our mantra. We are agile about learning
                 new processes and tools to save time and reduce complexity</p>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-5 gap-2">
            <button onClick={btn1} ref={allbtn} className=" px-7 py-2 rounded-xl bg-[#FFF856] font-bold">All</button>
            <button onClick={btn2} ref={frontbtn} className=" px-7 py-2 rounded-xl bg-white font-bold text-[#9F9F9F]">Frontend</button>
            <button onClick={btn3} ref={backbtn} className=" px-7 py-2 rounded-xl bg-white font-bold text-[#9F9F9F]">Backend</button>
            <button onClick={btn4} ref={appbtn} className=" px-7 py-2 rounded-xl bg-white font-bold text-[#9F9F9F]">Mobile App</button>
            <button onClick={btn5} ref={databtn} className=" px-7 py-2 rounded-xl bg-white font-bold text-[#9F9F9F]">Database</button>
        </div>
        <div ref={alltool} className="pt-4 grid grid-cols-2 lg:grid-cols-5 items-center">
            {array.map((array) => (
            <a href={array.link}>
            <div key={array.id} className="w-[90%] p-1 lg:w-[221px] h-[160px] mb-8 flex items-center justify-center shadow-md shadow-gray-400 rounded-xl">
                <img src={array.img} alt="js"  />
            </div>
            </a>
            ))}
        </div>

        <div ref={fronttool} className="pt-4 hidden grid-cols-2 lg:grid-cols-5">
            {front.map((array) => (
            
            <a href={array.link}>
            <div key={array.id} className="w-[90%] p-1 lg:w-[221px] h-[160px] mb-8 flex items-center justify-center shadow-md shadow-gray-400 rounded-xl">
                <img src={array.img} alt="js"  />
            </div>
            </a>
            ))}
        </div>
        <div ref={backtool} className="pt-4 hidden  grid-cols-2 lg:grid-cols-5">
            {back.map((array) => (
            <a href={array.link}>
            <div key={array.id} className="w-[90%] p-1 lg:w-[221px] h-[160px] mb-8 flex items-center justify-center shadow-md shadow-gray-400 rounded-xl">
                <img src={array.img} alt="js"  />
            </div>
            </a>
            ))}
        </div>
        <div ref={apptool} className="pt-4 hidden grid-cols-2 lg:grid-cols-5">
            {app.map((array) => (
            <a href={array.link}>
            <div key={array.id} className="w-[90%] p-1 lg:w-[221px] h-[160px] mb-8 flex items-center justify-center shadow-md shadow-gray-400 rounded-xl">
                <img src={array.img} alt="js"  />
            </div>
            </a>
            ))}
        </div>
        <div ref={datatool} className="pt-4 hidden grid-cols-2 lg:grid-cols-5">
            {data.map((array) => (
            <a href={array.link}>
            <div key={array.id} className="w-[90%] p-1 lg:w-[221px] h-[160px] mb-8 flex items-center justify-center shadow-md shadow-gray-400 rounded-xl">
                <img src={array.img} alt="js"  />
            </div>
            </a>
            ))}
        </div>
    </div>

       <Form/>

        <Footer />
        </div>
    )
}

export default Technologies