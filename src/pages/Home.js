import React from "react";
// import {FaTimesCircle} from "react-icons/fa"
// import {BiLogoDigg} from "react-icons/bi"
import Topheader from "../component/Topheader";
import { Link } from "react-router-dom";
//import contents from "../fakedb";
import axios from "axios";
import { useEffect,useState } from "react";

function Home() {
  const [contents, setData] = useState([])
console.log(contents);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getarticles/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home container">
      <Topheader />
      <div className="bottomheader my-2 ">
        <div className="card">
          <h5 className=" text-center card-header">NAIRALAND NIGERIA FORUM</h5>
          <div className="card-body">
            <p className="">
              <Link to="/Home">Nairaland / General:</Link>&nbsp;
              <Link to="/">Crime,</Link>&nbsp;
              <Link to="/">Romance,</Link>&nbsp;
              <Link to="/">Jobs/Vacancies,</Link>&nbsp;
              <Link to="/">Career,</Link>&nbsp;
              <Link to="/">Business,</Link>&nbsp;
              <Link to="/">Investment,</Link>&nbsp;
              <Link to="/">NYSC,</Link>&nbsp;
              <Link to="/">Education,</Link>&nbsp;
              <Link to="/">Autos,</Link>&nbsp;
              <Link to="/">Car Talk,</Link>&nbsp;
              <Link to="/">Health,</Link>&nbsp;
              <Link to="/">Travel,</Link>&nbsp;
              <Link to="/">Family,</Link>&nbsp;
              <Link to="/">Culture,</Link>&nbsp;
              <Link to="/">Food,</Link>&nbsp;
              <Link to="/">Diaries,</Link>&nbsp;
              <Link to="/">Nairaland Ads,</Link>&nbsp;
              <Link to="/">Pets,</Link>&nbsp;
              <Link to="/">Agriculture,</Link>&nbsp;
            </p>
            <div>
              <Link to="/">Entertainment:</Link>&nbsp;
              <Link to="/">Jokes,</Link>&nbsp;
              <Link to="/">Tv/Moives,</Link>&nbsp;
              <Link to="/">Music/Radio,</Link>&nbsp;
              <Link to="/">Celebrities,</Link>&nbsp;
              <Link to="/">Fashion,</Link>&nbsp;
              <Link to="/">Event,</Link>&nbsp;
              <Link to="/">Sport,</Link>&nbsp;
              <Link to="/">Forum Games,</Link>&nbsp;
              <Link to="/">Literatures.</Link>&nbsp;
            </div>
            <div>
              <Link to="/">Science/Technology:</Link>&nbsp;
              <Link to="/">Programming,</Link>&nbsp;
              <Link to="/">Webmaster,</Link>&nbsp;
              <Link to="/">Computer,</Link>&nbsp;
              <Link to="/">Phones,</Link>&nbsp;
              <Link to="/">Art,</Link>&nbsp;
              <Link to="/">Graphics & Videos,</Link>&nbsp;
              <Link to="/">Technology Market.</Link>&nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="advert d-flex  justify-content-center gap-4">
        <img src="../.././advert1.png" alt="" className="image-fluid" />
        <img src="../.././advert2.jpg" alt="" className="image-fluid" />
        <img src="../.././advert3.png" alt="" className="image-fluid" />
      </div>
      <div className="article">
        <div className="card">
          <div className="card-header d-flex justify-content-center gap-3">
            <Link>Latest News</Link>
            <span>/</span>
            <Link>Twitter</Link>
            <span>/</span>
            <Link>Facebook</Link>
            <span>/</span>
            <Link>How To Advertise</Link>
          </div>

          <div className="card-body">
            {contents.map((a) => (
              <Link to={`/details/${a?.id}`} className="d-block text-center ">
                {a?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
