import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import Restraunt from './Restraunt';


const Home = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);


    return (
        <ScrollView>
            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style = {{marginVertical: 10}}
                />
                <Text 
                    style = {{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold', fontStyle: 'italic'}}
                > 
                    Restaurants near you
                </Text>
                <Restraunt
                    img={'https://picsum.photos/700'}
                    name={'KFC          '}
                    rating={'4.5✰'}
                    style={'Chicken'}
                    cost={'Rs 200 for one'}
                />
                <Restraunt
                    img={'https://picsum.photos/700'}
                    name={'McD        '}
                    rating={'4.6✰'}
                    style={'Burger'}
                    cost={'Rs 150 for one'}
                />
                <Restraunt
                    img={'https://picsum.photos/700'}
                    name={'Dominos'}
                    rating={'4.7✰'}
                    style={'Pizza '}
                    cost={'Rs 250 for one'}
                />
                <Restraunt
                    img={'https://picsum.photos/700'}
                    name={'BBQ        '}
                    rating={'4.8✰'}
                    style={'Buffet'}
                    cost={'Rs 500 for one'}
                />
            </View>
        </ScrollView>
    );
};

export default Home;
