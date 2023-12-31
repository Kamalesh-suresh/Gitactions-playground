/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MyComponent', () => {
	render(<App />);
	const element = screen.getByText(/Learn React/i);
	expect(element).toBeInTheDocument();
});
