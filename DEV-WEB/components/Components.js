import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Component = (props) => {
    return (
        <View>
            <Text>Olá {props.nome}!</Text>
        </View>
    );
}; export default Component;

const styles = StyleSheet.create ({

});
