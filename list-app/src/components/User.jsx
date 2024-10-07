import React from 'react';
import Button from 'react-bootstrap/Button';

const User = ({ user, onRemove, onToggle }) => {
    // const user = props.user;
    return (
        <div className='user'>
            <h3>
                <span style={{
                    cursor:'pointer',
                    color: user.active ?'green' : 'black'
                }} 
                onClick={()=> onToggle(user.id)} 
                >
                    {user.username}</span>
                <span>({user.email})</span>
                {/* function으로 매개변수를 전달할 경우 */}
                <Button 
                    variant="success" 
                    onClick={()=>onRemove(user.id)}>
                    X
                </Button>
            </h3>
        </div>
    );
};

export default User;