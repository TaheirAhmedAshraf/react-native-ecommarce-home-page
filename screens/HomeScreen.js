import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '../components/Slider';
import Category from '../components/Category';
import Collection from '../components/Collection';
import Products from '../components/Products';

export default function HomeScreen({ navigation }) {
    const [homeData, setHomeData] = useState({})
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)


    useLayoutEffect(() => {
        // Others
        fetch('https://api.anayase.com/home/api.php?home')
            .then(async (res) => setHomeData(await res.json()))

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


    useEffect(() => {
        setLoading(true)
        fetch(`https://api.anayase.com/products/api.php?featured_products&page=${page}`)
            .then(async (res) => {
                const response = await res.json()
                setProducts([...products, ...response.lists])
                setLoading(false)
            })
    }, [page])


    const images = homeData?.sliders?.map((slider) => slider?.image) || []
    const primary_categories = homeData?.primary_categories || []
    const collections = homeData?.tags || []
    const productsList = products || []

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };


    return (
        <ScrollView style={styles.container} onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent) && !loading) {
                setLoading(true)
                setPage(page + 1)
                console.log('end')
            }
        }}>
            <Slider images={images} />
            <Category categories={primary_categories} />
            <Collection collections={collections} />
            <Products products={productsList} />
            {loading ? <ActivityIndicator animating color="#D55934" size="large" /> : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { marginHorizontal: 10, marginVertical: 10, backgroundColor: "#f4f4f4", },
    appBar: { backgroundColor: "#e8e8e8", padding: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' },
    searchField: { width: '90%', height: 42, backgroundColor: "#ffffff", marginLeft: 10, paddingHorizontal: 15, borderRadius: 100, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }
})
