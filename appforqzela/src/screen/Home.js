import React, { Component } from 'react'
import {
	StyleSheet,
	View,
    StatusBar,
    Alert,
    Text
} from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios'
import { Api } from '../common'
export default class Home extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            //posição da cidade de são paulo
            region: {
                latitude: -23.5505199,
                longitude: -46.6333094,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markerSelectedId: '',
            markerSelectedTitle: '',
            markerSelectedDesc: 'Clique em um marker para visualizar',
            coords: null
        }
        this.getListCoords()
    }
    getListCoords = async _ => {
        await axios
            .get(`${Api}/coords`)
            .then(res => this.setState({ coords: res.data }))
    }

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude }}) => {
            }
        )
    }
    getProperties = async _ => {
        let { markerSelectedId } = this.state
        await axios
            .get(`${Api}/Property/${markerSelectedId}`)
            .then(res => {
                this.setState({
                    markerSelectedTitle: res.data.name,
                    markerSelectedDesc: res.data.description
                })
            })
    }

    onMapLayout = () =>
        this.map.fitToElements(true);

    render(){
        const { region, coords, markerSelectedTitle, markerSelectedDesc } = this.state
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <MapView style={{ width: '100%', height: '70%' }}
                    ref={ref => this.map = ref}
                    onLayout={this.onMapLayout}
                    initialRegion={region}
                    showsUserLocation={true}
                    loadingEnabled={true}
                >
                    { 
                        coords 
                        && coords.map(coord => (
                            <Marker
                                key={coord.id}
                                coordinate={coord.geometry.coordinates}
                                onPress={ _ => {
                                    this.setState({ markerSelectedId: coord.id }, this.getProperties)
                                }}
                            />
                            
                        ))
                    }
                </MapView>
                <Text style={styles.title}>{markerSelectedTitle}</Text>
                <Text style={styles.description}>{markerSelectedDesc}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        color: 'black',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10 
    },
    description: {
        color: 'black',
        fontSize: 20,
        marginLeft: 10
    }
});