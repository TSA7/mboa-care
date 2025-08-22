import React, { useRef } from 'react'
import './home.css'
import Buble from './Buble'
import Achievement from './Achievement'
import PhoneIcon from '@mui/icons-material/Phone';

function Home({navHeight}) {
    const leftheight = useRef(0)
    const imgheight = leftheight.current?.clientHeight
  return (
    <div style={{backgroundColor:'rgba(214, 231, 223, 1)', height:`calc(100vh - ${navHeight}px)`}}  className=' relative bottom-1'>
      <div className=' w-7 h-7 bg-white rounded-full  bubleAnimation1'></div>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='35px' width='35px' className={'bubleAnimation2'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' className={'bubleAnimation3'}/>
      <Buble color='rgba(239, 35, 60, 0.22)' heigh='22px' width='22px' className={'d'} style={{ border:`1px solid black`, transform:`translate(300px 200px)`}}/>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='32px' width='32px' className={'bubleAnimation'}/>
      <Buble color='rgba(239, 35, 60, 0.25)' heigh='35px' width='35px' className={'bubleAnimation'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' className={'bubleAnimation'}/>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='35px' width='35px' className={'bubleAnimation'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' className={'bubleAnimation'}/>
      <Buble color='rgba(251, 118, 32, 0.25)' heigh='35px' width='35px' className={'bubleAnimation'}/>
      <Buble color='rgba(3, 112, 62, 0.26)' heigh='40px' width='40px' class name={'bubleAnimation'} style={{transform:`translate(20px 40px)`}}/>
      <div className=' w-full   flex justify-center relative bottom-25  lg:bottom-0'>
        <div className='  w-9/10 lg:w-3/4 flex justify-between items-center'>
            <div>
                <img className=' block lg:hidden' style={{height:`100vh -${navHeight}px - ${imgheight}px`}} src='home.png'/>
                <div ref={leftheight}>
                    
                    <p style={{color:'rgba(0, 105, 57, 1)', fontWeight:'bold', textShadow:`0px 6px 3px white `, textAlign:'center'}} className=' text-[35px] lg:text-[71px]'>Care you can trust</p>
                    <p style={{color:'rgba(0, 0, 0, 0.83)', textAlign:'justify'}}>I am Nurse Name, a certified healthcare professional with over 8 years of experience in providing quality medical care. Based in Yaoundé, I am passionate about delivering personalized healthcare services that prioritize your comfort and well-being.</p>
                    <p style={{color:'rgba(0, 0, 0, 0.83)', textAlign:'justify', marginTop:'16px'}}>I am passionate about delivering personalized healthcare services that prioritize your comfort and well-being.</p>
                    <button className=' w-full font-semibold rounded-md mt-8 p-2' style={{backgroundImage:`linear-gradient(to right, #02502C, #029953)`, color:'white'}}>Visiting Hours 7:00 am to 10:00 pm</button>
                    <div className='flex justify-between my-5  gap-4'>
                        <Achievement number={100} unit={'+'} color={'rgba(0, 145, 79, 1)'} subtitle={'Patients cared for'}/>
                        <Achievement number={6} unit={'+'} color={'rgba(251, 118, 32, 1)'} subtitle={'Years of Experience'}/>
                        <Achievement number={98} unit={'%'} color={'rgba(3, 112, 62, 1)'} subtitle={'Patient Satisfaction'}/>
                    </div>
                </div>
            </div>
            <div className=' w-full hidden  lg:flex justify-center'>
                {<img style={{height:`${imgheight}px`}} src='home.png'/>}
            </div>
        </div>
      </div>
      <button className=' fixed z-20 bottom-4 right-4  bg-black rounded-full p-3' style={{backgroundColor:'rgba(246, 170, 28, 1)'}}><a href="tel:+237 658182157"><PhoneIcon sx={{color:'white'}}/></a></button>
    </div>
  )
}

export default Home
