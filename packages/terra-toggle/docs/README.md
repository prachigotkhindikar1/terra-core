# Terra Toggle

Toggle component that transitions content in and out. For toggle button functionality, see [terra-toggle-button](https://engineering.cerner.com/terra-ui/#/components/terra-toggle-button/toggle-button/toggle-button).

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-toggle`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

```jsx
import React from 'react';
import Toggle from 'terra-toggle/lib/Toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';

class ToggleDefault extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <IconInformation onClick={this.handleOnClick} />
        <Toggle isOpen={this.state.isOpen} isAnimated>
          Hello World
        </Toggle>
      </div>
    );
  }
}


export default ToggleDefault;
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
