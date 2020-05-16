import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, CheckBox, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create ({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },
    itemText: {
        marginLeft: 15,
    },
    checkbox: {
        justifyContent: "center",
    },
})

export default function TodoItem({ item , pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                {/* <CheckBox style={styles.checkbox}
                /> */}
                <MaterialIcons name='delete' size={18} color="#333" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
