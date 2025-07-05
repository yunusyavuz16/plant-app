import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingPagination from '../OnboardingPagination';

// Mock styles
jest.mock('../../FeaturesScreen.styles', () => ({
  __esModule: true,
  default: {
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 24,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#E0E0E0',
      marginHorizontal: 4,
    },
    dotActive: {
      backgroundColor: '#4CAF50',
      width: 16,
    },
  },
}));

describe('OnboardingPagination', () => {
  it('renders correct number of dots', () => {
    const { getAllByTestId } = render(
      <OnboardingPagination currentIndex={0} totalSteps={3} />
    );

    const dots = getAllByTestId('pagination-dot');
    expect(dots).toHaveLength(3);
  });

  it('applies active style to current dot', () => {
    const { getAllByTestId } = render(
      <OnboardingPagination currentIndex={1} totalSteps={3} />
    );

    const dots = getAllByTestId('pagination-dot');

    // First dot should be inactive
    expect(dots[0].props.style).toEqual([
      {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
      },
      false,
    ]);

    // Second dot should be active
    expect(dots[1].props.style).toEqual([
      {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
      },
      {
        backgroundColor: '#4CAF50',
        width: 16,
      },
    ]);

    // Third dot should be inactive
    expect(dots[2].props.style).toEqual([
      {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
      },
      false,
    ]);
  });

  it('renders pagination container correctly', () => {
    const { getByTestId } = render(
      <OnboardingPagination currentIndex={0} totalSteps={3} />
    );

    const container = getByTestId('pagination-container');
    expect(container.props.style).toEqual({
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 24,
    });
  });

  it('handles edge cases', () => {
    // Test with single dot
    const { getAllByTestId: getDotsForOne } = render(
      <OnboardingPagination currentIndex={0} totalSteps={1} />
    );
    expect(getDotsForOne('pagination-dot')).toHaveLength(1);

    // Test with last dot active
    const { getAllByTestId: getDotsForLast } = render(
      <OnboardingPagination currentIndex={2} totalSteps={3} />
    );
    const lastDots = getDotsForLast('pagination-dot');
    expect(lastDots[2].props.style).toEqual([
      {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
      },
      {
        backgroundColor: '#4CAF50',
        width: 16,
      },
    ]);
  });

  // Snapshot tests
  it('matches snapshot for different states', () => {
    const { toJSON: toJSON1 } = render(
      <OnboardingPagination currentIndex={0} totalSteps={3} />
    );
    expect(toJSON1()).toMatchSnapshot('first dot active');

    const { toJSON: toJSON2 } = render(
      <OnboardingPagination currentIndex={1} totalSteps={3} />
    );
    expect(toJSON2()).toMatchSnapshot('middle dot active');

    const { toJSON: toJSON3 } = render(
      <OnboardingPagination currentIndex={2} totalSteps={3} />
    );
    expect(toJSON3()).toMatchSnapshot('last dot active');
  });
});