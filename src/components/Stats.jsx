import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';

const Stats = () => {
  return (
   <>
    { stats.map(({title, description},index)=>{
        return (
            <div className='stats__box' key={index}>
                <h3 className='stats__title'>{title}</h3>
                <p className='stats__description'>{parse(description)}</p>
            </div>
        )
    })}
   </>
  );
}

export default Stats;
