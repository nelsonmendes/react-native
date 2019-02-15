// Import a  library to help create a component
import React from 'react';
import { Text } from 'react-native';
// create component

const Header = () => {
    const { textStyles } = styles;
    
    return (
    <Text style={textStyles} >Albums!</Text>
    );
};

const styles = {
    textStyle: {
        fontStyle: 20,
        color: 'red'
    }
};

// render to device
export default Header;
