
import { Swiper } from 'antd-mobile'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './HeroBanner.module.scss'
import VideoJS from '../videoJS'

export default function HeroBanner() {
    const [isAutoplay, setAutoplayStatus] = useState(true)
    const playerRef = React.useRef(null)
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: '/fetaq.mp4',
            type: 'video/mp4'
        }, {
            src: '/fetaq.mp4',
            type: 'video/webm'
        }
        ]
    }
    const handlePlayerReady = (player) => {
        playerRef.current = player

        player.on('pause', () => {
            setAutoplayStatus(true)
        })

        player.on('play', () => {
            setAutoplayStatus(false)
        })

    }
    const lists = [
        {
            type: 'media',
            url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        },
        {
            type: 'image',
            url: '/banner1.png',
        },
        {
            type: 'image',
            url: '/banner2.png'
        },
        {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
            text: {
                content: 'This is Content',
                color: '#ffffff'
            }
        },
        {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
        }
    ]
    const items = lists.map((item, index) => (
        <Swiper.Item key={index}>
            {
                item.type === 'image'
                    ? <div className={styles.MHeroBannerImageWrapper}>
                        <Image layout='responsive' loader={() => item.url} src='image.png' width={375} height={211} />
                        {
                            item.text ? <div className={styles.MHeroBannerImageText} style={{ color: `${item.text.color || '#ffffff'}`, fontSize: `${item.text.fontSize || '16px'}` }}>
                                {item.text.content}
                            </div> : null
                        }
                    </div>
                    : <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            }

        </Swiper.Item>
    ))
    return (
        <Swiper
            loop
            autoplay={isAutoplay}
            indicator={(total, current) => (
                <div className={styles.MCustomIndicatorWrapper}>
                    {
                        [...new Array(4).keys()].map(item => {
                            return <div key={item} className={[styles.MCustomIndicator, item === current ? styles.active : ''].join(' ')}></div>
                        })
                    }
                </div>
            )}
        >{items}
        </Swiper>
    )
}