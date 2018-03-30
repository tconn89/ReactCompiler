
import React from 'react'

var IMG_URL = 'https://coffeelux.club/uploads/'

export default class Portait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.list.map((image) => 
            <div>
              <img src={IMG_URL + image} width="25%" />
              --> (link-goto: "Crustacean")
            </div>
          )
        }
      </div>
    );
  }
}
