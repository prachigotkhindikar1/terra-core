import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Item, SplitButton } from 'terra-dropdown-button/lib/DropdownButton';

const GhostSplitButton = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <SplitButton
        primaryOptionLabel="Reply"
        onSelect={() => setMessage('Reply clicked')}
        variant="ghost"
      >
        <Item label="Reply All" onSelect={() => setMessage('Reply All clicked')} />
        <Item label="Forward" onSelect={() => setMessage('Forward clicked')} />
        <Item label="Reply in 10 minutes" onSelect={() => setMessage('Reply in 10 minutes clicked')} />
        <Item label="Selective Reply" onSelect={() => setMessage('Selective Reply clicked')} />
      </SplitButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default GhostSplitButton;
