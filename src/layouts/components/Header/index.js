import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Message, Plus, Inbox,} from '~/components/Icons';
import Menu from '~/Poper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search'
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    title: 'Tiếng Việt',
                    code: '34',
                },
                {
                    type: 'language',
                    title: 'English',
                    code: '32',
                },
                {
                    type: 'language',
                    title: 'Tiếng Trung',
                    code: '30',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        }
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Button outline leftIcon={<Plus />} className={cx('custom-upload')}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content= 'Message' interactive>
                                <button className={cx('action-btn')}>
                                   <Message />
                                </button>
                            </Tippy>
                            <Tippy content= 'Inbox' interactive>
                                <button className={cx('action-btn')}>
                                   <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image 
                                className = {cx('user-avatar')} 
                                src = 'https://p16-sign-sg.tktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b1641adcd346998511c984f9a0843085.jpeg?x-expires=1657508400&x-signature=bORiXmM1UuG3xtmJJ7bvYgGKqvY%3D' 
                                alt= ''
                            />
                        ) : (
                            <>
                                <div className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
