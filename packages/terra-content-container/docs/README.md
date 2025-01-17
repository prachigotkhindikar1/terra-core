# Terra Content Container

The Terra ContentContainer is a structural component for the purpose of arranging content with an optional header and/or footer.

The footer is not responsive to mobile keyboard positioning.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-content-container`
  - `yarn add terra-content-container`

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
import ContentContainer from 'terra-content-container';

<ContentContainer header={<h1 blurb />} footer={<h1 blurb />} fill>
  {container}
</ContentContainer>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
