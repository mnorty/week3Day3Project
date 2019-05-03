import React,{Component} from 'react';
import './App.css';
import users from './react-i-ii-afternoon/data'
import Card from './Components/Card/Card'
import NavBar from './Components/NavBar/NavBar'
import Controls from  './Components/Controls/Controls'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      users: users,
      page: 1
    }
  };

  next = () => {
    if (this.state.page === 25) {
      this.setState({
        page: 1
      })
    } else {
      this.setState({
        page: this.state.page + 1
      });
    }
  };

  prev = () => {
    if (this.state.page === 1) {
      this.setState({
        page: 25
      })
    } else {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  render() {

    const filteredUser = this.state.users.filter(user => (
      user.id === this.state.page
    ));

    return (
      <div className="app-container">
        <NavBar />
        <Card filteredUser={filteredUser} />
        <Controls next={this.next} prev={this.prev} />
      </div>
    )
  }
};