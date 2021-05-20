import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

const Restraunt = (props) => {
    return (
        <View>
            <TouchableOpacity>
                <Card 
                style={{ marginVertical: 20, marginHorizontal: 10, borderRadius: 10, backgroundColor: '#fff', elevation: 10 }}
                onPress = {() => Alert.alert('Choose you meal!')}
                >
                    <Card.Cover source={{ uri: props.img }} style={{ height: 170 }} />
                    <Card.Title 
                        title={`${props.name}                                         ${props.rating}`}
                        subtitle={`${props.style}                                                                   ${props.cost}`}
                    />
                </Card>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default Restraunt;