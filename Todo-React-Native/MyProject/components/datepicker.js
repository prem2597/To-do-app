import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent:'center',
       marginTop: 50,
       padding:16
    }
})

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {date: Date(). getDate()}
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-12-2019"
                    maxDate="01-01-2021"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
        )
    }
}

