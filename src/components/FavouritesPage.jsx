import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";




const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favorite Companies</h1>
          <ul>
            {favorites.map((company, index) => (
              <li key={index}>
                <Link to={`/${company}`}>{company}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};


export default FavoritesPage