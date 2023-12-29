import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AboutScreen = () => {
  return (
    <Container className="pt-9 px-4">
      <Row className="justify-content-between gap-8">
        <Col lg={5}>
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-pink-800 pb-4">About Us</h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            Welcome to Avon Virgie, a website that brings you the best Avon products and services. We are four students passionate about beauty and helping others. We wanted to create a platform where everyone could feel confident and beautiful.
            We are excited to offer a wide range of Avon makeup products, including lipstick, pressed powder, brow liner, and more.
            Our website is named after Virgie, the mother of one of our team members. Virgie has always been a source of inspiration and support for her daughter, Pearl Nerijean G. Calape, and she is passionate about helping others feel their best. We are honored to dedicate this website to her.
            We are committed to providing our customers with the best possible shopping experience.
            We hope you will enjoy shopping at Avon Virgie. Thank you for supporting the website!
          </p>
        </Col>
        <Col lg={8}>
          {/* <Image src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/396455745_899455191595897_5341898933740480073_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeExZa7G7s12Ilj6dDeoZ8BZA4blKmJ7EPoDhuUqYnsQ-k7FGgA8vyLQE8sCyp75lq2sqvqj1CV2sZdPz4JFyb-Q&_nc_ohc=Ppt9RXNbIUEAX_V-Jbf&_nc_ht=scontent.fceb2-1.fna&oh=03_AdRmakT9_DENDkzqOe5livUI7Q4Jt93zaAceqjKRE_jw4Q&oe=656851A1" alt="A group of People" fluid /> */}
        </Col>
      </Row>

      <Row className="justify-content-between gap-8 pt-12">
        <Col lg={5}>
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-pink-800 pb-4">Our Story</h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            Avon Virgie is still a young website, but it will grow to become a trusted resource for Avon customers. The team is committed to providing their customers with the best possible browsing experience, and they are always looking for new ways to improve the website.
            In the future, the team hopes to expand Avon Virgieto offer even more products and services and to reach even more Avon customers. They also hope to continue to support the local community through their charitable giving initiatives.
            Thank you for choosing Avon Virgie
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;