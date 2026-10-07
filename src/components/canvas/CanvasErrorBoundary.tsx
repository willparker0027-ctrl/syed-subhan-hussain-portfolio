import React from "react";

type TProps = {
  children: React.ReactNode;
};

type TState = {
  hasError: boolean;
};

/**
 * Catches WebGL / three.js canvas failures (e.g. "Error creating WebGL
 * context" on low-end mobile GPUs) so a broken 3D canvas degrades to
 * nothing instead of white-screening the entire portfolio.
 */
class CanvasErrorBoundary extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): TState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Fail silently — the 3D decoration is optional.
    console.warn("3D canvas disabled:", error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default CanvasErrorBoundary;
