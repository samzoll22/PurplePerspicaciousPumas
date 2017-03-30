import React from 'react';
import $ from 'jquery';
import GameStatisticsPane from './GameStatisticsPane.jsx';
import AchievementPane from './AchievementPane.jsx';
import TabButton from './tabButton.jsx';

class UserProfile extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  //creating dummy data to display at the moment
  	  //TODO: refactor to real data when it is set up
  	  user: null,
  	  userDummy: {
  	  	username: 'NyanCat4Lyfe',
  	  	achievements: [],
  	  	gamesWon: 72,
  	  	gamesLost: 51,
  	  	gamesParticipated: 123,
  	  	inGameCurrency: 1337,
  	  	currentWinStreak: 4,
  	  	currentLosingStreak: 0,
  	  },
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
  	    {this.state.gameStatisticsTabActive && <GameStatisticsPane data={this.state.userDummy}/>}
  	    {this.state.achievementTabActive && <AchievementPane data={this.state.userDummy}/>}
  	  </div>
  	)
  }

}

export default UserProfile
