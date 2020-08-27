import React from 'react';

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
       this.state = { 
         hasError: false 
        };
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="error-view">
                <h1>Something went wrong...</h1>
                <p>Try a reload</p>
                <button onClick={window.reload()} className="search-btn">Reload</button>
            </div>
        )
      }
      return this.props.children
    }
  }
  export default ErrorBoundary;
  