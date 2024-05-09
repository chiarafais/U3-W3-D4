import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import IArticle from "../interfaces/IArticle";
import SingleArticle from "./SingleArticle";


const ArticlesList = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const arrOfArticles = await resp.json(); console.log(arrOfArticles)
        setArticles(arrOfArticles.results);
       
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Articoli:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map(article => (
          <SingleArticle article={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ArticlesList;