import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const ActionBarImage = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image source={require('../../assets/logo.png')} style={{ width: 70, height: 70, marginTop: 20 }} />
            <Text style={styles.headerTitleStyle}>{props.title}</Text>
            <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/user.png')} style={{ width: 30, height: 30, marginTop: 43, marginLeft: 20 }}></Image>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible} >
                <View style={{ backgroundColor: 'white' ,borderRadius: 20}}>
                    <View style={styles.viewstyle}>
                        <Text style = {styles.textstyle}>Vedant</Text>
                        <Text style = {styles.textstyle}>email@xyz.com</Text>
                    </View>
                    <View style={styles.viewstyle}>
                        <Text style = {styles.textstyle}>Your Orders </Text>
                        <Text style = {styles.textstyle}>Address Book </Text>
                    </View>
                    <View style={styles.viewstyle}>
                        <Text style={styles.textstyle}>Logout</Text>
                    </View>
                    <Button title="Close" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    headerTitleStyle: {
        color: '#fff',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        padding: 45,
        fontFamily: "Cochin",
        fontWeight: 'bold',
    },
    viewstyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    textstyle: {
        fontSize: 25,
        marginVertical: 5,
        fontStyle: 'italic',
        fontFamily: 'cochin'
    },
});

export default ActionBarImage;