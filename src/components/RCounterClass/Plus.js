import {Component } from "react";
import { connect} from "react-redux";

import {INC,DEC} from './../../redux/actions/index';

class Plus extends Component
{

    render(){
        return(
          <button onClick={()=>this.props.onIncrement()} >+</button>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onIncrement :()=>dispatch({type:INC})
    }
}
export default connect(null,mapDispatchToProps)(Plus); 