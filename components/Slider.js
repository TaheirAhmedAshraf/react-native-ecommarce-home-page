import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SliderBox } from 'react-native-image-slider-box'

export default function Slider({ images }) {
    return (
        <TouchableOpacity style={{ borderRadius: 15, overflow: 'hidden' }}>
            <SliderBox dotColor="#D75E35" inactiveDotColor="#90A4AE" autoPlay={true} images={images ? images : []} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
