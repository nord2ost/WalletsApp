import { StyleSheet } from 'react-native'
import {Images, Colors, Fonts} from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    flex: .5,
    marginLeft:25
  },
  rightContainer: {
    flex: .5,
     marginRight:25,
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  text:{
  	
  	fontFamily: Fonts.type.base,
     fontSize: Fonts.size.title,
     color: Colors.lightGray,
  }
})
