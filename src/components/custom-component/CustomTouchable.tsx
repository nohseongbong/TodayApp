import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {observer} from 'mobx-react-lite';

const CustomTouchable = observer(
  ({style, children, ...props}: TouchableOpacityProps) => {
    return (
      <TouchableOpacity style={[style]} activeOpacity={0.3} {...props}>
        {children}
      </TouchableOpacity>
    );
  },
);

export default CustomTouchable;
