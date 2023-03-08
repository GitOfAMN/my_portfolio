import { Link } from 'react-router-dom'

export default function Nav (props){
    return(
        <div className='nav'>
        <Link to='/'><div>About Me</div></Link>
        <Link to='/work'><div>Current Work</div></Link>
        <Link to='/resume'><div>Resume</div></Link>
        </div>
    )
}