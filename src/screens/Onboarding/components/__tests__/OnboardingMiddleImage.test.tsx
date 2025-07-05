import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingMiddleImage from '../OnboardingMiddleImage';
import { OnboardingScreenKeyType, OnboardingScreens } from '@/constants/screen';

// Mock styles
jest.mock('../../WelcomeScreen.styles', () => ({
  __esModule: true,
  default: {
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  },
}));

describe('OnboardingMiddleImage', () => {
  const customImageStyle = {
    width: 200,
    height: 300,
  };

  const customContainerStyle = {
    backgroundColor: '#F5F5F5',
    padding: 16,
  };

  describe('Welcome Screen', () => {
    it('renders welcome screen image correctly', () => {
      const { getByTestId, toJSON } = render(
        <OnboardingMiddleImage screenName={OnboardingScreens.WELCOME as OnboardingScreenKeyType} />
      );

      const imageContainer = getByTestId('onboarding-image-container');
      expect(imageContainer).toBeTruthy();

      const image = getByTestId('onboarding-image');
      expect(image).toBeTruthy();
      expect(image.props.source).toBe(require('../../../../assets/get-started/get-started-middle.png'));

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });

    it('applies custom styles correctly', () => {
      const { getByTestId, toJSON } = render(
        <OnboardingMiddleImage
          screenName={OnboardingScreens.WELCOME as OnboardingScreenKeyType}
          imageStyle={customImageStyle}
          imageContainerStyle={customContainerStyle}
        />
      );

      const imageContainer = getByTestId('onboarding-image-container');
      expect(imageContainer.props.style).toEqual([
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        customContainerStyle,
      ]);

      const image = getByTestId('onboarding-image');
      expect(image.props.style).toEqual([
        {
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        },
        customImageStyle,
      ]);

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Features Screen', () => {
    it('renders features screen image correctly', () => {
      const { getByTestId, toJSON } = render(
        <OnboardingMiddleImage screenName={OnboardingScreens.FEATURES as OnboardingScreenKeyType} />
      );

      const image = getByTestId('onboarding-image');
      expect(image).toBeTruthy();
      expect(image.props.source).toBe(require('../../../../assets/onboarding-1/Content.png'));

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Benefits Screen', () => {
    it('renders benefits screen image correctly', () => {
      const { getByTestId, toJSON } = render(
        <OnboardingMiddleImage screenName={OnboardingScreens.BENEFITS as OnboardingScreenKeyType} />
      );

      const image = getByTestId('onboarding-image');
      expect(image).toBeTruthy();
      expect(image.props.source).toBe(require('../../../../assets/onboarding-2/onboarding-2-middle.png'));

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });
  });
});