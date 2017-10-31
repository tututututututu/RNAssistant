import React, {Component} from 'react';
import {
    FlatList,
    View,
    TouchableOpacity,
} from 'react-native';

import SelectHeadView from './select/SelectHeadView.js';
import SeparatorComponent from './widget/SeparatorComponent.js';
import SkuItemComponent from './select/SkuItemComponent.js';

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
                <View>
                    <SkuItemComponent sku={item}></SkuItemComponent>
                </View>

            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        const {navigate} = this.props.navigation;
        navigate('SkuEditComponent', {'item': item})
    }
}

SelectComponent.navigationOptions = ({navigation}) => {

    return {
        header: null,
        headerBackTitle: null,
    };
};
