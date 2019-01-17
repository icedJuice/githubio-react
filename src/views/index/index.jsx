import React,{Component} from 'react';
import './index.less'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }
    render() {
        return (
            <div className="tag-container">
                <div className="line">
                    
                </div>
            </div>
        );
    }
    handleClick(e) {
        this.setState({ liked: !this.state.liked });
    }
    reFlag() {
        this.setState({
            flag: !this.state.flag
        })
    }
    
}

export default index;