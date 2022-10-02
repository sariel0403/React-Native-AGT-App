import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, DataTable, SegmentedButtons, Divider, RadioButton } from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text } from 'react-native-elements';

const Return = () =>{

    const [date, setDate] = useState('');
    const [entryDate, setEntryDate] = useState('');

    const [pickupDate, setPickupDate] = useState('');
    const [checked, setChecked] = useState('first');
    const [value, setValue] = useState('first');

    return(
        <View style = {styles.body}>
            <View style = {styles.header}>
                <Button icon="menu" mode="text" onPress={() => console.log('Pressed')} style = {styles.headerButton}/>
                <Text style = {styles.headerText}>RETURN</Text>
                <TextInput
                    style={styles.searchInput}
                    label="Return Number"
                    mode="outlined"
                />
            </View>
            <View style={styles.layout1}>
                <View style={styles.datePicker}>
                    <Input
                        placeholder="Entry Date"
                        leftIcon={{ type: 'font-awesome', name: 'calendar'}}
                    />
                </View>
            </View>
            <View style={styles.layout3}>
                <View style={styles.titleText}>
                    <Input
                        placeholder="I CAN'T SEE EXACTLY"
                    />
                </View>
            </View>
            <View style={styles.layout4}>
                <View style={styles.datePicker}>
                    <Input
                        placeholder="REQUISTION NUMBER"
                    />
                </View>
                <View style={styles.datePicker}>
                    <Input
                        placeholder="SHIPMENT NUMBER"
                    />
                </View>
            </View>
            <View style={styles.layout5}>
                <Text style={styles.requiredText}>ITEMS</Text>
            </View>
            <View style={styles.layout6}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Item</DataTable.Title>
                        <DataTable.Title numeric>QTY</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>Item1</DataTable.Cell>
                        <DataTable.Cell numeric>14</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Item2</DataTable.Cell>
                        <DataTable.Cell numeric>15</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <View style={styles.layout8}>
                <Text h4>Technician Signature:</Text>
                <Text h4>Warehouse Signature:</Text>
            </View>
            <View style={styles.layout7}>
                <Button
                    mode="contained"
                    style={styles.layout7Button}
                >
                    SUBMIT & EMAIL
                </Button>
                <Button
                    mode="contained"
                    style={styles.layout7Button}
                >
                    CANCEL
                </Button>
            </View>
        </View>
    );
}

export default Return;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        height: 90,
        width: '100%',
        flexDirection: "row",
    },
    headerButton: {
        height: 40,
        width: 30,
        minWidth: 30,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 0,
    },
    headerText: {
        marginTop: 35,
        marginLeft: 0,
        marginRight: 90,
        
        color: 'black',
        fontSize: 20,
    },
    searchInput: {
        margin: 15,
        marginLeft: 5,
        width: 150,
        fontSize: 10,
    },
    datePicker: {
        width: 180,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    footerText: {
        marginTop: 10,
        marginRight: 10,
    },
    addButton: {
        // minWidth: 55,
        width: 50,
        borderColor: 'black',
    },
    layout1: {
        marginHorizontal: 10,
        height: 70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
    },
    layout2:{
        marginHorizontal: 20,
        padding: 10,
        height: 40,
        backgroundColor: 'green'
    },
    statusText:{
        color: "blue"
    },
    layout3:{
        marginHorizontal: 10,
        // marginTop: 20,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText:{
        width: 190,
        height: 10,
    },
    actualPickdateText: {
        width: 190,
    },
    layout4:{
        marginHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row'
    },
    layout5:{
        marginHorizontal: 20,
    },
    layout6:{
        marginHorizontal: 10,
    },
    requiredText:{
        fontSize: 20,
    },
    layout7: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    layout7Button:{
        minWidth: 120,
        // width: 100,
        margin: 5,
    },
    layout8:{
        marginHorizontal: 20,
        marginVertical: 10,
    },
})