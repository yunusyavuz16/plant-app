import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeShimmer } from '../HomeShimmer';

// Mock the LinearGradient component
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: () => null,
}));

// Mock ShimmerPlaceholder
jest.mock('react-native-shimmer-placeholder', () => {
  const MockShimmer = () => null;
  return MockShimmer;
});

// Mock SafeAreaView
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: any) => children,
}));

// Mock styles
jest.mock('../HomeShimmer.styles', () => ({
  container: {},
  premiumBanner: {},
  sectionTitle: {},
  row: {},
  questionCard: {},
  grid: {},
  categoryCard: {},
}));

describe('HomeShimmer', () => {
  it('renders without crashing', () => {
    const rendered = render(<HomeShimmer />);
    expect(rendered).toBeTruthy();
  });
});