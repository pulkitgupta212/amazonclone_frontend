import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import data from '../books.json';
import "../Css/cardview.css";
//import Carouselss from './carosuel';
import axios from "axios";
//import Column from "antd/lib/table/Column";

function Cardview() {
  const [data1, setData1] = useState([]);
  
  const postt = async () => {
    return await axios.get("https://amazonclonebackend212.herokuapp.com/single_card");
  };
  useEffect(() => {
    postt().then((res) => {
      setData1(res.data.data);
      console.log(res.data.data)
    });
  }, []);

  const [data2, setData2] = useState([]);
  
  const posttt = async () => {
    return await axios.get("https://amazonclonebackend212.herokuapp.com/multi_card");
  };
  useEffect(() => {
    posttt().then((res) => {
      setData2(res.data.data);
      console.log(res.data.data)
    });
  }, []);

  return (
    <>
      <div style={{display:"flex",justifyContent:"space-evenly", flexWrap:"wrap",gap:"20px"}} className="cards">
        {data1.map((val, id) => {
          if (id <= data1.length)
            return (
              <>
                <div  style={{height: "420px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "350px",borderRadius:"5px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",backgroundColor:"white",
  flexDirection:"column"}}>
    
                  <h1  style={{textAlign:"center"}} className="cardhead">{val.title}</h1>
                  <div style={{ height: "180px", width: "230px",objectFit:"contain",margin:"auto" }}>
                    <img style={{height:"130%",width:"100%"}}
                      src={val.img1}
                      alt="Comics Category"
                      className="card-content"
                    />
                  </div>
                  <br />
                  <Link to="/categories" state={"Comics"} className="link">
                    {val.product1}
                  </Link>
                </div>
              </>
            );
        })}

        
          
          <div  style={{display:"flex",justifyContent:"space-evenly", flexWrap:"wrap",gap:"20px",height:"100%",padding:"10px"}}>
          
            {data2.map((val, id) => {
             
              if (id < data2.length)
               { return ( <>
                  <div className="card">
                  <div style={{width:"100%"}}>
                  <h2 style={{textAlign:"center"}} id="cardhead">{val.title}</h2>
                  </div>
                  <div style={{display:"flex" , flexDirection:"Column", height:"100px" , width:"150px"}}>
                  
                    <img style={{height:"100%",width:"100%"}}
                      src={val.img1}
                      alt="category"
                      className="card-category"
                     
                    />
                  
                  <h4 style={{textAlign:"center"}}>{val.product1}</h4>
                  </div>
                  
                  <div style={{display:"flex" , flexDirection:"Column", height:"100px" , width:"150px"}}>
                    <img style={{height:"100%",width:"100%"}}
                      src={val.img2}
                      alt="category"
                      className="card-category"
                     
                    />
                  
                  <h4 style={{textAlign:"center"}}>{val.product2}</h4>
                  </div>
                  
                  <div style={{display:"flex" , flexDirection:"Column",height:"100px" , width:"150px"}}>
                    <img style={{height:"100%",width:"100%"}}
                      src={val.img3}
                      alt="category"
                      className="card-category"
                     
                    />
                  
                  <h4 style={{textAlign:"center"}}>{val.product3}</h4>
                  </div>
                  
                  <div style={{display:"flex" , flexDirection:"Column",height:"100px" , width:"150px"}}>
                    <img style={{height:"100%",width:"100%"}}
                      src={val.img4}
                      alt="category"
                      className="card-category"
                     
                    />
                  
                  <h4 style={{textAlign:"center"}}>{val.product4}</h4>
                  </div>
                  
                  </div>
                  </>
                );}
            })}
            <br />
            <Link to="/" className="link"></Link>
          </div>
        
       
      </div>
    </>
  );
}
export default Cardview;
