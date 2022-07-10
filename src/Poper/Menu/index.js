import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PoperWrapper } from '~/Poper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items, onChange }) {
    const [history, setHistory] = useState([{data:items}])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => <MenuItem key={index} data={item} onClick = {() => {
            const isParent = !!item.children
            if(isParent){
                setHistory(prev => [...prev, item.children])
            }
            else{
                onChange(item)
            }
        }}/>);
    };
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset = {[12,12]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        {history.length > 1 && <Header title='Language' onBack={() => setHistory(prev => prev.slice(0, history.length - 1))}/>}
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
            onHide = {() => setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
