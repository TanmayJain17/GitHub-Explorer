import React from 'react';
import './App.css';
import Search from './components/Search'
import UserCard from './components/UserCard'
import RepoCard from './components/RepoCard'
import axios from 'axios'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: null,
      error: null,
      loading: false,
      userRepos: null
    }
  }



  fetchData = (username) => {
    //fetching the data
    this.setState({ loading: true })
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        
        this.setState({
          user: response.data,
          /* loading: false, */
          error: null
        })
        axios.get(`https://api.github.com/users/${username}/repos?page=1`)
          .then((response) => {
            

            return this.setState({
              loading: false,
              userRepos: response.data
              /* user:this.user+response.data */
            })
          })

      })



      .catch((error) => {
        const { data } = error.response

        return this.setState({
          error: data.message,
          loading: false
        })
      })

  }

  render() {
    const { error, loading, user,userRepos } = this.state
    return (
      <div>
        <Search fetchData={this.fetchData} />
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && user && <UserCard userDetails={user} />}
        {!loading && !error && userRepos && userRepos.map(repos=><RepoCard key={repos.id} repoData={repos}/>) }
      </div>

    );
  }
}



