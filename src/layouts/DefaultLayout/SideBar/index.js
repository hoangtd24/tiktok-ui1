import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles)
function SideBar() {
    return <aside className={cx("wrapper")}></aside>;
}

export default SideBar;