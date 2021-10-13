import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Category({ categories }) {
    return (
        <View style={styles.categoryWrapper}>
            {categories.map((category) => (
                <TouchableOpacity key={category.categoryID} style={styles.category}>
                    <Image
                        style={{ width: Dimensions.get('screen').width / 3.65, height: Dimensions.get('screen').width / 3.65, borderRadius: 15 }}
                        source={{ uri: category.category_image }} />
                    <Text style={{ textAlign: 'center', color: '#222222', fontWeight: '800', paddingTop: 3 }}>{category.category}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    categoryWrapper: { flexWrap: "wrap", flexDirection: 'row', },
    category: { flexDirection: "row", marginVertical: 15, flexDirection: "column", margin: 8, justifyContent: 'space-between' },
})
