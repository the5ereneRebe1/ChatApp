import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './Active.css';

const Active = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>People currently Active:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                <div className="activeC">
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                  <img src={onlineIcon} alt="online"/>
                  </div>
                ))}
                
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default Active;