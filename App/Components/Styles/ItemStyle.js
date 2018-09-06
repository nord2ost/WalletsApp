import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal:10,
    paddingVertical: 20,
    paddingLeft:15,
    paddingRight:20,
    borderRadius:15
  },
  leftContainer: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: .6,
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  inCurrency:{
  	fontFamily: Fonts.type.base,
  	fontSize: Fonts.size.item,
  	color: Colors.darkGray,
  	textAlign: 'left'
  },
  rate:{
  	fontFamily: Fonts.type.base,
  	fontSize: Fonts.size.item,
  	color: Colors.lightGray,
  	textAlign: 'left'
  },
  inUSD:{
  	fontFamily: Fonts.type.base,
  	fontSize: Fonts.size.item,
  	color: Colors.darkGray,
  	textAlign: 'right'
  },
  
  rightContainer: {
    flex: .2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }

})
