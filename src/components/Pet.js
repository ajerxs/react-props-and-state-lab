import React from 'react'

class Pet extends React.Component {
  adoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          {/* <a className="header"> */}
            {/*'♀' OR '♂' */}
            {/* PET NAME */}
            {this.props.pet.name}
            {this.props.pet.gender === "female" ? ' ♀' : ' ♂'}
          {/* </a> */}
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
