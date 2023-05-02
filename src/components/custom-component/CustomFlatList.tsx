import {FlatListProps, FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';

const CustomFlatList = observer(({style, ...props}: FlatListProps<any>) => {
  return (
    <FlatList
      style={[{width: '100%'}, style]}
      windowSize={5}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={32}
      onEndReachedThreshold={0.5}
      initialNumToRender={20}
      maxToRenderPerBatch={20}
      updateCellsBatchingPeriod={30}
      {...props}
    />
  );
});

export default CustomFlatList;
