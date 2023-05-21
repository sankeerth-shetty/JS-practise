import './web.css'
import img1 from './image.png'

function Body(){
    return(
        <div>
            <div className='img-con'>
                <img src={img1} className='image'/>
            </div>
            <div className='container row'>
                <div className='content'>
                    <h2 className='heading'>LOREM IPSUM DOLOR</h2>
                    <h3 className='sub-head'>LOREM IPSUM DOLOR SIT AI</h3>
                    <p className='main-con'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
}

export default Body;