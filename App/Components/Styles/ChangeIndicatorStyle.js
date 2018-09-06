import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  positiveChange:{
  	fontFamily: Fonts.type.base,
  	fontSize: Fonts.size.item,
  	color: Colors.green,
  	textAlign: 'center'
  },
  negativeChange:{
  	fontFamily: Fonts.type.base,
  	fontSize: Fonts.size.item,
  	color: Colors.red,
  	textAlign: 'center'
  },
  changeInBlob:{
  	fontFamily: Fonts.type.base,
  	fontSize: Fonts.size.item,
  	color: Colors.white,
  	textAlign: 'center'
  },
  blobPositive:{
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius: 15,
    backgroundColor:Colors.green,
  },
  blobNegative:{
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius: 15,
    backgroundColor:Colors.red,
  },

})
