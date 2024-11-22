import React from 'react';

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Ooops. That is not good.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
