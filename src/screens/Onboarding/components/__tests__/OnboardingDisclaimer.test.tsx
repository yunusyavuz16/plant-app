import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingDisclaimer from '../OnboardingDisclaimer';
import { TEXTS } from '@/constants/text';
import { ReactTestInstance } from 'react-test-renderer';

// Mock styles
jest.mock('../../WelcomeScreen.styles', () => ({
  __esModule: true,
  default: {
    bottomInner: {
      paddingHorizontal: 24,
      marginBottom: 20,
    },
    disclaimer: {
      textAlign: 'center',
      fontSize: 12,
      color: '#666',
    },
    link: {
      color: '#000',
      textDecorationLine: 'underline',
    },
  },
}));

describe('OnboardingDisclaimer', () => {
  it('renders correctly with all text elements', () => {
    const { getByTestId } = render(<OnboardingDisclaimer />);

    // Check if container is rendered
    const container = getByTestId('disclaimer-container');
    expect(container).toBeTruthy();

    // Check if disclaimer text is rendered with all content
    const disclaimerText = getByTestId('disclaimer-text');
    expect(disclaimerText).toBeTruthy();
    expect(disclaimerText.children[0]).toBe(TEXTS.WELCOME.DISCLAIMER);

    // Check if Terms and Privacy texts are rendered
    const linksContainer = getByTestId('disclaimer-links');
    expect(linksContainer).toBeTruthy();
    const linksText = linksContainer.children
      .map(child => (typeof child === 'string' ? child : child.props.children))
      .join('');
    expect(linksText).toContain(TEXTS.WELCOME.TERMS);
    expect(linksText).toContain(TEXTS.WELCOME.PRIVACY);
  });

  it('applies correct styles to elements', () => {
    const { getByTestId } = render(<OnboardingDisclaimer />);

    // Check container styles
    const container = getByTestId('disclaimer-container');
    expect(container.props.style).toEqual({
      paddingHorizontal: 24,
      marginBottom: 20,
    });

    // Check disclaimer text styles
    const disclaimerText = getByTestId('disclaimer-text');
    expect(disclaimerText.props.style).toEqual({
      textAlign: 'center',
      fontSize: 12,
      color: '#666',
    });

    // Check that link elements have the correct style
    const linksContainer = getByTestId('disclaimer-links');
    const linkElements = linksContainer.children
      .filter((child): child is ReactTestInstance =>
        typeof child !== 'string' &&
        child.props?.style?.textDecorationLine === 'underline'
      );
    expect(linkElements).toHaveLength(2); // Terms and Privacy links
    linkElements.forEach(link => {
      expect(link.props.style).toEqual({
        color: '#000',
        textDecorationLine: 'underline',
      });
    });
  });
});