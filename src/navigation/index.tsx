import { useCallback } from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import GlobalBack from '@/components/GlobalBack';
import ProductTitle from '@/components/ProductTitle';
import { ProductScreenProps, RootStackParamList } from '@/typings/screen';
import Product from '@/views/Product';
import CategoryTabs from '@/views/CategoryTabs';
import Search from '@/views/Search';
import SearchList from '@/views/SearchList';
import Settings from '@/views/Settings';
import Order from '@/views/Order';
import ProfileInfo from '@/views/ProfileInfo';
import Staff from '@/views/Staff';
import Address from '@/views/Address';
import AddressForm from '@/views/AddressForm';
import Agreement from '@/views/Agreement';
import HomeScreen from './Home';
import LoginScreen from './Login';
import StaffAuth from '@/views/StaffAuth';
import Nickname from '@/views/Nickname';
import Security from '@/views/Security';
import RealNameAuth from '@/views/RealNameAuth';
import RealNameAuthForm from '@/views/RealNameAuthForm';
import OrderTabs from '@/views/OrderTabs';
import OrderDetails from '@/views/OrderDetails';
import Wallet from '@/views/Wallet';
import Collection from '@/views/Collection';
import History from '@/views/History';
import AfterSales from '@/views/AfterSales';
import Contact from '@/views/Contact';
import ContactForm from '@/views/ContactForm';
import OrderInvoice from '@/views/OrderInvoice';
import OrderPayment from '@/views/OrderPayment';


const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const NavigatorScreen = () => {
  const screenOptions = useCallback((): NativeStackNavigationOptions => {

    return {
      headerLeft: () => <GlobalBack />,
      headerBackTitleVisible: false,
      contentStyle: {
        backgroundColor: '#f5f6fa'
      }
    }
  }, []);

  const screenProductOptions = useCallback((props: ProductScreenProps): NativeStackNavigationOptions => {
  
      return {
        headerTitle: () => <ProductTitle {...props} />,
      }
    }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Index" component={HomeScreen} options={{ headerShown: false }} />
      <Screen name="Product" component={Product} options={screenProductOptions} />
      <Screen name="CategoryTabs" component={CategoryTabs} options={{ title: '' }} />
      <Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Screen name="SearchList" component={SearchList} options={{ headerShown: false }} />
      <Screen name="Login" component={LoginScreen} options={{ presentation: 'transparentModal', headerShown: false }} />
      <Screen name="Settings" component={Settings} options={{ title: '设置' }} />
      <Screen name="Order" component={Order} options={{ title: '提交订单' }} />
      <Screen name="OrderTabs" component={OrderTabs} options={{ title: '我的订单' }} />
      <Screen name="OrderDetails" component={OrderDetails} options={{ title: '订单详情' }} />
      <Screen name="OrderInvoice" component={OrderInvoice} options={{ title: '发票信息' }} />
      <Screen name="OrderPayment" component={OrderPayment} options={{ title: '订单详情' }} />
      <Screen name="ProfileInfo" component={ProfileInfo} options={{ title: '个人信息' }} />
      <Screen name="Nickname" component={Nickname} options={{ title: '' }} />
      <Screen name="Staff" component={Staff} options={{ title: '' }} />
      <Screen name="StaffAuth" component={StaffAuth} options={{ title: '员工认证' }} />
      <Screen name="StaffAuthEmail" component={StaffAuth.Email} options={{ title: '' }} />
      <Screen name="StaffAuthMail" component={StaffAuth.Mail} options={{ title: '企业邮箱认证' }} />
      <Screen name="StaffAuthPhone" component={StaffAuth.Phone} options={{ title: '客服认证' }} />
      <Screen name="Address" component={Address} options={{ title: '地址管理' }} />
      <Screen name="AddressForm" component={AddressForm} options={{ title: '新增收获地址' }} />
      <Screen name="RealNameAuth" component={RealNameAuth} options={{ title: '实名认证' }} />
      <Screen name="RealNameAuthForm" component={RealNameAuthForm} options={{ title: '实名认证' }} />
      <Screen name="Security" component={Security} options={{ title: '安全信息' }} />
      <Screen name="Agreement" component={Agreement} options={{ title: '加载中...' }} />
      <Screen name="Wallet" component={Wallet} options={{ title: '卡券包' }} />
      <Screen name="Collection" component={Collection} options={{ title: '我的收藏' }} />
      <Screen name="History" component={History} options={{ title: '浏览历史' }} />
      <Screen name="AfterSales" component={AfterSales} options={{ title: '退款/售后' }} />
      <Screen name="Contact" component={Contact} options={{ title: '常用联系人' }} />
      <Screen name="ContactForm" component={ContactForm} options={{ title: '新增常用联系人' }} />
    </Navigator>
  )
}

export default NavigatorScreen;
