import React from 'react';

const Store = ({ store, onRemove }) => {
    // const store = props.store;
    return (
        <div className='store'>
            <h3>
                {store.store}({store.storeItem})
                <button onClick={()=>onRemove(store.id)}>X</button>
            </h3>
        </div>
    );
};

export default Store;