import { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  DataTable,
  RadioButton,
  Provider,
  Portal,
  MD3Colors,
  IconButton,
  Paragraph,
  Dialog,
} from "react-native-paper";
import { Input, Text } from "react-native-elements";
import Signature from "react-native-signature-canvas";

const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;

const AssignReturn = () => {
  const [checked, setChecked] = useState([]);
  const [items_list, setItem_list] = useState([
    { name: "item1", qty: 3 },
    { name: "item2", qty: 4 },
  ]);
  const [technician_signature, setTechnicianSign] = useState(null);
  const [retailer_signature, setRetailerSign] = useState(null);
  const [technician_visible, setTechnicianVisible] = useState(false);
  const [retailer_visible, setRetailerVisible] = useState(false);

  const setCheckByRow = (row, order) => {
    let checkedList = [...checked];
    checkedList[row] = order;
    setChecked(checkedList);
  };

  const showTechnicianDialog = () => setTechnicianVisible(true);
  const hideTechnicianDialog = () => setTechnicianVisible(false);
  const showRetailerDialog = () => setRetailerVisible(true);
  const hideRetailerDialog = () => setRetailerVisible(false);

  const handleTechnicianOK = (technician_signature) => {
    console.log(technician_signature);
    setTechnicianSign(technician_signature);
    hideTechnicianDialog();
  };
  const handleTechnicianEmpty = () => {
    console.log("Empty");
  };

  const handleRetailerOK = (retailer_signature) => {
    console.log(retailer_signature);
    setRetailerSign(retailer_signature);
    hideRetailerDialog();
  };
  const handleRetailerEmpty = () => {
    console.log("Empty");
  };

  useEffect(() => {
    setChecked(Array(items_list.length).fill(0));
  }, []);

  return (
    <Provider>
      <View style={styles.body}>
        <View style={styles.header}>
          <Button
            icon="menu"
            mode="text"
            onPress={() => console.log("Pressed")}
            style={styles.headerButton}
          />
          <Text style={styles.headerText}>ASSIGN / RETURN{"\n"}SCREEN</Text>
          <TextInput
            style={styles.searchInput}
            label="Shipment Number"
            mode="outlined"
          />
        </View>
        <ScrollView>
          <View style={styles.layout1}>
            <View style={styles.datePicker}>
              <Input
                placeholder="Entry Date"
                leftIcon={{ type: "font-awesome", name: "calendar" }}
              />
            </View>

            <View style={styles.datePicker}>
              <Input
                placeholder="Pickup Date"
                leftIcon={{ type: "font-awesome", name: "calendar" }}
              />
            </View>
          </View>
          <View style={styles.layout3}>
            <View style={styles.titleText}>
              <Input placeholder="Retailer" leftIcon={{}} />
            </View>
            <View style={styles.actualPickdateText}>
              <Input
                placeholder="Actual Pickup Date"
                leftIcon={{ type: "font-awesome", name: "calendar" }}
              />
            </View>
          </View>
          <View style={styles.layout4}>
            <Input placeholder="Description" />
          </View>
          <View style={styles.layout5}>
            <Text style={styles.requiredText}>ITEMS</Text>
          </View>
          <View style={styles.layout6}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Item</DataTable.Title>
                <DataTable.Title>QTY</DataTable.Title>
                <DataTable.Title style={{ flex: 3 }}>Action</DataTable.Title>
              </DataTable.Header>
              {items_list.map((item, index) => {
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>{item.name}</DataTable.Cell>
                    <DataTable.Cell>{item.qty}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 3 }}>
                      <View flexDirection="row">
                        <RadioButton
                          value="first"
                          onPress={() => setCheckByRow(index, 0)}
                          status={checked[index] == 0 ? "checked" : "unchecked"}
                        />
                        <Text style={{ marginTop: 7 }}>Assign</Text>
                        <RadioButton
                          value="second"
                          onPress={() => setCheckByRow(index, 1)}
                          status={checked[index] == 1 ? "checked" : "unchecked"}
                        />
                        <Text style={{ marginTop: 7 }}>Return</Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
          </View>
          <View style={styles.layout8}>
            <View flexDirection="row" justifyContent="space-between">
              <Text h4>Technician Signature:</Text>
              <IconButton
                icon="draw"
                iconColor={MD3Colors.error50}
                size={20}
                mode="contained"
                onPress={showTechnicianDialog}
              />
            </View>
            <View style={styles.preview}>
              {technician_signature ? (
                <Image
                  resizeMode={"contain"}
                  style={{ width: 335, height: 114 }}
                  source={{ uri: technician_signature }}
                />
              ) : null}
            </View>
            <View flexDirection="row" justifyContent="space-between">
              <Text h4>Retailer Signature:</Text>
              <IconButton
                icon="draw"
                iconColor={MD3Colors.error50}
                size={20}
                mode="contained"
                onPress={showRetailerDialog}
              />
            </View>
            <View style={styles.preview}>
              {retailer_signature ? (
                <Image
                  resizeMode={"contain"}
                  style={{ width: 335, height: 114 }}
                  source={{ uri: retailer_signature }}
                />
              ) : null}
            </View>
            <Portal>
              <Dialog
                visible={technician_visible}
                onDismiss={hideTechnicianDialog}
              >
                <Dialog.Content>
                  <View
                    style={{
                      width: 300,
                      height: 400,
                    }}
                  >
                    <Signature
                      onOK={handleTechnicianOK}
                      onEmpty={handleTechnicianEmpty}
                      descriptionText="Sign"
                      clearText="Clear"
                      confirmText="Save"
                      webStyle={style}
                    />
                  </View>
                </Dialog.Content>
              </Dialog>
            </Portal>
            <Portal>
              <Dialog visible={retailer_visible} onDismiss={hideRetailerDialog}>
                <Dialog.Content>
                  <View
                    style={{
                      width: 300,
                      height: 400,
                    }}
                  >
                    <Signature
                      onOK={handleRetailerOK}
                      onEmpty={handleRetailerEmpty}
                      descriptionText="Sign"
                      clearText="Clear"
                      confirmText="Save"
                      webStyle={style}
                    />
                  </View>
                </Dialog.Content>
              </Dialog>
            </Portal>
          </View>

          <View flexDirection="row" justifyContent="space-between">
            <Button mode="contained" style={styles.layout7Button}>
              SUBMIT
            </Button>
            <Button mode="contained" style={styles.layout7Button}>
              CANCEL
            </Button>
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default AssignReturn;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    height: 90,
    width: "100%",
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
    marginTop: 25,
    marginLeft: 0,
    marginRight: 5,

    color: "black",
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
    position: "absolute",
    bottom: 30,
    right: 30,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  footerText: {
    marginTop: 10,
    marginRight: 10,
  },
  addButton: {
    width: 50,
    borderColor: "black",
  },
  layout1: {
    marginHorizontal: 10,
    height: 70,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  layout2: {
    marginHorizontal: 20,
    padding: 10,
    height: 40,
    backgroundColor: "green",
  },
  statusText: {
    color: "blue",
  },
  layout3: {
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    width: 190,
    height: 10,
  },
  actualPickdateText: {
    width: 190,
  },
  layout4: {
    marginHorizontal: 10,
    marginTop: 0,
  },
  layout5: {
    marginHorizontal: 20,
  },
  layout6: {
    marginHorizontal: 10,
  },
  requiredText: {
    fontSize: 20,
  },
  layout7: {
    position: "absolute",
    right: 0,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  layout7Button: {
    minWidth: 150,
    margin: 5,
  },
  layout8: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
