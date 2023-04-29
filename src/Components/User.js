import './user.css'

const User = (props)=> {
    return (
        <div className='user'>
            {`${props.name} (${props.age} years old) from ${props.collage} collage`}
        </div>
    )
}

export default User