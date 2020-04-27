import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import countryToCoord from '../countryToCoord.json';

const buildStatsMessage = (stats) => {
    let message = `CountryCode: ${stats.CountryCode}\n\nTotal Confirmed : ${stats.TotalConfirmed} \nTotal Deaths : ${stats.TotalDeaths} \nTotal Recovered : ${stats.TotalRecovered}`;
    return message;
}

// Backup Function
const countryCoordinates = (country) => {
    Geocoder.init("____API___KEY____HERE");
    return Geocoder.from(country)
        .then(json => {
            var location = json.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        })
        .catch(error => console.warn(error));
}


export default class WorldMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 42,
            longitude: -71,
            markers: []
        }
    }

    async componentDidMount() {
        var api_url = "https://api.covid19api.com/summary";
        var markers = [];
        await fetch(api_url)
            .then((res) => res.json())
            .then((jsonResponse) => {
                jsonResponse.Countries.forEach((dataSnapshot) => {
                    try {
                        let coordinates = countryToCoord[dataSnapshot.CountryCode.toLowerCase()];
                        console.log(coordinates);
                        markers.push(
                            {
                                title: dataSnapshot.Country,
                                description: buildStatsMessage(dataSnapshot),
                                latlng: {
                                    latitude: coordinates[0],
                                    longitude: coordinates[1]
                                }
                            }
                        );
                    } catch (err) {
                        console.log(err);
                    }
                });
            }).catch((error) => console.log("error occured"));
        this.setState({
            markers: markers
        });
    }




    render() {
        const { latitude, longitude, countryStats, country } = this.state
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 40,
                    longitudeDelta: 0.0421
                }}
            >
                {this.state.markers.map(marker => (
                    <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
