import React, {Component} from 'react';
import {
    Text,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import SelectHeadView from './select/SelectHeadView.js';
import SeparatorComponent from './widget/SeparatorComponent.js';

import './data/MoniData.js'


export default class SelectComponent extends Component<{}> {

    constructor(props) {
        super(props);

        this.state = {
            searchData: global.moniData,
        }
    }

    render() {
        return (
            <View>
                <SelectHeadView/>
                <FlatList data={this.state.searchData}
                          ItemSeparatorComponent={SeparatorComponent}
                          renderItem={this.renderItem.bind(this)}>
                </FlatList>
            </View>
        );
    }

    renderItem({item, index}) {
        return (
            <TouchableOpacity key={index} activeOpacity={1}
                              onPress={this.clickItem.bind(this, item)}>
                <View style={styles.item_container}>
                    <Image style={styles.item_img} source={{uri: item.img}}></Image>

                    <View style={styles.item_right}>
                        <Text style={{color: 'black', flex: 1}}>
                            {item.code}
                        </Text>

                        <Text style={{flex: 1}}>
                            {item.name}
                        </Text>

                        <Text style={{flex: 1}}>
                            剩 {item.kucun} 件
                        </Text>

                        <Text style={{color: 'red', flex: 1}}>
                            ¥ {item.price}
                        </Text>

                    </View>

                    <Image source={require('../imgs/select/billing_jia.png')}
                           style={styles.add_img}></Image>
                    <Image source={require('../imgs/select/billing_jian.png')}
                           style={styles.min_img}></Image>

                    <Text style={styles.select_text}>
                        已选 {item.select}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        this.props.navigation.navigate('SkuEditComponent', {'item': item})
    }
}


const styles = StyleSheet.create({
    item_container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingTop: 8,
        height: 110,
        backgroundColor: 'white',
        flexDirection: 'row',
        position: 'relative',
    },

    item_img: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
    },

    item_right: {
        width: 100,
        marginLeft: 10,
        flexDirection: 'column',
    },
    add_img: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 20,
        bottom: 10,
    },

    min_img: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 66,
        bottom: 10,
    },
    select_text: {
        color: 'blue',
        position: 'absolute',
        right: 20,
        top: 10,
    },
})