import React from 'react';
import builder from './builder.svg';
import Calculator from './Calculator.svg';
import karma from './karma.svg';
import supervisor from './supervisor.svg';
const Content = (props)=>{
return(
<div>

  <div classNmae="conte">
    <p className="first">{props.headText}</p>
    <p className="sec">{props.bodyText}</p>
    <img className="img-cont" src={props.imgUrl}/>
  </div>

</div>

);

}

export default Content;
