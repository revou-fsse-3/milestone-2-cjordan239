import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import NewsItem, { NewsItemProps } from '../NewsItem';


interface ApiResponse {
    articles: NewsItemProps[];

  }
  
const NewsList = ({topic}: {topic:string}) => {
    const [articles, setArticle]= useState<NewsItemProps[]>([])
    
    useEffect(() => {
        const getArticle = async () => {
        try {
            const response = await  axios.get<ApiResponse>(`https://newsapi.org/v2/everything?q=${topic}&from=2024-01-09&to=2023-12-01&sortBy=popularity&apiKey=178ef24ed1294ed588b9c880c091f85a`)
            console.log(response)
            setArticle(response.data.articles)
        } catch (error) {
            console.error('Error fetching articles:', error);
          }
        };

        getArticle()

    }, [topic])
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage} 
                    author={article.author} 
                    />
                )
            })}
        </div>
    );
};

export default NewsList;

