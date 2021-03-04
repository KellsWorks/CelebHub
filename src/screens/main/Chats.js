/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {TouchableHighlight, ScrollView, Image, Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, SIZES, PADDINGS, MARGINS} from '../../res/Themes';

export class Chats extends Component {

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.heading}>Messages</Text>
          <Icon name="create-outline" size={SIZES.h9} color={COLORS.primaryColor}/>
        </View>

        <View style={styles.search}>
          <View style={styles.searchWrapper}>
          <View><Icon name="search-outline" size={SIZES.h9} color={COLORS.accent}/></View>
          <View><Text style={styles.searchText}>Search</Text></View>
          </View>
        </View>

        <View><Text style={styles.activityText}>Spotlight</Text></View>
        <View style={{ flexDirection: 'row' }}><View>

        <TouchableHighlight style={{ marginLeft: MARGINS.ml10 }}>

            <Image source={{ uri:'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png' }} style={styles.activityImage} />

        </TouchableHighlight>

        <Text style={{ marginLeft: 20, fontSize: 16, fontFamily: 'poppins_medium', color: '#a2a4a8'  }}>Saint</Text>
        </View>

        <View>
        <TouchableHighlight
           style={{ marginLeft: MARGINS.ml10 }}
        >
            <Image source={{ uri:'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png' }} style={styles.activityImage} />
        </TouchableHighlight>
        <Text style={{ marginLeft: 20, fontSize: 16, fontFamily: 'poppins_medium', color: '#a2a4a8'  }}>Martse</Text>
        </View>
        <View>
        <TouchableHighlight
           style={{ marginLeft: MARGINS.ml10 }}
        >
            <Image source={{ uri:'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png' }} style={styles.activityImage} />
        </TouchableHighlight>
        <Text style={styles.groupName}>Njuchi</Text>
        </View>
        <View>
        <TouchableHighlight
           style={{ marginLeft: MARGINS.ml10 }}
        >
            <Image source={{ uri:'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png' }} style={styles.activityImage} />
        </TouchableHighlight>
        <Text style={{ marginLeft: 20, fontSize: 16, fontFamily: 'poppins_medium', color: '#a2a4a8'  }}>Wikise</Text>
        </View>
        </View>

        <View><Text style={{ marginLeft: 20, marginBottom: 0, fontSize: 17, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>Messages</Text></View>

        <ScrollView>
        <View>
        <View style={{ margin: MARGINS.ml10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
           style={{ marginLeft: 0 }}
        >
            <Image source={{ uri:'https://www.malawi-music.com/timthumb.php?src=http://www.malawi-music.com/images/artists/eli%20njuchi.JPG' }} style={styles.image} />
        </TouchableHighlight>
        <View><Text style={styles.groupName}>Njuchi musik</Text>
        <Text style={{margin: MARGINS.m10, fontSize: 14, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>Njuchi: Okay got you guys</Text>
        </View>

        </View>
        <View style={{alignContent: 'center', alignSelf: 'center' }}>
        <View><Text style={{ backgroundColor: '#00bc48', height: 25, paddingLeft: 8, paddingTop: 3, width: 25, alignSelf: 'center', alignContent: 'center', borderRadius: 25, color: '#FFF' }}>4</Text></View>
        </View>
        </View>

        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
           <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight style={{ marginLeft: 0 }}>
                <Image source={{ uri:'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/29/07/ea/2907eabe-f891-5743-f6bc-590d0825c96c/pr_source.png/800x800bb.jpeg' }} style={styles.image} />
            </TouchableHighlight>
            <View><Text style={styles.groupName}>Onesmus</Text>
              <Text style={{margin: 10, fontSize: 14, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>Gang-K: Eyo boy!</Text>
          </View>
        </View>
        <View style={{alignContent: 'center', alignSelf: 'center' }}>
           <View><Text style={{ backgroundColor: '#00bc48', height: 25, paddingLeft: 8, paddingTop: 3, width: 25, alignSelf: 'center', alignContent: 'center', borderRadius: 25, color: '#FFF' }}>2</Text></View>
           </View>
        </View>

        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight style={{ marginLeft: 0 }}>
                <Image source={{ uri:'http://www.malawi-music.com/images/artists/saint.PNG' }} style={styles.image} />
            </TouchableHighlight>
            <View><Text style={styles.groupName}>Saint</Text>
             <Text style={{margin: 10, fontSize: 14, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>+265 99 000 00 00: Hello fam</Text>
          </View>
        </View>
        <View style={{alignContent: 'center', alignSelf: 'center' }}>
            <View><Text style={{ backgroundColor: '#00bc48', height: 25, paddingLeft: 8, paddingTop: 3, width: 25, alignSelf: 'center', alignContent: 'center', borderRadius: 25, color: '#FFF' }}>1</Text></View>
            </View>
        </View>

        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
           <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight style={{ marginLeft: 0 }}>
                <Image source={{ uri:'https://i0.wp.com/malawi24.com/wp-content/uploads/2020/06/Martse-musician.jpg?fit=608%2C472&ssl=1' }} style={styles.image} />
            </TouchableHighlight>
            <View><Text style={styles.groupName}>Martse</Text>
             <Text style={{margin: 10, fontSize: 14, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>Ella: Next surtday gonna be lit</Text>
            </View>
          </View>
        <View style={{alignContent: 'center', alignSelf: 'center' }}>
           <View><Text style={{ backgroundColor: '#00bc48', height: 25, paddingLeft: 8, paddingTop: 3, width: 25, alignSelf: 'center', alignContent: 'center', borderRadius: 25, color: '#FFF' }}>9</Text></View>
           </View>
        </View>

        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight style={{ marginLeft: 0 }}>
            <Image source={{ uri:'data:image/jpeg;base64,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' }} style={styles.image} />
        </TouchableHighlight>
        <View><Text style={{ marginLeft: 10,fontSize: 17, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>Guntolah</Text>
        <Text style={{margin: 10, fontSize: 14, fontFamily: 'poppins_medium', color: '#a2a4a8' }}>Hello fam :) will be dropping..</Text>
        </View>
        </View>
        <View style={{alignContent: 'center', alignSelf: 'center' }}>
        <View><Text style={{ backgroundColor: '#00bc48', height: 25, paddingLeft: 8, paddingTop: 3, width: 25, alignSelf: 'center', alignContent: 'center', borderRadius: 25, color: '#FFF' }}>3</Text></View>
        </View>
        </View>

        </View>
        </ScrollView>

        </View>
    );
  }
}

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    paddingLeft: MARGINS.ml20,
    paddingRight: MARGINS.mr20,
    backgroundColor: MARGINS.white,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: {height: 5},
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    flexDirection: 'row',
  },
  heading: {
    color: COLORS.accent,
    fontFamily: FONTS.medium,
    fontSize: SIZES.h10,
  },
  text: {
    fontSize: 30,
    color: COLORS.primaryColor,
    fontFamily: FONTS.normal,
    margin: MARGINS.ma10,
    flex: 1,
  },
  item: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: MARGINS.mt10,
    marginLeft: MARGINS.ml10,
    marginRight: MARGINS.mr10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  search :{
    backgroundColor: COLORS.secondarySurface,
    height: 50,
    margin: MARGINS.m10,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: PADDINGS.pa10,
    fontFamily: FONTS.normal,
  },
  searchText: {
    fontFamily: FONTS.normal,
    alignSelf: 'center',
    color: COLORS.accent,
    marginTop: MARGINS.mt3,
    marginLeft: MARGINS.ml10,
  },
  activityText: {
    marginLeft: 20,
    marginBottom: 0,
    fontSize: 17,
    fontFamily: FONTS.medium,
    color: COLORS.accent,
  },
  groupName: {
    marginLeft: MARGINS.ml20,
    fontSize: SIZES.h3,
    fontFamily: FONTS.medium,
    color: COLORS.accent,
  },
  searchWrapper: {
    alignContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderStartWidth: 3,
    borderColor: COLORS.primaryColor,
  },
  activityImage: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: COLORS.primaryColor,
  },
  name: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.normal,
    marginLeft: MARGINS.ml10,
  },
  message: {
    color: 'gray',
    fontSize: SIZES.h1,
    marginTop: 3,
    fontFamily: FONTS.normal,
    marginLeft: MARGINS.ml10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 75,
  },
  chatContainer: {
    padding: PADDINGS.pa10,
    backgroundColor: COLORS.white,
  },
});
