import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onShow, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{ title }</h1>
      {location.pathname === '/' && (
        <Button color={showAdd ? 'purple' : 'blue'} text={showAdd ? 'Hide' : 'Add'} onClick={onShow} />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
