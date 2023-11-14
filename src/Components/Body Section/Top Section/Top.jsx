import React from "react";
import "./top.css";

//import icons
import {BiSearchAlt} from 'react-icons/bi';
import {TbMessageCircle} from 'react-icons/tb';
import {MdNotificationsNone} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs';

//imported image
import img from "../../../Assets/user.jpeg";
import video from '../../../Assets/orchidspink.mp4';
import img1 from '../../../Assets/white orchids.webp';

const Top =() =>{
    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Orchid</h1>
                    <p>Hello Orchidophile, Welcome back! </p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search dashboard" />
                    <BiSearchAlt className='icon' />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon' />
                    <MdNotificationsNone className='icon' />
                    <div className="adminImage">
                        <img src={img} alt="adminImage" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>The world's fast growing industry today are natural made products!</p>

                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                        <h1>My Start</h1>
                        
                        <div className="flex">
                            <span>Today <br />
                            <small>4 orders</small>
                            </span>
                            <span>This Month <br />
                            <small>100 Orders</small>
                            </span>
                        </div>
                        <span className="flex link">
                            Go to my orders <BsArrowRightShort className="icon" />
                        </span>
                        </div>

                        <div className="imgDiv">
                            <img src={img1} alt="Image Name"/>
                        </div>                  

                        
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Top;