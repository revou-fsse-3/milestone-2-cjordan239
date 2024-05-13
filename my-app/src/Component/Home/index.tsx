import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import './style-home.css';
import NewsItem from '../NewsItem';

const Home = () => {
    const navigate = useNavigate();



    return (
        <div className='home-container'>
            <h1 className='special-text'>What is your interest?</h1>

            <button onClick={() => navigate('/gadget')} className='cool-button'>
                Gadget
            </button>
            <button onClick={() => navigate('/game')} className='awesome-button'>
                Game
            </button>
            <button onClick={() => navigate('/football')} className='cool-button'>
                Football
            </button>
            <button onClick={() => navigate('/food')} className='awesome-button'>
                Food
            </button>
            <button onClick={() => navigate('/photography')} className='awesome-button'>
                Photography
            </button>
        </div>
    );
};

export default Home;
