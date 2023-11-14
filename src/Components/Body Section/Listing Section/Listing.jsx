import React from "react";
import "./listing.css";

//import images
import img from '../../../Assets/anggrekputih1.jpg';
import img1 from '../../../Assets/anggrekpink.jpg';
import img2 from '../../../Assets/anggrekbiru.webp';
import img3 from '../../../Assets/anggrekhijau2.jpg';


//import icons
import {AiFillHeart} from 'react-icons/ai';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';

const Listing =() =>{
    return(
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={img3} alt="Image Name"/>
                    <h3>Orange Orchids</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img1} alt="Image Name"/>
                    <h3>Pink Orchids</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img2} alt="Image Name"/>
                    <h3>Blue Orchids</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img} alt="Image Name"/>
                    <h3>White Orchids</h3>
                </div>
                
                               

            </div>
        </div>
    )
}

export default Listing;