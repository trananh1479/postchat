import React, {Component} from 'react';
import { Text, View, SafeAreaView, StatusBar, Keyboard, Image,
    ImageBackground, TouchableWithoutFeedback, TextInput,
    TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            hidePassword: true,
        }
    }

    hidePass= () => {
        this.setState({hidePassword: !this.state.hidePassword});
    };

    render() {
        return(
            <ImageBackground source={require('../../asset/images/login.png')}
                             style={{flex: 1}}
                             blurRadius={0.4}
            >
                <SafeAreaView style={{
                    flex: 1,
                    marginTop: 20
                }}>
                    <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{flex: 1}}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                marginTop: 20
                            }}>
                                <Image style={{width: 200, height: 100}}
                                       source={require('../../asset/images/logo.png')}>
                                </Image>
                            </View>

                            <View style={{
                                borderRadius: 10,
                                backgroundColor: '#FFFFFF99',
                                margin: 15,
                                justifyContent: 'center',
                                top: '20%'
                            }}>
                                <TextInput style={styles.input}
                                           placeholder="Số điện thoại đăng nhập"
                                           keyboardType='numeric'
                                           returnKeyType='next'
                                           autoCorrect={false}
                                           onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />

                                <View style={{ alignSelf: 'stretch', justifyContent: 'center'}}>
                                    <TextInput style={styles.input}
                                               underlineColorAndroid="transparent"
                                               placeholder="Mật khẩu"
                                               returnKeyType='go'
                                               onChangeText={(password) => this.setState({password})}
                                               secureTextEntry={this.state.hidePassword}
                                    />
                                    <TouchableOpacity
                                        onPress={this.hidePass}
                                        style={{
                                            position: 'absolute',
                                            height: 30, width: 30,
                                            paddingBottom: 5,
                                            opacity: 0.3,
                                            right: '10%',
                                            bottom: '10%'
                                        }}
                                    >
                                        <Entypo
                                            name = {this.state.hidePassword  ? "eye-with-line" : "eye"}
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity  onPress={this.CheckTextInput}
                                                   style={{
                                                       backgroundColor: "#284EAC",
                                                       borderRadius: 20,
                                                       margin: 25,
                                                       elevation: 5,
                                                       shadowColor: '#646464',
                                                       shadowOpacity: 0.2,
                                                   }}
                                >
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        padding: 10
                                    }}>Đăng nhập</Text>
                                </TouchableOpacity>

                                <View style={{flexDirection: 'row', marginBottom: 15}}>
                                    <TouchableOpacity style={{flex:1, alignItems: 'center'}}>
                                        <Text style={styles.text}>Đăng ký</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{flex:1, alignItems: 'center'}}>
                                        <Text style={styles.text}>Quên mật khẩu?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{
                        position:'absolute',
                        bottom:6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:'100%'
                    }}>
                        <Text style={{fontSize:18,color:'#fff', alignItems: 'center'}}>TỔNG CÔNG TY BƯU ĐIỆN VIỆT NAM</Text>
                        <Text style={{color:'#fff',marginTop:4}}>Số 5 Phạm Hùng - Mỹ Đình 2 - Nam Từ Liêm - Hà Nội</Text>
                        <Text style={{color:'#fff',marginTop:4}}>Hotline: 19008000</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#636363',
        marginLeft: 25,
        marginRight: 25,
    },
    text: {
        color:'#284EAC',
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        height: 30,
        width: 30,
        paddingBottom: 5,
        opacity: 0.3,
        bottom: '20%'
    }
});

export default Login;
