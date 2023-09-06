import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const { missions } = useSelector((state) => state.missions);

  const joinedMissions = missions.filter((mission) => mission.joined === true);

  return (
    <div>
      <h2>Missions Joined</h2>
      <ul>
        {joinedMissions.map((mission) => (
          <li key={mission.id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyPage;
