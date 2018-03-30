
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Container from '../components/Container'
import Stats from '../components/Stats'
import Portrait from '../components/Portrait'
import ImageList from '../components/ImageList'

const images = ['mutant_tent.png', 'mutant_claw.png', 'mutant_turtle.png']
const Wake = ReactDOMServer.renderToString(
  <Container>
    <Stats>
      <p>
        (print: "ATHLETICS=") (print: $Athletics)
        (print: "BRAINS=") (print: $Brains)
        (print: "CHARM=") (print: $Charm)
        (print: "DURABILITY=") (print: $Durability)
      </p>
    </Stats>
    <Portrait>
      <ImageList list={images} />
    </Portrait>
    <footer class="footer">
      Welcome Traveller! You awake in your birth creche
      already a young adult -- android servitors are forcing you outside, 
      but you gaze at the mirrored surface of the chrome chambers and see a 
      humanoid....
    </footer>
  </Container>
)

export default {
  name: 'Wake',
  body: Wake
}