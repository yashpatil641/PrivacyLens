// import { Component } from "@/components/c"
// import './App.css'
// import 'ldrs/hourglass'
// import { useState } from "react";
// import axios from "axios";
// // import BB from "./components/bb";

// function App() {



//     const [list, setList] = useState([]);


//     async function getdata() {
   
//         try {
//             setList([])
//             const response = await axios.get('/api/get_privacydata');
//             console.log(response.data);
//             setList(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }

//     }




//     return (
//         < >


//             <div className=" bg-black bg-[length:5em_5em] bg-[linear-gradient(-90deg,transparent_calc(5em_-_1px),rgba(255,255,255,0.1)_calc(5em_-_1px_+_1px),rgba(255,255,255,0.1)_5em),linear-gradient(0deg,transparent_calc(5em_-_1px),rgba(255,255,255,0.1)_calc(5em_-_1px_+_1px),rgba(255,255,255,0.1)_5em)] flex justify-center flex-col gap-10 dark items-center  h-screen w-screen m-0 p-0">
//                 <div className="flex items-center justify-center flex-row gap-10 min-h-80 min-w-56 rounded ">

//                     {list.length == 0 ? (
//                         <div>
//                             <l-hourglass size="60" color="white"></l-hourglass>
//                             <p className="text-white opacity-40 mt-3">Loading...</p>
//                         </div>) : (
//                         <>
                        
//                             {list.map((obj , index) => (
//                                 <div className="h-full" key={index}>
//                                     <Component key={index}
//                                         site={obj.site}
//                                         score_type={obj.score_type}
//                                         score={obj.score}
//                                         summary={obj.summary} />
//                                 </div>
//                             ))}
//                         </>
//                     )}

//                 </div>
//                 <div>

//                     <button onClick={getdata} className="flex overflow-hidden items-center text-lg group-hover:duration-1000 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white shadow hover:bg-black/90 h-12 px-6 py-4 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
//                         <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-transform duration-1000 ease-out group-hover:-translate-x-40 group-hover:duration-1000" />
//                         <div className="flex items-center">
//                             <span className="ml-1  transition-all duration-300 group-hover:text-white">
//                                 Inspect Me
//                             </span>
//                         </div>
//                     </button>


//                     {/* <BB />
//             <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
//               Inspect Me
//             </button>
//             <button onClick={getdata} className="text-black font-semibold bg-[#77d49e] hover:bg-[#8fffbe] transition-all duration-500 px-6 py-2 rounded-xl text-pretty">Inspect me</button> */}


//                 </div>
//             </div >

//         </>
//     )
// }

// export default App



import { useState } from "react";
import axios from "axios";
import { Component } from "@/components/c";
import "./App.css";
import "ldrs/hourglass";

interface PrivacyData {
    site: string;
    score_type: string;
    score: number;
    summary: string;
}

function App() {
    const [list, setList] = useState<PrivacyData[]>([]);

    async function getdata(): Promise<void> {
        try {
            setList([]); 
            const response = await axios.get<PrivacyData[]>("/api/get_privacydata");
            console.log(response.data);
            setList(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <div className="bg-black bg-[length:5em_5em] bg-[linear-gradient(-90deg,transparent_calc(5em_-_1px),rgba(255,255,255,0.1)_calc(5em_-_1px_+_1px),rgba(255,255,255,0.1)_5em),linear-gradient(0deg,transparent_calc(5em_-_1px),rgba(255,255,255,0.1)_calc(5em_-_1px_+_1px),rgba(255,255,255,0.1)_5em)] flex justify-center flex-col gap-10 dark items-center h-screen w-scrren m-0 p-0">
                <div className="flex items-center justify-center flex-row min-h-80 min-w-56 rounded">
                    {list.length === 0 ? (
                        <div className="flex flex-col items-center">
                            <l-hourglass size="60" color="white"></l-hourglass>
                            <p className="text-white opacity-40 mt-3">Loading...</p>
                        </div>
                    ) : (
                        list.map((obj, index) => (
                            <div className="h-full m-0" key={index}>
                                <Component
                                    key={index}
                                    site={obj.site}
                                    score_type={obj.score_type}
                                    score={obj.score}
                                    summary={obj.summary}
                                />
                            </div>
                        ))
                    )}
                </div>
                <div>
                    <button
                        onClick={getdata}
                        className="flex overflow-hidden items-center text-lg font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white shadow hover:bg-black/90 h-12 px-6 py-4 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                    >
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-transform duration-1000 ease-out group-hover:-translate-x-40 group-hover:duration-1000" />
                        <div className="flex items-center">
                            <span className="ml-1 transition-all duration-300 group-hover:text-white">
                                Inspect Me
                            </span>
                        </div>
                    </button>
                </div>
            </div>


        </>
    );
}

export default App;









// {
//   site: "Reddit",
//   score_type: "Privacy Score",
//   score: 85,
//   summary: "Reddit collects a significant amount of user data, primarily for advertising and personalization purposes."
// },
// {
//   site: "Twitter",
//   score_type: "Privacy Score",
//   score: 70,
//   summary: "Twitter collects user data for personalized advertising and trending topics, though its policies have raised privacy concerns."
// },
// {
//   site: "YouTube",
//   score_type: "Privacy Score",
//   score: 75,
//   summary: "YouTube gathers user data for targeted ads and video recommendations, but users have control over privacy settings."
// }