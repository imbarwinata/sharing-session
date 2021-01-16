import React from 'react'
import PropTypes from 'prop-types'

function PageHome({ history }) {
  const onProduct = () => history.push('/product')
  return (
    <div>
      PageHome
      <button onClick={onProduct}>
        Product Page
      </button>
    </div>
  )
}

PageHome.defaultProps = {
  history: {
    push: () => {},
  },
};

PageHome.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  })
};

export default PageHome
