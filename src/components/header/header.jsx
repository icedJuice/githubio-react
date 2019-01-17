import React,{Component} from 'react';
import './header.less';
class Rheader extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        liked: false,
        flag: false
      };
    }
  
    handleClick(e) {
      this.setState({ liked: !this.state.liked });
    }
    reFlag() {
      this.setState({
        flag: !this.state.flag
      })
    }
    render() {
      const text = this.state.liked ? 'like' : 'haven\'t liked';
      const flag = this.state.flag
      return (
        <div>
          <p onClick={this.handleClick.bind(this)}>
            You {text} this. Click to toggle.
          </p>
          <div className="flag" onClick={this.reFlag.bind(this)}>
            {flag}
          </div>
        </div>
      );
    }
}

export default Rheader;