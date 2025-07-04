import React, { useState } from "react";
import {
  Search as SearchIcon,
  ArrowRightCircle,
  Funnel,
} from "react-bootstrap-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  ListGroup,
} from "react-bootstrap";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    const data = [
      { name: "Apple", category: "Fruits" },
      { name: "Banana", category: "Fruits" },
      { name: "Mango", category: "Fruits" },
      { name: "Carrot", category: "Vegetables" },
      { name: "Potato", category: "Vegetables" },
      { name: "Orange", category: "Fruits" },
    ];

    const filtered = data.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.map((item) => item.name));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow border-0 rounded-4 p-4">
            <Card.Body>
              <h3 className="mb-4 text-center text-primary fw-bold">
                <SearchIcon className="me-2" size={24} />
                Product Finder
              </h3>
              <Form>
                <Row className="mb-3 g-2 align-items-end">
                  <Col xs={12} md={6}>
                    <Form.Label className="fw-semibold text-secondary">
                      <Funnel className="me-1" />
                      Category
                    </Form.Label>
                    <Form.Select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>All</option>
                      <option>Fruits</option>
                      <option>Vegetables</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Label className="fw-semibold text-secondary">
                      Search Term
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <SearchIcon />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter search term"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    variant="primary"
                    className="px-4"
                    onClick={handleSearch}
                  >
                    Search <ArrowRightCircle className="ms-1" />
                  </Button>
                </div>
              </Form>
              <hr className="my-4" />
              <div>
                {results.length > 0 ? (
                  <ListGroup>
                    {results.map((item, idx) => (
                      <ListGroup.Item
                        key={idx}
                        className="d-flex align-items-center justify-content-between"
                      >
                        <span>{item}</span>
                        <ArrowRightCircle className="text-primary" />
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <div className="text-muted text-center fst-italic mt-3">
                    No results found. Please try a different search.
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
