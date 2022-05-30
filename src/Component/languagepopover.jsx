import React, { useState } from 'react';
// import './signInpopover.css'
import { Button, Popover, Radio, Space, Tooltip } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import '../Css/subheader.css'
import { CaretDownOutlined } from '@ant-design/icons';
export default function LanguagePopover() {


    // state = {
    //     value: 1,
    //   };
    
    //   onChange = e => {
    //     console.log('radio checked', e.target.value);
    //     this.setState({
    //       value: e.target.value,
    //     });
    //   };
    //   const { value } = this.state;
  
  
  const text1 = (
    <div style={{ width: "100%", display: "grid", marginTop:'10px' }}>
     
      <Radio checked={true}>English</Radio>

    </div>

  )
const content = (<>
    <div style={{ width: "100%", display: "grid", marginTop:'5px',marginBottom:'5px', borderBottom:"1px #ddd solid", }}>

    <Radio.Group >
    <Space direction="vertical">
      <Radio value={1}>हिन्दी - HI</Radio>
      <Radio value={2}>தமிழ் - TA</Radio>
      <Radio value={3}>తెలుగు - TE</Radio>
      <Radio value={4}>ಕನ್ನಡ - KN</Radio>
      <Radio value={5}>മലയാളം - ML</Radio>
      <Radio value={6}>বাংলা - BN</Radio>
      <Radio value={7}>मराठी - MR</Radio>
      <Radio value={8}>ಕನ್ನಡ - KN</Radio>
        
        {/* {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null} */}

    </Space>
  </Radio.Group></div>
  <div style={{marginTop:'10px',display: 'flex', flexDirection: 'row'}}>
  <img className='header_flag' style={{ height: '2vh', width: '1.5vw', display: 'flex', flexDirection: 'row', marginTop: '5px' }} src='https://flagicons.lipis.dev/flags/4x3/in.svg' />

      <span><p> You are shopping on Amazon.in </p></span>
     
      </div>
      <div>
      <span><p style={{color:'blue'}}>Change Country/Region</p></span></div>
  
  </>
)
 

  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="blue" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg> */}
      
      <Popover placement="bottom"
          
          style={{position :'relative', top:"-10px"}}
        trigger='hover'
        title={text1} content={content}  >
        
        {/* <div style={{ width: '30%', display: 'flex', paddingLeft: '60px' }}> */}
                    <div style={{ width: '19%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <a href="" class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'row', height: '85%', width: '80%', alignItems: 'center', gap: '4px' }}>
                            <img className='header_flag' style={{ height: '3vh', width: '2vw', display: 'flex', flexDirection: 'row', marginTop: '' }} src='https://flagicons.lipis.dev/flags/4x3/in.svg' />
                            <span style={{ display: 'flex', flexDirection: 'row', paddingTop: '10px', color: 'grey' }}><CaretDownOutlined /> </span>  </a>
                    </div>
                    
                  
      </Popover>
      
    </>
  );
}