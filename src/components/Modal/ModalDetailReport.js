import moment from 'moment';
import React, { memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


const ModalDetailReport = ({ onClose, dataF }) => {
    const handleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <SafeAreaView style={styles.ModalCommonoverlay}>
            <View onTouchStart={handleClick} style={styles.ModalCommonmodalContainer}>
                <View style={styles.ModalCommonForm}>
                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                        <Ionicons
                            name="close-outline" size={22}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.modalformHeading}>Chi tiết đánh giá</Text>
                        <View style={styles.MainCont}>
                            <View style={styles.MainContCard}>
                                <Text style={styles.MainContTextL}>Ngày tạo</Text>
                                <Text style={styles.MainContTextR}>{moment(dataF.createDate).format('DD/MM/YYYY hh:mm:ss A')}</Text>
                            </View>
                            <View style={styles.MainContCard}>
                                <Text style={styles.MainContTextL}>Ngày xử lý</Text>
                                <Text style={styles.MainContTextR}>{dataF.processingDate !== null
                                ? moment(dataF.processingDate).format('DD/MM/YYYY hh:mm:ss A') : 'Chưa xử lý'}
                                </Text>
                            </View>
                            <View style={styles.MainContCard}>
                                <Text style={styles.MainContTextL}>Trạng thái xử lý</Text>
                                <Text style={styles.MainContTextR}>{dataF.processingStatus === 1 
                                    ? 'Đã xử lý' : 'Chưa xử lý' }</Text>
                            </View>
                            <View style={styles.MainContCard}>
                                <Text style={styles.MainContTextL}>Nội dung</Text>
                                <Text style={styles.MainContTextR}>{dataF.content}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ModalCommonoverlay: {
        backgroundColor: 'rgba(49, 49, 49, 0.8)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    ModalCommonmodalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        margin: 0,
    },
    ModalCommonForm: {
        width: 320,
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 4,
    },
    closeBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
    },
    modalformHeading: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
        fontWeight: '700',
        lineHeight: 20,
        color: '#333',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderStyle: 'solid',
        marginBottom: 10
    },
    MainCont: {
        marginTop: 10,
    },
    MainContCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    MainContTextL: {
        flex: 1,
        color: '#6e6e6e'
    },
    MainContTextR: {
        flex: 1,
        fontWeight: '600',
    },
})

export default memo(ModalDetailReport)
