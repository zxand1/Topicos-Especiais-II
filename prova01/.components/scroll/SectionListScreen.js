import React from "react";
import { SectionList } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function Section() {
    const sections = [
        { title: "Seção 1", data: ["Item 1", "Item 2", "Item 3"] },
        { title: "Seção 2", data: ["Item 4", "Item 5", "Item 6"] },
        { title: "Seção 3", data: ["Item 7", "Item 8", "Item 9"] },
    ]

    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>{section.title}</Text>
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        backgrondColor: "#d9d9d9",
        padding: 10,
        borderRadius: 8
    },
    item: {
        marginBottom: 10,
        padding: 15,
        backgrondColor: "#e0f7fa",
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
    }
});