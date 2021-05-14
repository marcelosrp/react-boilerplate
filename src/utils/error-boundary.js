import React, { Component, memo } from 'react'
import PropTypes from 'prop-types'

import WrapError from '../components/Error/wrapError'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    if (error) {
      return { hasError: true }
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Algo deu errado', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <WrapError />
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
}

export default memo(ErrorBoundary)
