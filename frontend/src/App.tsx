
import { useState } from "react";
import axios from "axios";
import { Component } from "@/components/c";
import "./App.css";
import "ldrs/hourglass";
import Infosection from "./components/infosection";
import BB from "./components/bb";

type dataprops = {
  url: string
  scores: {
    data: {
      type: string;
      score: number;
      quotes: string[];
    };
  }[];
  metadata: {
    risk_percentage: number;
    risk_level: string;
    GDPR_compliance_score: number;
    additional_notes: string;
  };
}


const App: React.FC = () => {
  const [Siteurlval,setSiteurlval] = useState("")
  const [data, setData] = useState<dataprops | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const changesiteurl = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const siteurl = e.target.value
      setSiteurlval(siteurl)
  }
  async function gettData() {
    setLoading(true);
    try {
      const response = await axios.post<dataprops>("/api/get_privacydata",
        {
          url: Siteurlval,
        }
      );
      setData(response.data);
      console.log("yyyyw",data)
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }
  const [Index, setIndex] = useState<number | null>(null)

  return (
    <>
      <div className="bg-zinc-900 text-white w-screen flex flex-col justify-center items-center gap-8 py-14 min-h-screen">
        <div className="w-2/3" >
          {loading ? (
            (
              <div>
                Loading...
              </div>
            )
          ) : data ?
            (
              <div className=" p-5 px-8 rounded-xl text-white flex flex-col gap-8 h-full transition-all duration-500 box-border items-center ">
                <Component score={data.metadata.risk_percentage} site={data.url} />
                {data.scores.map((score, index) => (
                  <div className="border-white/40 border-2 p-2 rounded-md max-w-80" id={`index`} onClick={() => (index == Index ? setIndex(null) : setIndex(index))}>
                    <Infosection score={score.data.score} type={score.data.type} quotes={score.data.quotes} iscollapsed={index == Index} />
                  </div>
                ))
                }
                <div className="bg-pink-500/500 w-full flex justify-center gap-10 flex-col items-center">
                
                <div onClick={gettData} className="rounded-[300px]">
                    <BB content="Refresh Data" />
                </div>
                <div onClick={()=>{window.location.reload();}} className="rounded-[300px]">
                    <BB content="Inspect New Site" />
                </div>
              </div>
              </div>
            ) : (
              <div className="bg-pink-500/500 w-full flex justify-center gap-10 flex-col items-center">
                <input type="text" className="bg-zinc-700 rounded min-h-11 min-w-80" onChange={changesiteurl} />
                <div onClick={gettData} className="rounded-[300px]">
                  
                <BB content="Inspect Site" />
                  
                    
                  
                </div>
              </div>
            )
          }
        </div>

      </div>
    </>
  );
};

export default App;








// {
// "scores": [
// {
// "type": "account_control",
// "quotes": [
// "You can control your account settings and privacy preferences"
// ],
// "score": 4
// },
// {
// "type": "data_collection",
// "quotes": [
// "We collect information about your device and your use of Reddit",
// "We collect information from third-party websites and apps that use our services"
// ],
// "score": 3
// },
// {
// "type": "data_deletion",
// "quotes": [
// "You can delete your account and data at any time",
// "We may retain certain information after you delete your account"
// ],
// "score": 3
// },
// {
// "type": "data_sharing",
// "quotes": [
// "We may share information with third-party service providers",
// "We may share information with other Reddit users and communities"
// ],
// "score": 3
// },
// {
// "type": "legal_rights",
// "quotes": [
// "You have certain legal rights with respect to your information",
// "We may limit or deny your request if it violates applicable law"
// ],
// "score": 3
// },
// {
// "type": "privacy_controls",
// "quotes": [
// "You can control your privacy preferences and settings",
// "You can adjust your ad preferences and opt out of targeted advertising"
// ],
// "score": 4
// },
// {
// "type": "security_measures",
// "quotes": [
// "We maintain appropriate physical, technical, and administrative safeguards",
// "We use industry-standard encryption to protect your data"
// ],
// "score": 5
// },
// {
// "type": "terms_changes",
// "quotes": [
// "We may modify these terms at any time",
// "We will notify you of any material changes to these terms"
// ],
// "score": 3
// },
// {
// "type": "transparency",
// "quotes": [
// "We are transparent about how we collect, use, and share your information",
// "We provide you with notice of our data practices"
// ],
// "score": 5
// },
// {
// "type": "user_content_rights",
// "quotes": [
// "You retain your rights to any content you post or submit",
// "We may use your content for any purpose"
// ],
// "score": 3
// }
// ],
// "metadata": {
// "risk_percentage": 42,
// "risk_level": "Elevated Concern",
// "GDPR_compliance_score": 3,
// "additional_notes": "The document provides a moderate level of detail regarding data processing activities, but lacks clarity in some areas such as data deletion and user content rights. The document also mentions the use of data for various purposes, including targeted advertising, without explicit consent."
// }
// }












{/* <div>
        <p>{list?.metadata.GDPR_compliance_score}</p>
    </div>
      <div className="bg-black  dark items-center h-[300vh] w-screen m-0 p-0">
        <div className="">
          {list === null ? (
            <div className="">
              <l-hourglass size="60" color="white"></l-hourglass>
              <p className="text-white opacity-40 mt-3">Loading...</p>
            </div>
          ) : (
            <div className=" m-0">
              <h1 className="text-white text-lg font-bold mb-6">Privacy Data</h1>
              <h2 className="text-white text-md font-semibold">Scores</h2>
              <ul>
                {Object.entries(list.scores).map(([key, value]) => (
                  <li key={key} className="text-white my-4">
                    <h3>{key.replace(/_/g, ' ')}</h3>
                    <p>Score: {value.score}</p>
                    <ul>
                      {value.quotes.map((quote, index) => (
                        <li key={index}>{quote}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <h2 className="text-white text-md font-semibold">Metadata</h2>
              <p>Risk Percentage: {list.metadata.risk_percentage}%</p>
              <p>Risk Level: {list.metadata.risk_level}</p>
              <p>GDPR Compliance Score: {list.metadata.GDPR_compliance_score}</p>
              <p>Additional Notes: {list.metadata.additional_notes}</p>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={getData}
            className="flex overflow-hidden items-center text-lg font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white shadow hover:bg-black/90 h-12 px-6 py-4 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-transform duration-1000 ease-out group-hover:-translate-x-40 group-hover:duration-1000" />
            <div className="flex items-center">
              <span className="ml-1 transition-all duration-300 group-hover:text-white">
                Refresh Data
              </span>
            </div>
          </button>
        </div>
      </div> */}