import PropTypes from 'prop-types'
import Button from '../components/Button'

const Header = ({ title, onShow, showAdd }) => {
  return (
    <header className="header">
      <h1>{ title }</h1>
      <Button color={showAdd ? 'purple' : 'blue'} text={showAdd ? 'Hide' : 'Add'} onClick={onShow} />
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
