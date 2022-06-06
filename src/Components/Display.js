import { Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import APIClient from '../Contanst/APIClient'
import axios from 'axios'
import styled from '@emotion/styled';

const Root = styled('div')(({ theme }) => ({
  width: "280px",
	height: "360px",
	borderRadius: "15px",
	padding:"1.5rem",
	background: "white",
	position: "relative",
	display: "flex",
	alignItems: "flex-end",
	transition: `0.4s ease-out`,
	boxShadow: `0px 7px 10px rgba(black, 0.5)`,
	"&:hover":{
        transform: `translateY(20px)`,
		"&:before":{opacity: 1},
			
		".info":{
            opacity: 1,
			transform: `translateY(0px)`
        }
			
    },
		
	"&:before":{    
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    background: "rgba(black, 0.6)",
    zIndex: 2,
    transition: "0.5s",
    opacity: 0
},
		
	".img":{

        width: "100%",
		height: "100%",
		objectFit: "cover",
		position: "absolute",
		top: 0,
		left: 0,
		borderRadius: "15px"

    },
		
	".info":{position: "relative",
		zIndex: 3,
		color: "white",
		opacity: 0.1,
		transform: "translateY(30px)",
		transition: "0.5s",
		".h1":{margin: "0px"}, 
			
		".p":{
            letterSpacing: "1px",
			fontSize: "15px",
			marginTop: "8px"
        }
			

}
		

  
  }));


	
	



function Display() {

  const [data, setdata] = useState([])

 


useEffect(() => {
  
    axios.get(APIClient.API_BASE_URL).then((result)=>{

        setdata(result.data)
     
       })
}, [])



console.log(data)


  


  return (
    < Stack gap="50px" justifyContent="center" alignItems="flex-start" padding="20px 0px 20px 0px"  direction="row"  flexWrap="wrap" >
        {data.map((txt,i)=>(            
<Root  
 >   
 <img  className='img'  src={txt.imageUrl} />
 <div className='info' >
 <Typography className='h1'>{txt.fullName}</Typography>
    <Typography  className='p'>{txt.title}</Typography>    
 </div>
   
   
    </Root>
        ))} 
    </Stack>
  )
}

export default Display