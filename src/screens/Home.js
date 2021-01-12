import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recent</Text>;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'music', title: 'Music', icon: 'queue-music'},
    {key: 'albums', title: 'Albums', icon: 'message-circle'},
    {key: 'recent', title: 'Recent', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec'
  },
  text: {
    fontSize: 20,
    color: "#29B6F6"
  }
});

export default Home;