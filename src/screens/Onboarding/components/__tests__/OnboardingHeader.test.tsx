import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingHeader from '../OnboardingHeader';
import { OnboardingScreenKeyType, OnboardingScreens } from '@/constants/screen';

// Mock styles
jest.mock('../../WelcomeScreen.styles', () => ({
  __esModule: true,
  default: {
    header: {
      marginTop: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    titleHighlight: {
      color: '#4CAF50',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginTop: 8,
    },
  },
}));

jest.mock('../../FeaturesScreen.styles', () => ({
  __esModule: true,
  default: {
    header: {
      marginTop: 24,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    titleHighlight: {
      color: '#4CAF50',
    },
    brushImage: {
      width: 100,
      height: 40,
      marginLeft: -20,
    },
  },
}));

jest.mock('../../BenefitsScreen.styles', () => ({
  __esModule: true,
  default: {
    header: {
      marginTop: 24,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    titleHighlight: {
      color: '#4CAF50',
    },
    brushImage: {
      width: 100,
      height: 40,
      marginLeft: -20,
    },
  },
}));

describe('OnboardingHeader', () => {
  describe('Features Screen', () => {
    it('renders features screen header correctly', () => {
      const { getByTestId, toJSON } = render(
        <OnboardingHeader screenName={OnboardingScreens.FEATURES as OnboardingScreenKeyType} />
      );

      // Check if header container is rendered
      const header = getByTestId('features-header');
      expect(header).toBeTruthy();

      // Check if title row is rendered
      const titleRow = getByTestId('features-title-row');
      expect(titleRow).toBeTruthy();

      // Check if brush image is rendered
      const brushImage = getByTestId('features-brush-image');
      expect(brushImage).toBeTruthy();
      expect(brushImage.props.source).toBe(require('../../../../assets/onboarding-1/Brush.png'));

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Benefits Screen', () => {
    it('renders benefits screen header correctly', () => {
      const { getByTestId, toJSON } = render(
        <OnboardingHeader screenName={OnboardingScreens.BENEFITS as OnboardingScreenKeyType} />
      );

      // Check if header container is rendered
      const header = getByTestId('benefits-header');
      expect(header).toBeTruthy();

      // Check if title row is rendered
      const titleRow = getByTestId('benefits-title-row');
      expect(titleRow).toBeTruthy();

      // Check if brush image is rendered
      const brushImage = getByTestId('benefits-brush-image');
      expect(brushImage).toBeTruthy();
      expect(brushImage.props.source).toBe(require('../../../../assets/onboarding-2/Brush.png'));

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Welcome Screen', () => {
    it('renders welcome screen header with highlight at start', () => {
      const props = {
        screenName: OnboardingScreens.WELCOME as OnboardingScreenKeyType,
        title: 'your plants',
        titleHighlight: 'Identify',
        description: 'Take a photo to identify your plants',
        titleHighlightPosition: 'start' as const,
      };

      const { getByTestId, toJSON } = render(<OnboardingHeader {...props} />);

      // Check if header container is rendered
      const header = getByTestId('welcome-header');
      expect(header).toBeTruthy();

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders welcome screen header with highlight at end', () => {
      const props = {
        screenName: OnboardingScreens.WELCOME as OnboardingScreenKeyType,
        title: 'Get',
        titleHighlight: 'started',
        description: 'Take a photo to identify your plants',
        titleHighlightPosition: 'end' as const,
      };

      const { getByTestId, toJSON } = render(<OnboardingHeader {...props} />);

      // Check if header container is rendered
      const header = getByTestId('welcome-header');
      expect(header).toBeTruthy();

      // Snapshot test
      expect(toJSON()).toMatchSnapshot();
    });
  });
});