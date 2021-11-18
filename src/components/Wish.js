import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Wish = props => {
  return (
    <Container className="wish">
      <Row>
        <Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>挖礦是我們的使命</Card.Title>
              <Card.Text>
                任何想要加入區塊練記帳的人都是需要盡可能去採購顯示卡，並且將顯卡價格炒上來，讓那些不懂記帳的屁孩遊戲玩家知道挖礦的可貴!
              </Card.Text>
              <Button variant="primary">來吧!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>挖礦生態圈</Card.Title>
              <Card.Text>
                我們建立了一個屬於礦工的極樂世界，讓想要進行區塊練探勘的礦工能夠輕鬆挖掘!
              </Card.Text>
              <Button variant="primary">加入!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>挖礦的好處</Card.Title>
              <Card.Text>
                挖礦對於環境、社會百利無一害，利大於弊，它可以讓去中心化公開帳本不至於被任何一個國家、私人組織所控制，進而讓貨幣還權於民，人人享有作帳的權利!
              </Card.Text>
              <Button variant="primary">買顯卡!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Wish;
