import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return <button className={cx('wrapper')}>
         <Button  className = {cx('menu-item')} leftIcon={data.icon} to={data.to} >
            {data.title}
        </Button>
    </button>
}

export default MenuItem;
