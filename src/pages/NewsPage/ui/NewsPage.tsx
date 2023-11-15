import React from 'react'
import { useParams } from 'react-router-dom'
import { NewsListProps } from '../../../components/NewsList/NewsList.interface';
import Comment from 'components/Comment';

const NewsPage: React.FC<NewsListProps> | null = ({ news }) => {
  const { id } = useParams();

  const articleId = Number(id)

  if (isNaN(articleId)) {
    console.log('Parameter error');
  }

  const article = news.find((item) => item.id === articleId)

  if (!article) {
    console.log('Article not found');
  }

  return (
    <div>
      <h1>{article?.title}</h1>
      <div>
        <img src={article?.image} alt={article?.title} />
      </div>
      <div>
        <p>{article?.content}</p>
        <span>{article?.publishDate}</span>
        <Comment comments={article.comments}/>
      </div>
   
    </div>
  )
}

export default NewsPage