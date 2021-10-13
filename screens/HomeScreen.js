import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '../components/Slider';
import Category from '../components/Category';
import Collection from '../components/Collection';
import Products from '../components/Products';

export default function HomeScreen({ navigation }) {
    const [homeData, setHomeData] = useState({})
    const [products, setProducts] = useState({})

    useEffect(() => {
        // Others
        fetch('https://api.anayase.com/home/api.php?home')
            .then(async (res) => setHomeData(await res.json()))

        // Products
        fetch('https://api.anayase.com/products/api.php?featured_products&page=2')
            .then(async (res) => setProducts(await res.json()))
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <View style={styles.appBar}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="menu" size={24} />
                    </TouchableOpacity>
                    <View style={styles.searchField}>
                        <TextInput placeholder='search' style={{ width: "90%" }} />
                        <Ionicons name="search" size={20} />
                    </View>
                </View>
            )
        })
    }, [navigation])

    const images = homeData?.sliders?.map((slider) => slider?.image) || []
    const primary_categories = homeData?.primary_categories || []
    const collections = homeData?.tags || []
    const productsList = products.lists || []

    return (
        <ScrollView style={styles.container} >
            <Slider images={images} />
            <Category categories={primary_categories} />
            <Collection collections={collections} />
            <Products products={productsList} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { marginHorizontal: 10, marginVertical: 10, backgroundColor: "#f4f4f4", },
    appBar: { backgroundColor: "#e8e8e8", padding: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' },
    searchField: { width: '90%', height: 42, backgroundColor: "#ffffff", marginLeft: 10, paddingHorizontal: 15, borderRadius: 100, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }
})
