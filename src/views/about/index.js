import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getGithubInfo
} from '../../modules/actions/account'

class About extends React.Component {
  render() {
    const props = this.props
    return (
      <div>
        <h1>About</h1>
        <button onClick={props.getGithubInfo} disabled={props.isFetching}>Get Info</button>
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