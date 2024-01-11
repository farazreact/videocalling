/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';

function App() {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '5b1413dbd9484300bc8e20915e6fdb6f',
    channel: 'test',
    token:
      '007eJxSYJh1eKvQkzBp/Qku89es82rqnG4j93BGj+3P99adqp6uvl8UGEyTDE0MjVOSUixNLEyMDQySki1SjQwsDU1TzdJSkszSNK3mpzYEMjLEBXAxMTIwMrAwMDKA+ExgkhlMskDJktTiEgYGQAAAAP//T9kgqQ==',
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  console.log('videoCall ==>', videoCall);

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
