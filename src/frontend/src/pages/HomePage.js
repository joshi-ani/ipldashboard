import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';


import './HomePage.scss';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`http://localhost:8080/teams`);
                const data = await response.json();
                setTeams(data);
            };

            fetchAllTeams();

        }, []

    );

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="teams-grid">
        { teams.map(team => <TeamTile teamName={team.teamName} />) }
      </div>
    </div>
  );
}