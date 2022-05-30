import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
// import './index.css';


export default function Popover1(props) {
  const [showtoggle, setShowtoggle] = useState(false)
  console.log(showtoggle)
  useEffect(() => {
    props.toggle != null && setShowtoggle(!showtoggle)
 }, [props.toggle])

return (
    <>
     
     <div id="modal"  onClick={() => { setShowtoggle(!showtoggle) }}  style={{
      backgroundColor: 'rgba(199, 193, 198, 0.7)',
      position: 'absolute',
      marginTop: '100px',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }}  >
      
      </div>
      
    </>
  )
}
