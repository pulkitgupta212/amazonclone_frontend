import React, { useState } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { CaretRightOutlined } from '@ant-design/icons';
import AmazonLogo from '../../images/amazon.in_.jpg';
const { Panel } = Collapse;


export default function Signup() {
  const navi=useNavigate();

  const [validation, setValidation] = useState({
    name: { value: "", isValid: "" },
    email: { value: "", isValid: "" },
    phone: { value: "", isValid: "" },
    password: { value: "", isValid: "" }


  })
  const handleClick=async ()=>{
    await axios.post('https://amazonclonebackend212.herokuapp.com/signup',
      {username:validation.name.value,email:validation.email.value,phone:validation.phone.value,password:validation.password.value})
      .then((res)=>{console.log(res);navi("/login")}).catch(err=>console.log("hhhhhh",err))


  }
  const handleChange = (e) => {
    let value = e.target.value;
    let key = e.target.name;
    setValidation({ ...validation, [key]: { value } })

    let isValid = true;
    switch (key) {
      case "name":
        if (value.length) {
          isValid = false
        }

        break;
      case "email":
        var intRegex = /[0-9 -()+]+$/;
        if (((value.length == 10) &&
          (/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(value))) ||
          ((value.length) && (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value)))
        ) {
          isValid = false
        }
        case "phone":
          if (((value.length == 10) &&
            (/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(value))) )
          {
            isValid = false
          }
        break;
        case "password":
          if(value.length){isValid=false}
      
      default:
        break;
    }
    setValidation({ ...validation, [key]: { value, isValid } })

  }

  console.log(validation);
  return (
    <>
      <div style={{ height: "auto", paddingBottom: "15px" }}>
        <div style={{ width: "125px", height: '50px', margin: "auto", marginTop: "5px" }}>
          <img src={AmazonLogo} alt="not available"
            style={{ width: '100%', height: "100%", objectFit: 'strech' }}
          ></img>
        </div>

        <div style={{ display: "flex", height: "auto", width: "350px", margin: 'auto', border: '1px solid lightgray', borderRadius: "4px", marginBottom: "12px" }}>

          <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "auto", paddingTop: "25px", paddingBottom: "25px", gap: "3px" }}>


            <h2 style={{ height: "6px", fontWeight: "500", fontSize: "30px", marginBottom: "18px" }}>Create Account</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "15px", }}>
              <b style={{ fontSize: "0.9em" }}>Your name</b>
              <input type='text' placeholder='Enter name' value={validation.name.value}
                name="name"
                onChange={handleChange}
                style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}></input>
              {validation.name.isValid && <small style={{ color: "red" }}> <i>enter your name</i> </small>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "15px" }}>
              <b style={{ fontSize: "0.9em" }}>email</b>
              <input placeholder='Enter email or Mobile number' style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}
                value={validation.email.value}
                name="email"
                onChange={handleChange}></input>
              {validation.email.isValid && <small style={{ color: "red" }}> <i>enter valid email or phone</i> </small>}

            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "15px" }}>
              <b style={{ fontSize: "0.9em" }}>Mobile</b>
              <input placeholder='Enter email or Mobile number' style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}
                value={validation.phone.value}
                name="phone"
                onChange={handleChange}></input>
              {validation.phone.isValid && <small style={{ color: "red" }}> <i>enter valid email or phone</i> </small>}

            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "15px" }}>
              <b style={{ fontSize: "0.9em" }}>Password</b>
              <input type='password' placeholder='At least 6 caracters' 
                value={validation.password.value}
                name="password"
                onChange={handleChange}
               style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}></input>
              <b style={{ fontSize: "0.8em" }}><i>i</i>  Passwords must be at least 6 characters.</b>
            </div>


           

            <button style={{ height: "2.5em", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: "1px solid #c89411", borderRadius: "4px" }}
              onClick={handleClick}>
            Continue
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", heigth: "auto" }}>
              <p style={{ fontSize: "0.8em", marginTop: '0px' }}>By continuing, you agree to Amazon's <span
                style={{ color: "blue" }}>
                conditions of use <span style={{ color: "black" }}>and</span> privacy heading
              </span></p>

              {/* <Collapse style={{ marginLeft: '0px' }}
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className="site-collapse-custom-collapse"
                            >
                                <Panel style={{ backgroundColor: "white", textDecorationColor: 'blue' }} header="Need Help?" key="1" className="site-collapse-custom-panel">
                                    <p style={{color:"blue"}}>ForgotPassword</p>
                                    <p style={{color:"blue"}}>Other issues with Sign-In</p>
                                </Panel>

                            </Collapse> */}

              <div style={{
                display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '4em',
                alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 0px,transparent)"
              }}>
              </div>

              <div style={{ width: "100%", textAlign: "start", fontSize: "0.9em" }}>Already have an account?<a href='/login' style={{ color: "blue", }}>Sign in</a> </div>
              <div style={{ width: "100%", textAlign: "start", fontSize: "0.9em" }}>Buying for work?<a style={{ color: "blue", }}>Create a free business account</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div style={{ display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '4em', alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)" }}>
        <a style={{ color: "blue", fontSize: "0.8em" }}> Conditions of Use  </a>
        <a style={{ color: "blue", fontSize: "0.8em" }}> Privacy Notice  </a>
        <a style={{ color: "blue", fontSize: "0.8em" }}> Help  </a>

      </div>
      <div style={{ width: "100%", textAlign: "center", fontSize: "0.8em" }}>?? 1996-2022, Amazon.com, Inc. or its affiliates </div>


    </>
  )
}
