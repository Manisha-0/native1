import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.upperHeader}>
            <View style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Text>hello</Text>
                <Text>hello</Text>
                <Image 
               style={{
                width:200,
                height:200,
                borderRadius:100
               }} 
                source={{uri:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRnwoGiZAZFr-D_TyBgnCX4CYvxuwYsdWa-3dPQERftoRjYSwofm4YDYq6AmvWLkaBKmul5Fp0M5GiqfCo"}} />
            </View>
            <TouchableOpacity style={{
                backgroundColor:"red",
                margin:12,
                padding:10,
                justifyContent:"center"
            }} onPress={console.log("i pressed")}>
                <Text>Hello</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#2596be"
    },
    upperHeader:{
        width:"100%",
        height:300,
        backgroundColor:"#e28743"
    }
})