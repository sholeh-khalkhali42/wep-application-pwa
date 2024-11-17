import Plus from './Plus';
import Minus from './minus';

import {useSelector} from 'react-redux';


export default function RCounter(){
      
    const counter=useSelector((state)=>state.counter)
    return (

        <div>
            counter: {counter}
          <Plus />
          <Minus />   
        </div>
    );
 }