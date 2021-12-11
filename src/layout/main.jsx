import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Sidebar, Menu, Header, Image, Icon, Segment, Checkbox} from 'semantic-ui-react';
import {Outlet} from 'react-router-dom';
import LayoutFooter from './footer.jsx';
import LayoutHeader from './header.jsx';

const MainLayout = () => {
    const [visible, setVisible] = useState(false);
    const routes = [
        { name: 'home', url: '/' },
        { name: 'admin', url: '/admin' }
    ]
    return <Sidebar.Pushable as={Segment}>
        <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
            animation='push'
        >
            <Menu.Item as='a'>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher id="main-container-pusher" dimmed={visible}>
            <LayoutHeader visible={visible} setVisible={setVisible} />
            <section id="main-container">
                <Outlet />
            </section>
            <LayoutFooter />
        </Sidebar.Pusher>
    </Sidebar.Pushable>
}

export default MainLayout;