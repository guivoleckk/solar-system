import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions"> </div>
        <Title headline="Missões" />
        <section>
          {
            missions.map((mission) => {
              const { name, year, country, destination } = mission;
              return (
                <MissionCard
                  key={ name }
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                />
              );
            })
          }
        </section>
      </>
    );
  }
}

export default Missions;
