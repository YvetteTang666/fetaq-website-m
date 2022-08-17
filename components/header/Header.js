import Image from 'next/image'
import styles from './Header.module.scss'
import React, { useEffect } from 'react'

export default function Header() {
    const [showLanWindow, setShowLanWindow] = React.useState(false)
    const lanLists = ['中', '英']
    const [currLanIndex, setCurrLanIndex] = React.useState(0)
    const [categories, setCategories] = React.useState([
        {
            title: '产品目录',
            key: 'key1',
            childrens: [
                {
                    title: '服装',
                    key: 'key1-c1',
                    childrens: [
                        {
                            title: '训练服1.0',
                            key: 'key1-c1-1',
                        },
                        {
                            title: 'FETAQ 训练服2.0',
                            key: 'key1-c1-2',
                        }
                    ]
                },
                {
                    title: '鞋履',
                    key: 'key1-c2',
                    childrens: [
                        {
                            title: 'FETAQ BLACK.1',
                            key: 'key1-c2-1',
                        },
                        {
                            title: 'FETAQ WHITE.1',
                            key: 'key1-c2-2',
                        }
                    ]
                }
            ]
        },
        {
            title: 'FETAQ社区',
            key: 'key2',
            childrens: [
                {
                    title: 'FETAQ社区1',
                    key: 'key2-c1',
                    childrens: [
                        {
                            title: 'FETAQ社区1-1',
                            key: 'key2-c1-1',
                        },
                        {
                            title: 'FETAQ社区1-2',
                            key: 'key2-c1-2',
                        }
                    ]
                },
                {
                    title: 'FETAQ社区2',
                    key: 'key2-c2',
                    childrens: [
                        {
                            title: 'FETAQ社区2-1',
                            key: 'key2-c2-1',
                        },
                        {
                            title: 'FETAQ社区2-2',
                            key: 'key2-c2-2',
                        }
                    ]
                }
            ]
        },
        {
            title: 'FETAQ故事',
            key: 'key3',
            childrens: [
                {
                    title: 'FETAQ故事1',
                    key: 'key3-c1',
                    childrens: [
                        {
                            title: 'FETAQ故事1-1',
                            key: 'key3-c1-1',
                        },
                        {
                            title: 'FETAQ故事1-2',
                            key: 'key3-c1-2',
                        }
                    ]
                },
                {
                    title: 'FETAQ故事2',
                    key: 'key3-c2',
                    childrens: [
                        {
                            title: 'FETAQ故事2-1',
                            key: 'key3-c2-1',
                        },
                        {
                            title: 'FETAQ故事2-2',
                            key: 'key3-c2-2',
                        }
                    ]
                },
                {
                    title: 'FETAQ故事3',
                    key: 'key3-c3',
                    childrens: [
                        {
                            title: 'FETAQ故事3-1',
                            key: 'key3-c3-1',
                        },
                        {
                            title: 'FETAQ故事3-2',
                            key: 'key3-c3-2',
                        }
                    ]
                }
            ]
        }
    ])
    const [showMenu, setShowMenu] = React.useState(false)
    const [currMenu, setCurrMenu] = React.useState({})

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
    }
    const clickMask = () => { }

    const clickMenu = (item) => {
        console.log(item)
        setCurrMenu(item)
    }

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
                        categories.map(item => {
                            return (
                                <div onClick={clickMenu.bind(this, item)} className={[styles.MMenuLevel1, styles.ft16, currMenu.key === item.key ? styles.MSelectedMenu : ''].join(' ')} key={item.key}>
                                    {item.title}
                                </div>)
                        })
                    }
                    {currMenu.childrens && currMenu.childrens.length ?
                        <div className={styles.MMenuChildWrapper}>
                            {currMenu.childrens.map(item => {
                                return (
                                    <div key={item.key}>
                                        <div className={[styles.MMenuLevel2, styles.ft16].join(' ')}>{item.title}</div>
                                        {
                                            item.childrens.map(c => {
                                                return <div key={c.key} className={[styles.MMenuLevel3, styles.ft16].join(' ')}>{c.title}</div>
                                            })
                                        }
                                    </div>
                                )
                            })}
                        </div> : null}
                </div>
            }
            <div className={styles.MHeaderContainer}>
                <Image src="/FETAQ.svg" alt="FETAQ Logo" width={75} height={16} />
                <div className={styles.MBtnContainer}>
                    <Image src='/search-black.svg' alt="search" width={18} height={18} />
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
        </>
    )
}