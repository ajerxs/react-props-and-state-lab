import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (animalType) => {
    this.setState({
      filters: {...this.state.filters, type: animalType.target.value}
    })
  } 

  onFindPetsClick = () => {
    let url = ""
    if (this.state.filters.type === "all") {
      url = "/api/pets"
    } else {
      url = "/api/pets?type=" + this.state.filters.type
    }
    fetch(url)
    .then(res => res.json())
    .then(obj =>
      this.setState({
        pets: obj
      })
    )
  }

  onAdoptPet = (id) => {
    let pet = this.state.pets.find(x => x.id === id)
    pet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
