import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch and handle the error
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>Error: {this.state.error.toString()}</p>
          <p>Info: {this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    // Render children if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;