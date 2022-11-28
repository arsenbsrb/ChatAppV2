import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();
    console.log("breakpoint in Lobby");
    return <Form className='lobby'
        onSubmit={e => {
            e.preventDefault();
            joinRoom(user, room);
        }}>

        <Form.Group>
            <Form.Control className="lobbyInput" placeholder="name" onChange={e => setUser(e.target.value)} />
            <Form.Control className="lobbyInput" placeholder="room" onChange={e => setRoom(e.target.value)} />
        </Form.Group>
        <Button className="sweetyButton" type="submit" disabled={!user || !room}>Join</Button>
    </Form>
}

export default Lobby;
