import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
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
    };
  }

  barSelector(selectedBar) {
    this.currentBar = selectedBar;
    console.log('Bar selector tapped ' + this.currentBar);
  }

  tSSelector() {
    console.log('Time Signature selector tapped');
  }

  tempoSelector(selectedTempo) {
    this.currentTempo = selectedTempo;
    console.log('Tempo selector tapped ' + this.currentTempo);
  }

  render() {
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
    top: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  barDownStyle: {
    backgroundColor: colors.userInputElement,
    borderRadius: 10,
    width: 110,
    borderWidth: 1,
    borderColor: colors.pressableElement,
  },
  dropDownRow: {
    fontSize: 15,
  },
  dropDownText: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
