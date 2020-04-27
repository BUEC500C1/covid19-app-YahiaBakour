import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

class WorldStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0
        }
    }

    componentDidMount() {
        var api_url = "https://api.covid19api.com/world/total"
        fetch(api_url)
            .then((res) => res.json())
            .then((jsonResponse) => {
                this.setState({
                    confirmed: jsonResponse.TotalConfirmed,
                    recovered: jsonResponse.TotalDeaths,
                    deaths: jsonResponse.TotalRecovered
                });
            }).catch((error) => console.log(error));

    }

    render() {
        const { confirmed, recovered, deaths } = this.state;
        return (
            <View style={styles.container}>
                <Text>Global Stats</Text>
                <Text>Confirmed Cases: {confirmed}</Text>
                <Text>Recovered Cases: {recovered}</Text>
                <Text>Death Count: {deaths}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default WorldStats; 
