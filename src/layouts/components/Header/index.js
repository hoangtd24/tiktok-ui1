import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';


import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PoperWrapper } from '~/Poper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy 
                    visible = {false}
                    interactive
                    render={attrs => (
                    <div className ={cx('search-result')} tabIndex = "-1" {...attrs}>
                       <PoperWrapper>
                            <h3 className = {cx('search-title')}>Accounts</h3>
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
                            <FontAwesomeIcon icon = {faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className = {cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
