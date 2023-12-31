import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { AnimatedIcon } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBookingById } from '../store/bookingSlice';
import moment from 'moment';


const TicketScreen = ({ route, navigation }) => {
  const bookingId = route.params;
  const dispatch = useDispatch();
  const listBooking = useSelector((state) => state.booking.listByBookingId);
  useEffect(() => {
    dispatch(fetchBookingById(bookingId))
}, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTopHearder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>Vé đậu xe</Text>
        </View>
        <AnimatedIcon />
      </View>
      <View style={styles.ticketContanier}>
        <View style={styles.ticketWrapper}>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Tên</Text>
            <Text style={styles.ticketWrapperTextR}>{listBooking?.vehicle.user.fullName}</Text>
          </View>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Số điện thoại</Text>
            <Text style={styles.ticketWrapperTextR}>{listBooking?.vehicle.user.phoneNumber}</Text>
          </View>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Biển số xe</Text>
            <Text style={styles.ticketWrapperTextR}>{listBooking?.vehicle.plateNumber}</Text>
          </View>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Khu vực đậu xe</Text>
            <Text style={styles.ticketWrapperTextR}>Trung tâm bến xe Thành phố Đà Nẵng</Text>
          </View>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Chỗ đậu xe</Text>
            <Text style={styles.ticketWrapperTextR}>{`${listBooking?.parkingSlot?.area} (${listBooking?.parkingSlot?.name})`}</Text>
          </View>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Ngày bắt đầu</Text>
            <Text style={styles.ticketWrapperTextR}>{moment(listBooking?.start_Date).format('DD/MM/YYYY, h:mm:ss A')}</Text>
          </View>
          <View style={styles.ticketWrapperCard}>
            <Text style={styles.ticketWrapperTextL}>Ngày kết thúc</Text>
            <Text style={styles.ticketWrapperTextR}>{moment(listBooking?.end_Date).format('DD/MM/YYYY, h:mm:ss A')}</Text>
          </View>
        </View>
        <View
          style={styles.ticketHr}>
          <Text style={{ color: 'silver' }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View style={styles.containerTicket} >
            <View>
              <Text style={styles.fontma}> Quét mã này khi tới cổng </Text>
            </View>
            <View style={styles.Maqr}>
              <QRCode
                value={bookingId}
                size={200} // Adjust the size of the QR code as needed
              />
            </View>
            <View style={styles.Luuy}>
              <Text> Lưu ý : Chụp màn hình nếu không có mạng </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewCommonButton}>
        <TouchableOpacity
          style={styles.btnCommon1}
          onPress={() => navigation.navigate('GoogleMap')}
        >
          <Text style={styles.btnTextCommon1}>
            Chuyển đến đặt chỗ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    paddingTop: 50,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  containerTopHearder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainerText: {
    fontSize: 21,
    marginLeft: 10,
    fontWeight: '700'
  },
  ticketContanier: {
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    alignItems: 'center',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  ticketWrapper: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketWrapperCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  ticketWrapperTextL: {
    flex: 1,
    color: '#6e6e6e'
  },
  ticketWrapperTextR: {
    flex: 1,
    fontWeight: '600',
  },
  ticketHr: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  containerTicket: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Maqr: {
    paddingTop: 10
  },
  Luuy: {
    paddingTop: 10
  },
  viewCommonButton: {
    paddingTop: 10,
  },
  btnCommon1: {
    height: 50,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.27,
    shadowRadius: -3,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextCommon1: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    fontSize: 17,
  }
})

export default TicketScreen

