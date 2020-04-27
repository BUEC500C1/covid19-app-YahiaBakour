import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from 'expo-constants';

// https://github.com/oblador/react-native-collapsible
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';


const buildStatsMessage = (stats) => {
    let message = `CountryCode: ${stats.CountryCode}\n\nTotal Confirmed : ${stats.TotalConfirmed} \nTotal Deaths : ${stats.TotalDeaths} \nTotal Recovered : ${stats.TotalRecovered}`;
    return message;
}

class CountryStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: [],
            countries: []
        }
    }

    async componentDidMount() {
        var api_url = "https://api.covid19api.com/summary";
        var newcountries = [];
        await fetch(api_url)
            .then((res) => res.json())
            .then((jsonResponse) => {
                jsonResponse.Countries.forEach((dataSnapshot) => {
                    newcountries.push(
                        {
                            title: dataSnapshot.Country,
                            content: buildStatsMessage(dataSnapshot)
                        }
                    );
                });
            }).catch((error) => console.log("error occured"));
        this.setState({
            countries: newcountries
        });
    }


    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
                <Text>{section.title}</Text>
            </View>
        );
    };

    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>{`Country Counts\n`}</Text>
                <ScrollView style={styles.scrollView}>
                    <Accordion
                        sections={this.state.countries}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '800',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});

export default CountryStats; 
