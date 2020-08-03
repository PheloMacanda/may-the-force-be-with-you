import * as React from 'react';
import {View, Text} from 'react-native';
import {getPlanets} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {planetsSelector} from './redux/selectors';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const planets = useSelector(planetsSelector);
  React.useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);
  return (
    <View>
      <Text>Welcome home</Text>
    </View>
  );
};

export default HomeScreen;
