import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: "green",
    },
    boxOne: {
        backgroundColor: "violet",
        padding: 10,
    },
    boxTwo: {
        backgroundColor: "gold",
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'orange',
        padding: 10,
    },
    boxFour: {
        backgroundColor: "yellow",
        padding: 10,
    },
});

function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

export default Sandbox
