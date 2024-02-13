import React from 'react';
import { render } from '@testing-library/react';
import { BasicSignalSubscriber } from './signal_subscriber.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicSignalSubscriber />);
  const rendered = getByText('Subscribed Publication messages');
  expect(rendered).toBeTruthy();
});
