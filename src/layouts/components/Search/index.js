import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faSpinner, } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import { Wrapper as PoperWrapper } from '~/Poper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';


const cx = classNames.bind(styles);

function Search () {
    const inputRef = useRef()

    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult,setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if(!searchValue.trim()){
            setSearchResult([])
            return
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then(res => res.json())
        .then(res => {
            setSearchResult(res.data)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    },[searchValue])
    const handleClear = () => {
        setSearchValue('')
        setShowResult(false)
        inputRef.current.focus()
    }

    const handleClickOutside = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            visible = {showResult && searchResult.length > 0}
            interactive
            placement="bottom-start"
            onClickOutside = {handleClickOutside}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h3 className={cx('search-title')}>Accounts</h3>
                        {searchResult.map(result => <AccountItem key={result.id} data = {result}/>)}
                    </PoperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input 
                    ref = {inputRef}
                    value={searchValue}
                    onChange = {(e) => setSearchValue(e.target.value)}
                    onFocus = {() => setShowResult(true)}
                    placeholder="Search accounts and videos" 
                    spellCheck={false} 
                />
                {!!searchValue && !loading &&
                    <button className={cx('clear')} onClick = {handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                }
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search