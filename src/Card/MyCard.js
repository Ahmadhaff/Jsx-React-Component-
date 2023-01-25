import React from 'react'
import Card from 'react-bootstrap/Card';
import ProfilePhoto from '../Profile/Ahmad.jpg';
import FullName from '../Profile/FullName';
import Adress from '../Profile/Adress';
import '../Card/MyCard.css'

const MyCard = () => {
  return (
    <div className='TheCard'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ProfilePhoto}/>
      <Card.Body>
        <Card.Title><FullName/></Card.Title>
        <Card.Text>
        <Adress/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MyCard