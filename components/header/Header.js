import Image from 'next/image'
import styles from './Header.module.scss'
import React, { useEffect } from 'react'
import Router from 'next/router'
import { Mask, SearchBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
// import Link from 'next/link'

export default function Header() {
    const [showLanWindow, setShowLanWindow] = React.useState(false)
    const lanLists = ['中', '英']
    const [searchText, setSearchText] = React.useState('搜索')
    const [searchHistoryText, setSearchHistoryText] = React.useState('历史搜索')
    const [currLanIndex, setCurrLanIndex] = React.useState(0)
    const [menuLevel1, setMenuLevel1] = React.useState([])
    const [menuLevel2, setMenuLevel2] = React.useState([])
    const [showMenu, setShowMenu] = React.useState(false)
    const [currMenu, setCurrMenu] = React.useState({})
    const [menuLists, setMenuLists] = React.useState([])
    const [showSearchModal, setShowSearchModal] = React.useState(false)
    const [searchHistory, setSearchHistory] = React.useState([])
    const [currSearchVal, setCurrSearchVal] = React.useState('')

    const clickShowLanWindow = (e) => {
        e.stopPropagation()
        !showLanWindow ? setShowLanWindow(true) : setShowLanWindow(false)
    }
    const switchLan = (e) => {
        e.stopPropagation()
        setCurrLanIndex(currLanIndex === 0 ? 1 : 0)
        setShowLanWindow(false)
    }

    const clickShowMenu = (e) => {
        e.stopPropagation()
        !showMenu ? setShowMenu(true) : setShowMenu(false)
        initMenu()
    }
    const clickMask = () => {
        setShowMenu(false)
        initMenu()
    }
    const initMenu = () => {
        setCurrMenu({})
        setMenuLevel2([])
    }

    const clickMenu = (item) => {
        setCurrMenu(item)
        setMenuLevel2(
            menuLists.filter(m => m.parentIndex_menuItem === item.index_menuItem && m.level_menuItem === 2)
                .map(c => {
                    c.childrens = menuLists.filter(i => i.parentIndex_menuItem === c.index_menuItem && i.level_menuItem === 3)
                    return c
                }))
    }

    const logoClick = () => {
        setShowMenu(false)
        initMenu()
        Router.push('/')
    }

    const gotoActivityPage = (item) => {
        Router.push('/activity')
        setShowMenu(false)
    }

    const handleMenuData = (lists) => {
        setMenuLists(lists)
        setMenuLevel1(lists.filter(item => item.level_menuItem === 1))
    }

    const onSearchChanged = (value) => {
        setCurrSearchVal(value)
    }

    const clickSearchBtn = () => {
        initMenu()
        setShowMenu(false)
        setShowSearchModal(true)
    }

    useEffect(() => {
        let lists = [...searchHistory]
        if (currSearchVal && lists.indexOf(currSearchVal) === -1) {
            lists.push(currSearchVal)
            setSearchHistory(lists)
        }
    }, [currSearchVal])

    useEffect(() => {
        // Delete Later
        async function fetchData() {
            const res = await fetch(`https://stg-cms-api.fetaq.com/api/global?populate%5Bheader%5D%5Bpopulate%5D=%2A&populate%5Bfooter%5D%5Bpopulate%5D=%2A&populate%5Bmetadata%5D%5Bpopulate%5D=%2A&populate%5Bfavicon%5D%5Bpopulate%5D=%2A`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            const json = await res.json()
            json?.data?.attributes?.header?.menu_header && handleMenuData(json.data.attributes.header.menu_header)
        }
        fetchData()
    }, [])

    useEffect(() => {
        function handleClick() {
            setShowLanWindow(false)
        }
        window.addEventListener('click', handleClick, false)
        return function cleanup() {
            window.removeEventListener('click', handleClick, false)
        }
    })

    return (
        <>
            <div onClick={clickMask} className={[styles.MMenuMask, showMenu ? styles.showMask : ''].join(' ')} />
            {
                <div className={[styles.MMenuContent, showMenu ? styles.Menu : null].join(' ')}>
                    {
                        menuLevel1.map(item => {
                            return (
                                <div onClick={clickMenu.bind(this, item)}
                                    className={[styles.MMenuLevel1, styles.ft16, currMenu.index_menuItem === item.index_menuItem ? styles.MSelectedMenu : ''].join(' ')}
                                    key={item.index_menuItem}>
                                    {item.text_menuItem}
                                </div>)
                        })
                    }
                    {menuLevel2.length ?
                        <div className={styles.MMenuChildWrapper}>
                            {menuLevel2.map(item => {
                                return (
                                    <div key={item.text_menuItem}>
                                        <div className={[styles.MMenuLevel2, styles.ft16].join(' ')}>{item.text_menuItem}</div>
                                        {
                                            item.childrens.map(c => {
                                                return <div key={c.text_menuItem}
                                                    className={[styles.MMenuLevel3, styles.ft16].join(' ')}
                                                    onClick={gotoActivityPage.bind(this, item)}>{c.text_menuItem}</div>
                                            })
                                        }
                                    </div>
                                )
                            })}
                        </div> : null}
                </div>
            }
            <div className={styles.MHeaderContainer}>
                <Image onClick={logoClick} src="/FETAQ.svg" alt="FETAQ Logo" width={75} height={16} />
                <div className={styles.MBtnContainer}>
                    <Image onClick={clickSearchBtn} src='/search-black.svg' alt="search" width={18} height={18} />
                    <div className={styles.MLanWrapper}>
                        <div onClick={clickShowLanWindow} className={styles.ft18}>{lanLists[currLanIndex]}</div>
                        {showLanWindow ?
                            <div className={[styles.ft18, styles.MLanWindow].join(' ')}>
                                <span onClick={switchLan}>{lanLists[currLanIndex === 0 ? 1 : 0]}</span>
                            </div> : null
                        }
                    </div>
                    <Image onClick={clickShowMenu} src='/menu.svg' alt="menu" width={18} height={18} />
                </div>
            </div>
            <Mask
                color='white'
                visible={showSearchModal}
                opacity={1}
            >
                <div className={styles.MHeaderSearchWrapper}>
                    <div className='flexC'>
                        <Image onClick={() => setShowSearchModal(false)} src="/back.svg" width={10} height={18} />
                        <div className={styles.MHeaderSearch}>
                            <SearchBar
                                onSearch={onSearchChanged}
                                style={{
                                    '--border-radius': '0px',
                                    '--background': '#F5F5F5',
                                    '--height': '38px',
                                    '--padding-left': '15px',
                                }}
                                placeholder={searchText}
                                icon={<SearchOutline color='#101820'
                                />}
                            />
                        </div>
                    </div>
                    {
                        searchHistory.length ? <div>
                            <div className={styles.MHistory}>
                                <div className='color9 ft14 pb20'>
                                    {searchHistoryText}
                                </div>
                                {
                                    searchHistory.map((item, index) => {
                                        return <div style={{ color: '#101820', fontWeight: 500 }} className='pb20 ft14' key={index}>{item}</div>
                                    })
                                }
                            </div>
                        </div> : null
                    }
                </div>
            </Mask>
        </>
    )
}