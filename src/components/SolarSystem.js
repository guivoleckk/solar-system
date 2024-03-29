import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
        <div data-testid="solar-system" className="solar-system">
          <div className="title">
            <Title headline="Planetas" />
          </div>
        <section className="planets">
          {Planets.map((planet) => {
            const { name, image } = planet;
            return (
              <PlanetCard
                key={name}
                planetName={name}
                planetImage={image}
              />
            );
          })}
        </section>
        </div>
    );
  }
}
export default SolarSystem;
