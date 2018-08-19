import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getGithubInfo
} from '../../modules/actions/account'
import './index.css'

class About extends React.Component {
  state = {
    githubName: ''
  }

  onNameChange = (e) => {
    this.setState({
      githubName: e.target.value
    })
  }

  getInfo = () => {
    this.props.getGithubInfo(this.state.githubName || 'GzhiYi')
  }

  render() {
    const props = this.props
    return (
      <div className="about">
        <h1>About</h1>
        {
          !props.account || 
          <input className="input-name" onChange={this.onNameChange} value={this.state.githubName} placeholder="input your github name."/>
        }
        <button onClick={this.getInfo} disabled={props.isFetching}>Get Info</button>
        {
          !props.account ||
          Object.entries(props.account).map((item, key) => {
            return (
              <div className="item" key={key}>
                <div className="key">{item[0]}</div>
                <div className="value">{item[1] || 'null'}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = ({ account }) => ({
  account: account.response,
  isFetching: account.isFetching,
  error: account.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getGithubInfo
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)