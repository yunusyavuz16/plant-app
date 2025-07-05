const mockRN = {
  Platform: {
    OS: 'ios',
    select: (obj: any) => obj.ios,
  },
  StyleSheet: {
    create: (styles: any) => styles,
  },
  Linking: {
    openURL: jest.fn(),
  },
  ImageBackground: ({ children }: any) => children,
  FlatList: ({ data, renderItem }: any) => {
    return data.map((item: any) => renderItem({ item }));
  },
  View: ({ children }: any) => children,
  Text: ({ children }: any) => children,
  TouchableOpacity: ({ children }: any) => children,
  TextInput: ({ children }: any) => children,
  Pressable: ({ children }: any) => children,
};

export default mockRN;