import React from 'reaect';
import $ from 'jquery';
import UserList from './ChatUsers.jsx';
// import 'bootstrap/dist/css/bootstrap.css';

class ChatWindow extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h3>*Insert Game Name*</h3>
        <table>
          <colgroup>
            <col>
              <UserList />
            </col>
            <col>
              
            </col>
          </colgroup>
        </table>
      </div>
    )
  }
}
