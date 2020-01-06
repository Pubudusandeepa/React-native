import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {
    const {navigate} = this.props.navigation;
    
    return (
        <div>
            <Text>sfsfsdf sdfsdfsf sdfsf sf</Text>
            <Button onPress={() => navigate('Components')}>sfsdfsdfsd </Button>
        </div>
    )
};

const style = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;