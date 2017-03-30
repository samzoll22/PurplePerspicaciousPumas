import React from 'react';
import $ from 'jquery';
import GameStatisticsTab from './gameStatisticsTab.jsx';
import AchievementTab from './achievementTab.jsx'

class UserProfile extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  user: null,
  	  achievementTabActive: false,
  	  gameStatisticsTabActive: true
  	}
  }

  componentDidMount() {

  }

  getUserProfile() {

  }

  render(){
  	return (
  	  <div>
  	    {this.state.gameStatisticsTabActive && <GameStatisticsTab/>}
  	    {this.state.achievementTabActive && <AchievementTab/>}
  	  </div>
  	)
  }

}

export default UserProfile
