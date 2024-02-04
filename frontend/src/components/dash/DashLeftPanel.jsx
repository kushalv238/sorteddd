import { faHome, faStickyNote, faVoteYea } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const DashLeftPanel = (props) => {
    return (
        <div className='w-1/5 dash__leftPanel fixed left-0 flex flex-wrap py-52 gap-3'>
            <Link onClick={()=>props.setPathname(0)} to='/dash' className={`w-full ${props.pathname === 0 ? 'dash__pageActive' : ''}`}><FontAwesomeIcon icon={faHome} /> Dashboard</Link>
            <Link onClick={()=>props.setPathname(1)} to='/dash/vote' className={`w-full ${props.pathname === 1 ? 'dash__pageActive' : ''}`}><FontAwesomeIcon icon={faVoteYea} /> Vote</Link>
            <Link onClick={()=>props.setPathname(2)} to='/dash/guidelines' className={`w-full ${props.pathname === 2 ? 'dash__pageActive' : ''}`}><FontAwesomeIcon icon={faStickyNote} /> Voters Guidelines</Link>
        </div>
    )
}

export default DashLeftPanel