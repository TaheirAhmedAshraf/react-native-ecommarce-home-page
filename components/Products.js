import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Products({ products }) {
    const rating = 5;
    return (
        <View>
            <Text style={{ fontSize: 16, fontWeight: "800", color: '#222222', marginVertical: 5 }}>FEATURED PRODUCTS</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {products.map((product) => (
                    <TouchableOpacity key={product.productID} style={{ width: Dimensions.get('window').width / 2.2, height: 'auto', borderRadius: 10, overflow: 'hidden', backgroundColor: "#e8e8e8", flexDirection: 'column', justifyContent: 'space-between', marginVertical: 8 }}>
                        <Image style={{ flex: 1, aspectRatio: 1, resizeMode: 'contain' }} source={{ uri: product.product_image }} />
                        <View style={{ padding: 13 }}>
                            <Text style={{ fontSize: 17, fontWeight: '600', color: '#222222', }}>{product.product_title}</Text>
                            <Text style={{ color: "#222222", fontSize: 16, fontWeight: '500' }} >TK {product.selling_price}</Text>
                            <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="star" size={15} color={product.product_rating >= 1 ? "#D55934" : null} style={{ marginHorizontal: 1 }} />
                                    <Ionicons name="star" size={15} color={product.product_rating >= 2 ? "#D55934" : null} style={{ marginHorizontal: 1 }} />
                                    <Ionicons name="star" size={15} color={product.product_rating >= 3 ? "#D55934" : null} style={{ marginHorizontal: 1 }} />
                                    <Ionicons name="star" size={15} color={product.product_rating >= 4 ? "#D55934" : null} style={{ marginHorizontal: 1 }} />
                                    <Ionicons name="star" size={15} color={product.product_rating >= 5 ? "#D55934" : null} style={{ marginHorizontal: 1 }} />
                                </View>
                                <View>
                                    <Ionicons name="heart" size={20} color={product.wish_list_status ? "#D55934" : null} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
