import React from 'react';
import $ from 'jquery';
import GameStatisticsTab from './gameStatisticsTab.jsx';
import AchievementTab from './achievementTab.jsx';
import TabButton from './tabButton.jsx';

class UserProfile extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  user: null,
  	  achievementTabActive: false,
  	  gameStatisticsTabActive: true
  	}
  	this.getUserProfile = this.getUserProfile.bind(this);
  	this.handleClickAchievementTab = this.handleClickAchievementTab.bind(this);
  	this.handleClickGameStatisticsTab = this.handleClickGameStatisticsTab.bind(this);
  }

  componentDidMount() {
  	// console.log(this.state.user)
  	this.getUserProfile(this.props.params.username)
  }

  getUserProfile(user) {
  	$.ajax({
  	  url: '/userprofile',
  	  method: 'GET',
  	  data: 'username=' + user,
  	  success: (data) => {
  	  	console.log('data retrieved about user', data)
  	  },
  	  error: (err) => {
  	  	console.log('error retrieving user profiles', err)
  	  }
  	});
  }

  handleClickGameStatisticsTab(event) {
  	this.setState({
  		achievementTabActive: false, 
  		gameStatisticsTabActive: true
  	})
  }

  handleClickAchievementTab(event) {
  	this.setState({
  		achievementTabActive: true, 
  		gameStatisticsTabActive: false
  	})
  }

  render(){
  	return (
  	  <div>
  	    <div>{this.props.params.username}</div>
  	    <TabButton displayName='Achievement' handleClick={this.handleClickAchievementTab}/>
  	    <TabButton displayName='Game Statistics' handleClick={this.handleClickGameStatisticsTab}/>
  	    {this.state.gameStatisticsTabActive && <GameStatisticsTab/>}
  	    {this.state.achievementTabActive && <AchievementTab/>}
  	  </div>
  	)
  }

}

export default UserProfile
