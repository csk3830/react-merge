import React, { useRef, useState } from 'react';
import CreateStore from './CreateStore';
import Store from './Store';

const StoreList = () => {
    const nextId = useRef(3);

    const [stores, setStore] = useState([
        {
            id: 1,
            store: '월미당',
            storeItem: '쌀국수'
        },
        {
            id: 2,
            store: '두리네',
            storeItem: '베이글샌드위치'
        }
    ]);

    const [inputs, setInputs] = useState({
        store: '',
        storeItem: ''
    })

    const {store, storeItem} = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onCreate = ()=>{
        //값이 추가되면....
        //나중에 여기서 구현.
        const storeD = {
            id: nextId.current,
            store,
            storeItem
        };
        setStore(stores.concat(storeD));
        setInputs({
            store:'',
            storeItem:''
        })
        nextId.current += 1;
    }

    const onRemove=(id) =>{
        setStore(stores.filter(store => store.id !== id))
    }

    return (
        <div className='storeList'>
            <CreateStore 
                store={store} 
                storeItem={storeItem}
                onChange={onChange}
                onCreate={onCreate}
            />
            {
                stores.map(s=>(
                    <Store store={s} key={s.id} onRemove={onRemove} />
                ))
            }

        </div>
    );
};

export default StoreList;