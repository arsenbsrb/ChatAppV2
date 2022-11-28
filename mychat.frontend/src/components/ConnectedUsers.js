const ConnectedUsers = ({ users }) => <div className='user-list'>
    <h6 className="connectedTitle">[Connected Users]</h6>
    {users.map((u, idx) => <h6 key={idx}>{u}</h6>)}
</div>

export default ConnectedUsers;
