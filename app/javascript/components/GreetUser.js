import React from "react"

class GreetUser extends React.Component {
  render () {
    console.log(this.props.giphy)
    return (
      <div>
        <h1 className="has-text-centered is-size-1 has-text-link"> Hello {this.props.name} </h1>
        <h2 className="is-pulled-left is-size-3 has-text-warning"> Enjoy a free Gif: </h2>
        <img src={this.props.giphy} />
        <div className="button is-outlined is-link is-fullwidth is-large" onClick={console.log("click")}>Get another one!</div>
      </div>
    );
  }
}

export default GreetUser
