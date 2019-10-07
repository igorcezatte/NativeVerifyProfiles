import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // Se o reactotron não funcionar rodar o comando adb reverse tcp:9090 tcp:9090

  console.tron = tron;

  tron.clear();
}
