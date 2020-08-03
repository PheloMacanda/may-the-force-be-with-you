import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {H1, Normal} from '../../styles/text';
import {useDispatch, useSelector} from 'react-redux';
import {appVersionSelector} from './redux/selectors';
import {enterClicked} from './redux/actions';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  // fetch app version
  const navigation = useNavigation();
  const appVersion = useSelector(appVersionSelector);

  const onEnterButtonClicked = () => navigation.navigate('Home');

  return (
    <View
      flexDirection="column"
      justifyContent="space-around"
      height="100%"
      width="100%"
      alignItems="center">
      <Text style={H1} margin={'100'}>
        Are you Ready?
      </Text>
      <Button
        title="ENTER"
        accessibilityLabel="Enter"
        testID="splash-button-enter"
        padding="100"
        onPress={onEnterButtonClicked}
      />
      <Text style={Normal}>Version {appVersion}</Text>
    </View>
  );
};

export default SplashScreen;
