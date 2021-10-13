import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function Collection({ collections }) {
    return (
        <View>
            <Text style={{ fontSize: 16, fontWeight: "800", color: '#222222', marginVertical: 5 }}>COLLECTIONS</Text>
            <ScrollView horizontal={true}>
                {collections.map((collection) => (
                    <TouchableOpacity key={collection.id}>
                        <Image style={{ width: Dimensions.get('screen').width / 3, height: Dimensions.get('screen').width / 3, borderRadius: 10, marginHorizontal: 3, marginVertical: 8 }} source={{ uri: collection.tag_feature_image }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
