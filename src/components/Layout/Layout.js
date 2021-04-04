import React, {Fragment} from 'react';
import layoutStyles from './Layout.module.css';

const layout = (props) => (
    <Fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={layoutStyles.Layout}>
            {props.children}
        </main>
    </Fragment>
)

export default layout;