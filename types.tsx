export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Calls: undefined;
  Chats: undefined;
  Spotlights: undefined;
  Profile: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
}

export type Message = {
  id: String,
  content: string,
  createdAt: number,
}

export type ChatRoom = {
  id: String;
  user: [User];
  lastMessage: Message;
}
