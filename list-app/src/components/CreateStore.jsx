import React from 'react';

const CreateStore = ({ store, storeItem, onChange, onCreate }) => {
    return (
        <div className='createStore'>
            <input 
                type="text"
                name='store'
                placeholder='가게명'
                onChange={onChange}
                value={store} 
            />
            <input 
                type="text"
                name='storeItem'
                placeholder='대표 메뉴'
                onChange={onChange}
                value={storeItem} 
            />
            <button onClick={onCreate}>create</button>
        </div>
    );
};

export default CreateStore;