# Terra Overlay
The Overlay component is a component that creates an semi-transparent overlay screen that blocks interactions with the elements underneath the display. There are two types of overlays: fullscreen and relative to its container.

When creating as an overlay relative to its container, place the overlay component within the overlay wrapper and the element(s) which should be hidden by overlay within the content(children) wrapper of Overlay Container subcomponent.

A Loading Overlay is a specialized Overlay subcomponent that displays an overlay with a spinner icon and loading message.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-overlay`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Implementation Notes:

The Overlay component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Usage

# Overlay
```jsx
import React from 'react';
import Button from 'terra-button';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

class OverlayExample extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleOnRequestESC = this.handleOnRequestESC.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true });
  }

  handleOnRequestESC() {
    this.setState({ show: false });
  }

  addOverlay() {
    return (
      <Overlay isOpen={this.state.show} isRelativeToContainer onRequestClose={this.handleOnRequestESC}>
        <p>Close by clicking the overlay or pressing the ESC key.</p>
      </Overlay>
    );
  }

  render() {
    return (
      <OverlayContainer style={{ height: '100px', width: '100%' }} overlay={this.addOverlay()}>'
        <Button onClick={this.handleTriggerOverlay} text="Trigger Overlay" />
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
```

# LoadingOverlay
```jsx
import React from 'react';
import Button from 'terra-button';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

class LoadingOverlayExample extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  addLoadingOverlay() {
    <LoadingOverlay isOpen={this.state.show} isAnimated />
  }

  render() {
    return (
      <OverlayContainer overlay={this.addLoadingOverlay()}>
        <Button onClick={this.handleTriggerOverlay} text="Trigger Loading Overlay" />
      </OverlayContainer>
    );
  }
}

export default LoadingOverlayExample;
```
