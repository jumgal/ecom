import React, { Fragment, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

// import products from "../products";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        res.json().then((r) => setProducts(r));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
