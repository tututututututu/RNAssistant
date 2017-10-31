import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import SkuItemComponent from '../select/SkuItemComponent.js';
import SeparatorComponent from '../widget/SeparatorComponent.js'

export default class SkuEditComponent extends Component<{}> {

    componentWillMount() {
    }

    render() {
        const passSku = this.props.navigation.state.params.item;
        return (
            <View style={styles.root_style}>
                {this.renderSkuItem({passSku})}
                {this.renderPriceDiscount({passSku})}
                {this.renderMarker({passSku})}
            </View>
        );
    }

    renderSkuItem({passSku}) {
        return (<SkuItemComponent sku={passSku}></SkuItemComponent>)
    }

    renderPriceDiscount({passSku}) {
        return (
            <View style={styles.price_discount_style}>
                <View style={styles.common_item_style}>
                    <Text style={styles.text_left_style}>上次价</Text>
                    <Text style={styles.text_right_style}>{passSku.lastPrice}</Text>
                </View>

                <SeparatorComponent/>
                <View style={styles.common_item_style}>
                    <Text style={styles.text_left_style}>价格</Text>
                    <Text style={styles.text_right_style}>{passSku.price}</Text>
                </View>

                <SeparatorComponent/>
                <View style={styles.common_item_style}>
                    <Text style={styles.text_left_style}>折扣</Text>
                    <Text style={styles.text_right_style}>{passSku.discount}</Text>
                </View>
            </View>
        )
    }

    renderMarker({passSku}) {
        return (
            <View style={styles.price_discount_style}>
                <Text style={{
                    height: 30, paddingLeft: 16,
                    textAlignVertical: 'center', includeFontPadding: false
                }}>备注</Text>
                <SeparatorComponent/>
                <TextInput style={styles.text_input} underlineColorAndroid="transparent"
                           placeholder="请输入款号备注" multiline={true}>
                    {passSku.ramark == null ? "" : passSku.ramark}
                </TextInput>
                <SeparatorComponent/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    root_style: {
        paddingTop: 10,
        flexDirection: 'column',
    },

    price_discount_style: {
        flexDirection: 'column',
        marginTop: 10,
        backgroundColor: '#ffffff',
    },
    common_item_style: {
        flexDirection: 'row',
        paddingLeft: 16,
        height: 40,
        paddingRight: 16,
    },
    text_left_style: {
        alignSelf: 'center'
    },
    text_right_style: {
        alignSelf: 'center',
        position: 'absolute',
        right: 16,
    },
    text_input: {
        height: 70,
        fontSize: 12,
        paddingTop: 4,
        paddingBottom: 0,
        paddingLeft: 32,
        paddingRight: 16,
        textAlignVertical: 'top',
    },
})

SkuEditComponent.navigationOptions = ({navigation}) => {
    return {
        // 展示数据 "`" 不是单引号
        title: `拿货${navigation.state.params.item.name}`,
        // 导航栏的标题, 可以是字符串也可以是个组件 会覆盖 title 的值
        //右边按钮
        headerRight: (
            <View>
                <Text style={{paddingRight: 16}}>确定
                </Text>
            </View>
        ),
        //左上角的返回键文字, 默认是上一个页面的title  IOS 有效
        headerBackTitle: "返回",
        //导航栏的style
        headerStyle: {
            backgroundColor: '#fff'
        },
        //导航栏的title的style
        headerTitleStyle: {
            color: '#888888',
            fontSize: 16,
            //居中显示
            alignSelf: 'center',
        },
        //按压返回按钮显示的颜色 API > 5.0 有效
        headerPressColorAndroid: 'grey',
        //返回按钮的颜色
        headerTintColor: '#888888',
        //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
        gesturesEnabled: true,
    };

};