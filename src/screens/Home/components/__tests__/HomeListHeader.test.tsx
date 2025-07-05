import React from 'react';
import { render } from '@testing-library/react-native';
import { useSelector } from 'react-redux';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

// Mock redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mock react-native components
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  const mockComponent = (name: string) => {
    return ({ children, testID }: any) => (
      <RN.View testID={testID}>{children}</RN.View>
    );
  };

  return {
    StyleSheet: {
      create: (styles: any) => styles,
      flatten: jest.fn((style) => style),
    },
    View: mockComponent('View'),
    Text: ({ children, testID }: any) => (
      <RN.View testID={testID}>{children}</RN.View>
    ),
    TouchableOpacity: mockComponent('TouchableOpacity'),
    FlatList: ({ data, renderItem, testID, horizontal, keyExtractor }: any) => (
      <RN.View testID={testID}>
        {data?.map((item: any, index: number) => (
          <RN.View key={keyExtractor ? keyExtractor(item) : item.id || index}>
            {renderItem({ item, index })}
          </RN.View>
        ))}
      </RN.View>
    ),
    Platform: {
      select: jest.fn((obj) => obj.default),
    },
  };
});

// Mock text constants
jest.mock('@/constants/text', () => ({
  TEXTS: {
    HOME: {
      SECTIONS: {
        GET_STARTED: 'Get Started',
      },
    },
  },
}));

// Mock styles
jest.mock('../../HomeScreen.styles', () => ({
  sectionContainer: {},
  sectionTitle: {},
  questionsGridContent: {},
}));

// Mock HomePremiumBanner component
jest.mock('../../components/HomePremiumBanner', () => {
  const RN = jest.requireActual('react-native');
  return function HomePremiumBanner() {
    return <RN.View>Premium Banner</RN.View>;
  };
});

// Mock HomeQuestionItem component
jest.mock('../../components/HomeQuestionItem', () => {
  const RN = jest.requireActual('react-native');
  return function HomeQuestionItem({ uri, title }: any) {
    return <RN.View>{`${title} - ${uri}`}</RN.View>;
  };
});

import HomeListHeader from '../HomeListHeader';

describe('HomeListHeader', () => {
  const mockQuestions = [
    { id: 1, title: 'Question 1', image_uri: 'uri1' },
    { id: 2, title: 'Question 2', image_uri: 'uri2' },
  ];

  const mockUseSelector = useSelector as unknown as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSelector.mockReturnValue({ questions: mockQuestions });
  });

  it('renders premium banner', () => {
    const { getByTestId } = render(<HomeListHeader />);
    expect(getByTestId('premium-banner-container')).toBeTruthy();
  });

  it('renders questions section with correct title', () => {
    const { getByTestId } = render(<HomeListHeader />);
    const titleElement = getByTestId('section-title');
    expect(titleElement).toBeTruthy();
    expect(titleElement).toHaveTextContent('Get Started');
  });

  it('renders questions list with correct data', () => {
    const { getByTestId, getAllByTestId } = render(<HomeListHeader />);

    // Check if questions list exists
    expect(getByTestId('questions-list')).toBeTruthy();

    // Check if correct number of question items are rendered
    const questionItems = getAllByTestId('question-item');
    expect(questionItems).toHaveLength(mockQuestions.length);

    // Check if questions have correct content
    mockQuestions.forEach((question, index) => {
      expect(questionItems[index]).toHaveTextContent(`${question.title} - ${question.image_uri}`);
    });
  });
});