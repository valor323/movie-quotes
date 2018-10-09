import React from 'react';

export default props => (
    <div>
        <h1 className="center">{props.title}</h1>
        <ul className="collection">
            {
                props.list.map(name => <li key = {name} className='collection-item'>{name}</li>)
            }
        </ul>
    </div>
);

