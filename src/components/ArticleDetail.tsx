import { useEffect, useState } from "react";
import IArticle from "../interfaces/IArticle";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ArticleDetail = () => {
  const [articles, setArticles] = useState<IArticle>();

  const { id } = useParams();

  const fetchArticles = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
      if (resp.ok) {
        const arrOfArticles = await resp.json();
        console.log(arrOfArticles);

        setArticles(arrOfArticles);
      } else {
        throw new Error("Errore nel reperire gli articoli");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {articles && (
        <Card>
          <Card.Img variant="top" src={articles.image_url} />
          <Card.Body>
            <Card.Title>{articles.title}</Card.Title>
            <Card.Text>{articles.summary}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default ArticleDetail;
