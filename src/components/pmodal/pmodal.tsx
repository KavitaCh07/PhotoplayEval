import React from 'react';
import { Component } from 'react'
import './pmodal.css';
import Footer from '../footer/footer';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AddPhoto } from '../../redux/photoSlice';
import bigHeart from '../../assets/bigHeart.png';
import oval from '../../assets/Oval.png';
import zoomplus from '../../assets/zoomPlus.png';
import zoomminus from '../../assets/zoomMinus.png';
import { useLocation } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const Pmodal = (props: any) => {
  const [searchInputData, setSearchInputData] = useState();  //to take input data from search bar

  // const weatherData = useSelector((state: any) => state.weatherData);
  // const photoVideos = useSelector((state: any) => state.photoVideos.photo) // for the data to get from header page
  const location = useLocation();
 
  let navigate = useNavigate();
  return (
    <div className='pmodal-container'>
      <div className="header">
        <div className="brownLogo">
          <img src={require("../../assets/brownLogo.png")} alt="image" />
        </div>
        <div className='searchPosition'>
          <form action="" className='modal-search' onSubmit={(event: any) => {
            event.preventDefault();
            setSearchInputData(event.target.searchInputData.value);
            localStorage.setItem("searchTerm", JSON.stringify(searchInputData));
          }}>
            <input type="text" name='searchInputData' placeholder='Search photos, videos, artists' className='modal-search-input' />
            <button className='search-button'>SEARCH</button>
          </form>
        </div>
      </div>
      <TransformWrapper initialScale={1}
        initialPositionX={200}
        initialPositionY={100}>
          {({ zoomIn, zoomOut, ...rest})  => (
      <div className="displayPhoto">
        <div className="big-image">
        <TransformComponent>
          <img src={location.state.srcc} alt="image" className='modalPhoto' />
      </TransformComponent>
        </div>
        <div className="photo-details">
          <div className="first-line">
            <div className="big-heart"><img src={bigHeart} alt="" /></div>
            <div className="zoom-button">
              <button className='plus'  onClick={() => zoomIn()}><img src={zoomplus} alt=""/></button>
              <button className='minus'  onClick={()=> zoomOut()}><img src={zoomminus} alt=""/></button>
            </div>
            <div className="about-imag">{location.state.alt}</div>
          </div>
          <div className="big-user-profile">
            <div className="pro-img"><img src={location.state.userphoto} alt="" /></div>
            <div className="photographer-name">{location.state.usernmae}</div>
          </div>
        </div>
      </div>
      )}
      </TransformWrapper>

      <div className="foot2">
        <div className='robo-text'>© Robosoft Technologies 1996-2021</div>
      </div>
    </div>
  )
}

export default Pmodal;
