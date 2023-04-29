import './allUsers.css'
import User from './User'
const AllUsers = (props)=>{

    return (<div className='allUsers'>
            { props.items.map(item=> (<User key={item.id} name={item.name} age = {item.age} collage = {item.collage}/>)) }
        </div>
    )
}

export default AllUsers