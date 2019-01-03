import { handleActions } from 'redux-actions';

import { toggleVisibilitySidebar } from '../../actions/sidebar';
import SidebarRecord from './sidebarRecord';

const sidebarReducer = handleActions(
  {
    [toggleVisibilitySidebar]: state => state.update('isVisible', isVisible => !isVisible)    
  },
  new SidebarRecord({ isVisible: false })
);

export default sidebarReducer;