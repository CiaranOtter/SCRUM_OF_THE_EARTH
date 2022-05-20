import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
  Modal,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {SectionGrid} from 'react-native-super-grid';

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
      //viewArray: [],
      //disabledButton: false,
      animatedValue: new Animated.Value(0),
      numTracks: 5,
      numActiveTracks: 0,
      numBars: 4,
      numBeatsPerBar: 4,
      gridData: [
        {
          title: 1,
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
        {
          title: 2,
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
        {
          title: 3,
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
        {
          title: 4,
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
      ],
      tracks: [0, 1, 1, 1, 1], //array for flatlist for tracks 0=+button, 1=unactive track, 2=active track
      plusTrackColor: colors.fourStringToggleBG,
      activeTrackColor: colors.sixStringButtonFill,
      unactiveTrackColor: colors.sixStringToggleBg,
      tsModalVisible: false,
      tsValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      tsNote: 4,
    };

    this.viewArrayIndex = 0;
  }

  openTSSelector = visible => {
    this.setState({tsModalVisible: visible});
  };

  //function to populate the grid that makes the track grid on screen based on bars, beats and number of tracks
  populateGridData = (bars, beats, tracks) => {
    this.state.gridData = []; //empty the grid before repopulating it
    //let cols = tracks;
    //let rows = bars * beats;
    //let numBloks = cols * rows; //the number of blocks in the grid
    //console.log(numBloks);
    let sectionSize = beats * tracks; //the number of blocks in a section (sectioned by bars)

    for (let indexBar = 1; indexBar < bars + 1; indexBar++) {
      //for loop to populate the gridArray with the different sections and the blocks in them
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
      let sectionArray = {title: title, data: data};
      //let array = this.state.gridData;
      //array.push(sectionArray);
      //this.setState(array);
      this.state.gridData.push(sectionArray);
      //this.printArray(this.state.gridData);
    }
    this.setState(this.state.gridData); //updtae the new gridData array
    //this.printArray(this.state.gridData);
  };

  //test function to print out array to make sure correct numbers are being outputted
  printArray(array) {
    array.forEach(element => {
      console.log(element);
    });
  }

  //function that gets called when user selects a bar
  barSelector = selectedBar => {
    this.currentBar = selectedBar;
    this.state.numBars = selectedBar;
    //console.log('Bar selector tapped ' + this.currentBar);
    this.populateGridData(
      this.state.numBars,
      this.state.numBeatsPerBar,
      this.state.numTracks,
    );
  };

  //functionthat gets called when user selects a time signature
  tSSelector = (beats, note) => {
    //console.log('Time Signature selector tapped' + beats + '/' + note);
    this.setState({numBeatsPerBar: beats});
    this.setState({tsNote: note});
    this.populateGridData(this.state.numBars, beats, this.state.numTracks);
    this.openTSSelector(!this.state.tsModalVisible);
  };

  //function that gets called when user selects tempo
  tempoSelector(selectedTempo) {
    this.currentTempo = selectedTempo;
    console.log('Tempo selector tapped ' + this.currentTempo);
  }

  gridItemTapped = (item, index) => {
    console.log(item);
    //console.log(index);
  };

  trackActivityColor = item => {
    let bgColor = colors.white;
    switch (item) {
      case 0:
        bgColor = this.state.plusTrackColor;
        return bgColor;
      case 1:
        bgColor = this.state.unactiveTrackColor;
        return bgColor;
      case 2:
        bgColor = this.state.activeTrackColor;
        return bgColor;

      default:
        bgColor = colors.white;
        break;
    }
    console.log('Error with settting rack header color');
  };

  //function that gets called by plus button and adds sounds to grid
  // addMoreSounds = () => {
  //   this.state.animatedValue.setValue(0);
  //   let newlyAddedValue = {viewArrayIndex: this.viewArrayIndex};
  //   this.setState(
  //     {
  //       disabledButton: true,
  //       viewArray: [...this.state.viewArray, newlyAddedValue],
  //     },
  //     () => {
  //       Animated.timing(this.state.animatedValue, {
  //         toValue: 1,
  //         duration: 400,
  //         useNativeDriver: true,
  //       }).start(() => {
  //         this.viewArrayIndex = this.viewArrayIndex + 1;
  //         this.setState({disabledButton: false});
  //       });
  //     },
  //   );
  // };

  //function for when grid item is tapped
  // gridItemTapped = () => {
  //   console.log('grid item tapped');
  // };

  render() {
    // let renderItem = ({item, index}) => {
    //   if (item.empty == true) {
    //     return <View style={[styles.item, styles.itemInvisible]} />;
    //   }
    //   return (
    //     // <Pressable style={styles.item} onPress={this.gridItemTapped(item)}>
    //     //   {/* <Text style={styles.itemText}>{item.key}</Text> */}
    //     // </Pressable>
    //     // <Pressable onPress={this.gridItemTapped}>

    //     // </Pressable>

    //     <TouchableOpacity onPress={this.gridItemTapped} style={styles.item}>
    //       <Text style={styles.itemText}>{item.key}</Text>
    //     </TouchableOpacity>
    //   );
    // };

    // const animationValue = this.state.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-59, 0],
    // });

    // let Render_Animated_View = this.state.viewArray.map((item, key) => {
    //   if (key == this.viewArrayIndex) {
    //     return (
    //       <Animated.View
    //         key={key}
    //         style={[
    //           styles.barView,
    //           {
    //             opacity: this.state.animatedValue,
    //             transform: [{translateY: animationValue}],
    //           },
    //         ]}>
    //         {/* <Text style={styles.View_Inside_Text}>
    //           {' '}
    //           This Is Bar {item.viewArrayIndex}{' '}
    //         </Text> */}
    //         <FlatList
    //           data={this.state.soundGrid}
    //           style={styles.gridContainer}
    //           renderItem={renderItem}
    //           horizontal={false}
    //           //scrollEnabled={false}
    //           numColumns={this.state.numColumns}></FlatList>
    //         {/* <SectionList
    //           sections={this.state.soundGrid}
    //           keyExtractor={(item, index) => item + index}
    //           renderSectionHeader={''}
    //           numColumns={this.state.numColumns}
    //           renderItem={renderItem}></SectionList> */}
    //       </Animated.View>
    //     );
    //   } else {
    //     return (
    //       <View key={key} style={styles.barView}>
    //         {/* <Text style={styles.View_Inside_Text}>
    //           This Is Bar {item.viewArrayIndex}{' '}
    //         </Text> */}
    //         <FlatList
    //           data={this.state.soundGrid}
    //           style={styles.gridContainer}
    //           renderItem={renderItem}
    //           horizontal={false}
    //           //vertical={true}
    //           scrollEnabled={false}
    //           numColumns={this.state.numColumns}></FlatList>
    //       </View>
    //     );
    //   }
    // });

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
          <TouchableOpacity
            onPress={() => {
              this.openTSSelector(!this.state.tsModalVisible);
            }}>
            <View style={styles.tsSelection}>
              <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                  this.openTSSelector(!this.state.tsModalVisible);
                }}
                visible={this.state.tsModalVisible}>
                <View style={styles.tsContainer}>
                  <SelectDropdown
                    data={this.state.tsValues}
                    onSelect={selectedItem =>
                      this.tSSelector(selectedItem, this.state.tsNote)
                    }
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    defaultButtonText={this.state.numBeatsPerBar}
                    buttonStyle={styles.barDownStyle}
                    buttonTextStyle={styles.dropDownText}
                    rowTextStyle={{fontSize: 15}}
                  />
                  <SelectDropdown
                    data={this.state.tsValues}
                    onSelect={selectedItem =>
                      this.tSSelector(this.state.numBeatsPerBar, selectedItem)
                    }
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    defaultButtonText={this.state.tsNote}
                    buttonStyle={styles.barDownStyle}
                    buttonTextStyle={styles.dropDownText}
                    rowTextStyle={{fontSize: 15}}
                  />
                </View>
              </Modal>
              <Text style={[styles.dropDownText, {fontSize: 18}]}>
                {this.state.numBeatsPerBar}/{this.state.tsNote}
              </Text>
            </View>

            {/* <SelectDropdown
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
            /> */}
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

        <FlatList
          style={styles.soundBar}
          data={this.state.tracks}
          horizontal={true}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.trackButtons,
                {backgroundColor: this.trackActivityColor(item)},
              ]}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />

        <SectionGrid
          itemDimension={30}
          sections={this.state.gridData}
          style={styles.gridView}
          maxItemsPerRow={this.state.numTracks}
          renderItem={({item, section, index}) => (
            <TouchableOpacity
              onPress={() => this.gridItemTapped(item, index)}
              style={[
                styles.itemContainer,
                {backgroundColor: colors.sixStringAutoBG},
              ]}></TouchableOpacity>
          )}
          renderSectionHeader={({section}) => (
            // <Text style={styles.sectionHeader}></Text>nasheandsizweseatingonatreekissing
            <View style={styles.sectionHeader}></View>
          )}
        />
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
    maxHeight: 75,
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
  gridView: {
    ///marginTop: 20,
    flex: 1,
    backgroundColor: colors.fourStringGrey,
    //height: 200,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 2.5,
    height: 50,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 5,
  },
  soundBar: {
    //height: 70,
    maxHeight: 70,
    flex: 1,
    backgroundColor: colors.userInputElement,
  },
  trackButtons: {
    width: 65,
    //backgroundColor: colors.sixStringAutoBG,
    padding: 15,
    height: 50,
    justifyContent: 'center',
    margin: 5,
    top: 5,
    left: 5,
    borderRadius: 5,
  },
  tsContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 1,
    maxHeight: 100,
  },
  tsSelection: {
    backgroundColor: colors.userInputElement,
    borderRadius: 10,
    width: 110,
    height: 50,
    borderWidth: 1,
    borderColor: colors.pressableElement,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
