import React from 'react'
import PropTypes from 'prop-types'

function PageProduct({ history }) {
  const onHome = () => history.push('/')
  return (
    <div>
      PageProduct
      <button onClick={onHome}>
        Home Page
      </button>
    </div>
  )
}

PageProduct.defaultProps = {
  history: {
    push: () => {},
  },
};

PageProduct.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  })
};

export default PageProduct
