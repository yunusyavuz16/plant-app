// Mock the styles before importing anything
jest.mock('../ErrorBoundart.styles', () => ({
  styles: {
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      marginBottom: 12,
    },
    message: {
      fontSize: 14,
      marginBottom: 24,
      textAlign: 'center',
    },
  },
}));

import React from 'react';
import { Text, Button, View } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import ErrorBoundary from '../ErrorBoundary';

// Mock console.error to prevent error messages in test output
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe('ErrorBoundary', () => {
  const ErrorComponent = () => {
    throw new Error('Test error');
  };

  const ChildComponent = () => <Text>Child Component</Text>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when there is no error', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <ChildComponent />
        </ErrorBoundary>
      );
    });

    const tree = component!.toJSON();
    expect(tree).toMatchSnapshot();

    // Verify child component is rendered
    const childText = component!.root.findByType(Text);
    expect(childText.props.children).toBe('Child Component');
  });

  it('renders error UI when an error occurs', () => {
    // Suppress React error boundary warning in test output
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      );
    });

    const tree = component!.toJSON();
    expect(tree).toMatchSnapshot();

    // Verify error UI elements
    const container = component!.root.findByType(View);
    expect(container.props.style).toEqual({
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    });

    const texts = component!.root.findAllByType(Text);
    const errorTexts = texts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'Test error'
    );
    expect(errorTexts).toHaveLength(2);
    expect(errorTexts[0].props.children).toBe('Something went wrong.');
    expect(errorTexts[1].props.children).toBe('Test error');

    const button = component!.root.findByType(Button);
    expect(button.props.title).toBe('Try Again');

    spy.mockRestore();
  });

  it('renders error UI with default message when error has no message', () => {
    const ErrorWithoutMessage = () => {
      throw new Error();
    };

    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <ErrorWithoutMessage />
        </ErrorBoundary>
      );
    });

    const texts = component!.root.findAllByType(Text);
    const errorTexts = texts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'An unexpected error occurred.'
    );
    expect(errorTexts[1].props.children).toBe('An unexpected error occurred.');
  });

  it('resets error state when Try Again button is pressed', () => {
    let shouldThrow = true;
    const ConditionalError = () => {
      if (shouldThrow) {
        throw new Error('Test error');
      }
      return <Text>No Error</Text>;
    };

    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <ConditionalError />
        </ErrorBoundary>
      );
    });

    // Verify error UI is shown
    const texts = component!.root.findAllByType(Text);
    const errorTexts = texts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'Test error'
    );
    expect(errorTexts[0].props.children).toBe('Something went wrong.');

    // Simulate fixing the error condition
    shouldThrow = false;

    // Press the Try Again button
    const button = component!.root.findByType(Button);
    act(() => {
      button.props.onPress();
    });

    // Verify component renders without error
    const text = component!.root.findByType(Text);
    expect(text.props.children).toBe('No Error');
  });

  it('calls componentDidCatch with error information', () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    act(() => {
      renderer.create(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      );
    });

    const calls = spy.mock.calls.filter(call =>
      call[0] === 'Uncaught error:' &&
      call[1] instanceof Error &&
      typeof call[2] === 'string'
    );
    expect(calls).toHaveLength(1);
    expect(calls[0][1].message).toBe('Test error');
    expect(typeof calls[0][2]).toBe('string');

    spy.mockRestore();
  });

  it('handles nested errors correctly', () => {
    const NestedErrorComponent = () => (
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <NestedErrorComponent />
        </ErrorBoundary>
      );
    });

    // Verify only the inner error boundary catches the error
    const texts = component!.root.findAllByType(Text);
    const errorTexts = texts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'Test error'
    );
    expect(errorTexts).toHaveLength(2);
    expect(errorTexts[0].props.children).toBe('Something went wrong.');
    expect(errorTexts[1].props.children).toBe('Test error');
  });

  it('applies correct styles to error UI', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      );
    });

    const container = component!.root.findByType(View);
    expect(container.props.style).toEqual({
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    });

    const texts = component!.root.findAllByType(Text);
    const errorTexts = texts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'Test error'
    );
    expect(errorTexts[0].props.style).toEqual({
      fontSize: 20,
      marginBottom: 12,
    });
    expect(errorTexts[1].props.style).toEqual({
      fontSize: 14,
      marginBottom: 24,
      textAlign: 'center',
    });
  });

  it('maintains error state until explicitly reset', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      );
    });

    // Verify error state
    const texts = component!.root.findAllByType(Text);
    const errorTexts = texts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'Test error'
    );
    expect(errorTexts[0].props.children).toBe('Something went wrong.');

    // Update props - should not clear error state
    act(() => {
      component!.update(
        <ErrorBoundary>
          <ChildComponent />
        </ErrorBoundary>
      );
    });

    // Error UI should still be shown
    const updatedTexts = component!.root.findAllByType(Text);
    const updatedErrorTexts = updatedTexts.filter(text =>
      text.props.children === 'Something went wrong.' ||
      text.props.children === 'Test error'
    );
    expect(updatedErrorTexts[0].props.children).toBe('Something went wrong.');

    // Reset error state
    const button = component!.root.findByType(Button);
    act(() => {
      button.props.onPress();
    });

    // Now child component should be shown
    const childText = component!.root.findByType(Text);
    expect(childText.props.children).toBe('Child Component');
  });
});