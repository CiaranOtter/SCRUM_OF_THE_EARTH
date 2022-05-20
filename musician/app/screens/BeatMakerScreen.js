import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  Animated,
  ScrollView,
  Platform,
  Image,
  FlatList,
  Dimensions,
  SectionList,
  Pressable,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import colors from '../config/colors';

export default class BeatMakerScreen extends Component {
  constructor() {
    super();
    this.state = {
      bars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentBar: 4,
      tempos: [
        'Larghissimo',
        'Grave',
        'Lento',
        'Larghetto',
        'Adagio',
        'Andante',
        'Andantino',
        'Moderato',
        'Allegro',
        'Vivace',
        'Presto',
        'Prestissimo',
      ],
      currentTempo: 'Adagio',
      viewArray: [],
      disabledButton: false,
      animatedValue: new Animated.Value(0),
      // soundGrid: [
      //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      //   21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      //   39, 40, 42, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      //   57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      //   75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      //   93, 94, 95, 96, 97, 98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      //   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      //   31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 41, 43, 44, 45, 46, 47, 48,
      //   49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      // ],
      // soundGrid: [
      //   {
      //     title: '',
      //     data: [
      //       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      //       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      //       37, 38, 39, 40,
      //     ],
      //   },
      //   {
      //     title: '',
      //     data: [
      //       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      //       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      //       37, 38, 39, 40,
      //     ],
      //   },
      //   {
      //     title: '',
      //     data: [
      //       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      //       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      //       37, 38, 39, 40,
      //     ],
      //   },
      //   {
      //     title: '',
      //     data: [
      //       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      //       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      //       37, 38, 39, 40,
      //     ],
      //   },
      // ],
      //numColumns: 10,

      numTracks: 5,
      numActiveTracks: 0,
      numBars: 4,
      numBeatsPerBar: 4,
      gridData: [],
    };

    this.viewArrayIndex = 0;
  }

  populateGridData = (bars, beats, tracks) => {
    let cols = tracks;
    let rows = bars * beats;
    let numBloks = cols * rows;
    console.log(numBloks);
    let sectionSize = beats * tracks;

    for (let indexBar = 1; indexBar < bars + 1; indexBar++) {
      let title = indexBar;
      //console.log(title);
      let data = [];
      for (
        let indexSectionSize = 1;
        indexSectionSize < sectionSize + 1;
        indexSectionSize++
      ) {
        data.push(indexSectionSize);
      }
      //this.printArray(data);
      let sectionArray = [title, data];
      this.state.gridData.push(sectionArray);
      //this.printArray(this.state.gridData);
    }
  };

  //test function to print out array to make sure correct numbers are being outputted
  printArray(array) {
    array.forEach(element => {
      console.log(element);
    });
  }

  //function that gets called when user selects a bar
  barSelector(selectedBar) {
    this.currentBar = selectedBar;
    this.state.numBars = selectedBar;
    //console.log('Bar selector tapped ' + this.currentBar);
    this.populateGridData(
      this.state.numBars,
      this.state.numBeatsPerBar,
      this.state.numTracks,
    );
  }

  //functionthat gets called when user selects a time signature
  tSSelector() {
    console.log('Time Signature selector tapped');
  }

  //function that gets called when user selects tempo
  tempoSelector(selectedTempo) {
    this.currentTempo = selectedTempo;
    console.log('Tempo selector tapped ' + this.currentTempo);
  }

  //function that gets called by plus button and adds sounds to grid
  addMoreSounds = () => {
    this.state.animatedValue.setValue(0);
    let newlyAddedValue = {viewArrayIndex: this.viewArrayIndex};
    this.setState(
      {
        disabledButton: true,
        viewArray: [...this.state.viewArray, newlyAddedValue],
      },
      () => {
        Animated.timing(this.state.animatedValue, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start(() => {
          this.viewArrayIndex = this.viewArrayIndex + 1;
          this.setState({disabledButton: false});
        });
      },
    );
  };

  //function for when grid item is tapped
  gridItemTapped = () => {
    console.log('grid item tapped');
  };

  render() {
    let renderItem = ({item, index}) => {
      if (item.empty == true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
      return (
        // <Pressable style={styles.item} onPress={this.gridItemTapped(item)}>
        //   {/* <Text style={styles.itemText}>{item.key}</Text> */}
        // </Pressable>
        // <Pressable onPress={this.gridItemTapped}>

        // </Pressable>

        <TouchableOpacity onPress={this.gridItemTapped} style={styles.item}>
          <Text style={styles.itemText}>{item.key}</Text>
        </TouchableOpacity>
      );
    };

    const animationValue = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-59, 0],
    });

    let Render_Animated_View = this.state.viewArray.map((item, key) => {
      if (key == this.viewArrayIndex) {
        return (
          <Animated.View
            key={key}
            style={[
              styles.barView,
              {
                opacity: this.state.animatedValue,
                transform: [{translateY: animationValue}],
              },
            ]}>
            {/* <Text style={styles.View_Inside_Text}>
              {' '}
              This Is Bar {item.viewArrayIndex}{' '}
            </Text> */}
            <FlatList
              data={this.state.soundGrid}
              style={styles.gridContainer}
              renderItem={renderItem}
              horizontal={false}
              //scrollEnabled={false}
              numColumns={this.state.numColumns}></FlatList>
            {/* <SectionList
              sections={this.state.soundGrid}
              keyExtractor={(item, index) => item + index}
              renderSectionHeader={''}
              numColumns={this.state.numColumns}
              renderItem={renderItem}></SectionList> */}
          </Animated.View>
        );
      } else {
        return (
          <View key={key} style={styles.barView}>
            {/* <Text style={styles.View_Inside_Text}>
              This Is Bar {item.viewArrayIndex}{' '}
            </Text> */}
            <FlatList
              data={this.state.soundGrid}
              style={styles.gridContainer}
              renderItem={renderItem}
              horizontal={false}
              //vertical={true}
              scrollEnabled={false}
              numColumns={this.state.numColumns}></FlatList>
          </View>
        );
      }
    });

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.adjustmentBar}>
          <TouchableOpacity>
            <SelectDropdown
              data={this.state.bars}
              onSelect={selectedItem => {
                this.barSelector(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem + ' Bars';
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultButtonText={this.state.currentBar + ' Bars'}
              buttonStyle={styles.barDownStyle}
              buttonTextStyle={styles.dropDownText}
              rowTextStyle={styles.dropDownRow}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SelectDropdown
              data={this.state.bars}
              onSelect={() => {}}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem + ' Bars';
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultButtonText={'4/4'}
              buttonStyle={styles.barDownStyle}
              buttonTextStyle={styles.dropDownText}
              rowTextStyle={{fontSize: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SelectDropdown
              data={this.state.tempos}
              onSelect={selectedItem => {
                this.tempoSelector(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultButtonText={this.state.currentTempo}
              buttonStyle={styles.barDownStyle}
              buttonTextStyle={styles.dropDownText}
              rowTextStyle={{fontSize: 15}}
            />
          </TouchableOpacity>
        </View>

        <Button
          style={styles.testButton}
          title={'Test'}
          onPress={() =>
            this.populateGridData(
              this.state.numBars,
              this.state.numBeatsPerBar,
              this.state.numTracks,
            )
          }></Button>

        {/* <View style={styles.MainContainer}>
          <ScrollView>
            <View style={{flex: 1, padding: 2}}>{Render_Animated_View}</View>
          </ScrollView>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.TouchableOpacityStyle}
            disabled={this.state.disabledButton}
            onPress={this.addMoreSounds}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
              }}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  adjustmentBar: {
    flex: 1,
    top: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
    maxHeight: 85,
  },
  barDownStyle: {
    backgroundColor: colors.userInputElement,
    borderRadius: 10,
    width: 110,
    borderWidth: 1,
    borderColor: colors.pressableElement,
  },
  barView: {
    height: 600,
    //height: '100%',
    backgroundColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  dropDownRow: {
    fontSize: 15,
  },
  dropDownText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  gridContainer: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: colors.pressableElement,
    width: '100%',
    height: '100%',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    //height: '100%',
  },

  View_Inside_Text: {
    color: '#fff',
    fontSize: 24,
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  item: {
    backgroundColor: colors.fourStringGrey,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    //height: Dimensions.get('window').width / this.state.columns, // approximate a square
    //height: Dimensions.get('window').width / 3,
    height: 32.5,
    //width: 500,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  testButton: {
    backgroundColor: colors.fourStringGrey,
    width: 50,
    height: 50,
  },
});
