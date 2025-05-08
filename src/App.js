import React from "react";
import './App.css'
import LyricsFinder from "./Components/LyricsFinder";
import ThingsToDo from "./Components/ThingsToDo";
import EcommerceApp from "./Components/E-Commerce/EcommerceApp";
import Program5SPA from "./Components/SPA_UserInfo/Program5SPA";
import BlogApp from './Components/BlogApplication/BlogApp'
import TimerMain from './Components/EventCountdownTimer/TimerMain'


import cropTopDress from './assets/cropTopDress.jpg'
import formalDress from './assets/formalDress.jpg'
import ethinicOutfit from './assets/ethinicOutfit.jpg'
import jumpSuits from './assets/jumpSuits.jpg'
import kurti from './assets/kurti.jpg'
import longDress from './assets/longDress.jpg'
import shoulderTop from './assets/shoulderTop.jpg'
import topsForGirls from './assets/topsForGirls.jpg'
import traditionalDress from './assets/traditionalDress.jpg'
import tshirtForWomen from './assets/tshirtForWomen.jpg'
import twoPieceDress from './assets/twoPieceDress.jpg'
import westernOutfit from './assets/westernOutfit.jpg'


//data used for E-Commerce App (productsData)
let productsData = [
    {
      id: 1,
      currency: '$',
      title: "Crop Top Dress",
      price: 22.3,
      description: "A crop top is a half shirt, midriff top or cutoff shirt.",
      category: 'clothing',
      image: cropTopDress,
      size: 'XS'
    },
    {
      id: 2,
      currency: '$',
      title: "Formal Dress",
      price: 10.95,
      description: "Formal dress for women is a full-length ball or evening gown.",
      category: 'clothing',
      image: formalDress,
      size: 'S'
    },
    {
      id: 3,
      title: "Ethinic Outfit",
      currency: '$',
      price: 15.99,
      description: "Traditional Indian ensembles worn by the people in India.",
      category: 'clothing',
      image: ethinicOutfit,
      size: 'L'
    },
    {
      id: 4,
      title: "Jump Suits",
      currency: '$',
      price: 22.99,
      description: "A jumpsuit is a one-piece garment with sleeves and legs.",
      category: 'clothing',
      image: jumpSuits,
      size: 'XL'
    },
    {
      id: 5,
      title: "Kurti for Women",
      currency: '$',
      price: 23.99,
      description: "Indian women's long loose-fitting tunic, with long sleeves.",
      category: 'clothing',
      image: kurti,
      size: 'XS'
    },
    {
      id: 6,
      title: "Long Dress",
      currency: '$',
      price: 12.49,
      description: "Long dresses have floor-length hemlines.",
      category: 'clothing',
      image: longDress,
      size: 'XXL'
    },
    {
      id: 7,
      title: "Shoulder Top",
      currency: '$',
      price: 11.49,
      description: "A shoulder top is a top or blouse with peek-a-boo cutouts.",
      category: 'clothing',
      image: shoulderTop,
      size: 'M'
    },
    {
      id: 8,
      title: "Tops For Girls",
      currency: '$',
      price: 31.49,
      description: "Top clothing can be one way to enjoy that sense of attraction.",
      category: 'clothing',
      image: topsForGirls,
      size: 'L'
    },
    {
      id: 9,
      title: "Traditional Dress",
      currency: '$',
      price: 27.99,
      description: "The traditional clothing of India is a testament to the diverse cultures.",
      category: 'clothing',
      image: traditionalDress,
      size: 'XL'
    },
    {
      id: 10,
      title: "T-shirts For Women",
      currency: '$',
      price: 21.99,
      description: "A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves.",
      category: 'clothing',
      image: tshirtForWomen,
      size: 'M'
    },
    {
      id: 11,
      title: "Two Piece Dress",
      currency: '$',
      price: 9.49,
      description: "A set of clothes that consists of two separate matching parts, especially a woman's clothes.",
      category: 'clothing',
      image: twoPieceDress,
      size: 'S'
    },
    {
      id: 12,
      title: "Western Outfit",
      currency: '$',
      price: 16.99,
      description: "Western dresses are celebrated for their unique blend of modern styles.",
      category: 'clothing',
      image: westernOutfit,
      size: 'XXL'
    },
  ];



function App() {
  return (
    <div>
      <ThingsToDo />
      <LyricsFinder />
      <EcommerceApp productsData={productsData}/>
      <Program5SPA /> 
      <BlogApp /> 
      <TimerMain />


    </div>
  );
}

export default App;
