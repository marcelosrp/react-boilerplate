import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const WrapError = ({ message }) => {
  return (
    <main className="not-found">
      <h1>{message}</h1>
      <Link to="/">página inicial</Link>
    </main>
  )
}

WrapError.defaultProps = {
  message: 'Algo deu errado. Tente novamente mais tarde.'
}

WrapError.propTypes = {
  message: PropTypes.string
}

export default WrapError
