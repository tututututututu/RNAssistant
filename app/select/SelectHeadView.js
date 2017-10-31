import React, {Component} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    Image,
    View,
} from 'react-native';


export default class SelectHeadView extends Component<{}> {
    render() {
        return (
            <View style={styles.container_style}>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.rund_bg}>
                        <TextInput style={styles.input_style} underlineColorAndroid="transparent"
                                   placeholder="输款号"></TextInput>
                    </View>


                    <Image style={{alignSelf: 'center', position: 'absolute', right: 14}}
                           source={require('../../imgs/select/delete_input.png')}/>
                </View>


                <View style={{paddingLeft: 14, paddingRight: 10, alignSelf: 'center'}}>
                    <Image style={styles.image_style} source={require('../../imgs/select/scan.png')}>
                    </Image>
                </View>

                <View style={{paddingLeft: 10, paddingRight: 14, alignSelf: 'center'}}>
                    <Image style={styles.image_style} source={require('../../imgs/select/yuying.png')}>
                    </Image>
                </View>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    container_style: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#ffffff'
    },

    input_style: {
        fontSize: 18,
        paddingLeft: 14,
    },
    image_style: {},

    rund_bg: {
        marginTop: 4,
        marginBottom: 4,
        flex: 1,
        marginLeft: 20,
        backgroundColor: '#eeeeee',
        borderRadius: 100,
    },

});