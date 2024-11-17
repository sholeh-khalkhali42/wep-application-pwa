import {DEC} from '../../redux/actions/index';

import {useSelector , useDispatch} from 'react-redux';
export default function Minus(){
     
    const dispatch= useDispatch();
    return  <button onClick={()=>{dispatch({type:DEC}) }}>-</button>
}