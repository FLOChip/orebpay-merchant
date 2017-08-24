/**
 * Launch Screen Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import DashboardRender from './dashboardView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

export default connect(mapStateToProps)(DashboardRender);
