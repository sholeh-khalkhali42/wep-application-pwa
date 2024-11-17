import {Component } from "react";
import { connect} from "react-redux";

import {INC,DEC} from './../../redux/actions/index';

class Minus extends Component
{

    render(){
        return(
          <button onClick={()=>this.props.onDecrement()} >-</button>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onDecrement :()=>dispatch({type:DEC})
    }
}
export default connect(null,mapDispatchToProps)(Minus); 