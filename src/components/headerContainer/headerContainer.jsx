import React,{Component} from 'react';
import './header.less'
import Rheader from '../header/header.jsx';
class Headercontainer extends Component {
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
      return (
        <div>
          <p onClick={this.handleClick.bind(this)}>
            pppppppppppp
          </p>
          <Rheader></Rheader>
          <p>
            pppppppppppppppp
          </p>
        </div>
      );
    }
}

export default Headercontainer;