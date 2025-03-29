import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";

export default function List() {
    const data = Array.from({ length: 80}, (_, i) => ({ id: i, name: `Item ${i + 1}`}));

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 10, 
        padding: 20, 
        backgrondColor: "#e0f7fa",
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    }
});