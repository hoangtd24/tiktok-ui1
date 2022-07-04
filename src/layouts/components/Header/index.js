import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PoperWrapper } from '~/Poper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Plus } from '~/components/Icons';
import Menu from '~/Poper/Menu';

const cx = classNames.bind(styles);
function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }
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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    visible={false}
                    interactive
                    placement="bottom-start"
                    offset={[60, 4]}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PoperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<Plus />} className={cx('custom-upload')}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange = {handleMenuChange}>
                        <div className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
