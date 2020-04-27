# Covid-19 App by Yahia Bakour

The projects main goals are as follows:
- To retrieve global covid 19 data (client side)
- To show latest covid 19 global stats
- To show latest covid 19 individual country stats
- To layer country stats on top of a map

### Architecture

The entire project is a client side project where the user's app will fetch the data directly from the api and display it. If this were a real project, I would implement a backend noSQL database which refreshes the data periodically and serves new data to the subscribers (clients).


### Installing


```
git clone git@github.com:BUEC500C1/covid19-app-YahiaBakour.git

npm install 

npm start
```


### Results


<p float="left" align="center">
<img src="https://github.com/BUEC500C1/covid19-app-YahiaBakour/blob/master/images/main.png" width="192">
<img src="https://github.com/BUEC500C1/covid19-app-YahiaBakour/blob/master/images/list.png" width="192">
<img src="https://github.com/BUEC500C1/covid19-app-YahiaBakour/blob/master/images/list_us.png" width="192" >
<img src="https://github.com/BUEC500C1/covid19-app-YahiaBakour/blob/master/images/map.png" width="192">
</p>



## Built With

* [COORD](https://gist.github.com/sindresorhus/1341699) - Country to coordinates mapper
* [VisualStudio](https://code.visualstudio.com/) - IDE
* [ReactNative](https://reactnative.dev/) - React Native
* [ReactNativeMaps](https://github.com/react-native-community/react-native-maps
) - React Native Maps


