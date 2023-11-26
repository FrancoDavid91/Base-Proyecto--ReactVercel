import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('should render component', () => {
    const component = render(<App/>);
    expect(component).toBeTruthy();
  });
});