import React from 'react'
import PropTypes from 'prop-types'

function PageNotFound({ history }) {
  const onHome = () => history.push('/')
  return (
    <div>
      PageNotFound
      <button onClick={onHome}>
        Home Page
      </button>
    </div>
  )
}

PageNotFound.defaultProps = {
  history: {
    push: () => {},
  },
};

PageNotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  })
};

export default PageNotFound
