import React from 'react';
import './style-newsitem.css'

export interface NewsItemProps {
    title: '';
    description:'';
    url:'';
    urlToImage:'';
    author:''
}



const NewsItem: React.FC<NewsItemProps> = ({title, description, url, urlToImage, author}) => {
    return (
        <div className='news-app'>
            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h4>Author: {author}</h4>
                <h3><a href={url}>{title}</a></h3> 
                <p>{description} <span className='seemore-link'><a href={url}> <br /> See More.. </a></span></p>
            </div>
        </div>
    );
};

export default NewsItem;