import React from 'react';
import { render } from '@testing-library/react';
import { BasicSignalPublisher } from './signal_publisher.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicSignalPublisher />);
  const rendered = getByText('Send your publication message');
  expect(rendered).toBeTruthy();
});
