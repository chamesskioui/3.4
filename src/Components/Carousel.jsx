import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Carouselle() {
  return (
    <div>
      <Carousel>
    <Carousel.Item interval={1000}>
     <img style={{width:"100%"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/466980101_18100998436460132_6865192666186665271_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ty7Wev_H60kQ7kNvgHmxA3a&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AZqbRlvUZqKySV8Thr62qLi&oh=00_AYDEWqbRefTImplGQb6bkb3Bh-z8Y_aU9w3rmYQXfN2clw&oe=6785891C" alt="" />
      <Carousel.Caption>
       
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <img style={{width:"100%"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/466971874_18100998523460132_4180578456714928791_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ev6yWlxk_CUQ7kNvgEdxepz&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AXt-oON_5r-IRru_m87v-d4&oh=00_AYBOWzaN7X6mWH90_EeNgwZTUsx3mIeEwh2kgyozCoKvkA&oe=6785821C" alt="" />
      <Carousel.Caption>
      
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{width:"100%"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/466864561_18100998460460132_4688005291869602420_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8HRVG0EPPbAQ7kNvgHe3SB4&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AbkL-_6_EZuXmaWqHxCFZr4&oh=00_AYCQJZq-BQIF-Rk2Qi1FBQWPhKe-tPl6SH-0cgNeogWD3Q&oe=67857F85" alt="" />
      <Carousel.Caption>
       
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carouselle