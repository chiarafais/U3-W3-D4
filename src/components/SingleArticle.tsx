import { Card, Col } from "react-bootstrap";
import IArticle from "../interfaces/IArticle";
import { NavLink } from "react-router-dom";

interface SingleArticleProps {
  article: IArticle;
}

const SingleArticle = (props: SingleArticleProps) => {
  console.log("SINGLE ARTICLE PROPS", props);
  return (
    <Col xs={12} md={4} className="text-center">
      <NavLink to={`/ArticleDetail/${props.article.id}`}>
        <Card>
          <Card.Img variant="top" src={props.article.image_url} />
          <Card.Body>
            <Card.Title>{props.article.title}</Card.Title>
            <Card.Text>{props.article.summary}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </Col>
  );
};
export default SingleArticle;
