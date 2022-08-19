
import styles from './Footer.module.scss'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            policyAndTerms: [],
            catelog: []
        }
    }

    async componentDidMount() {
        // delete later
        // footer & header
        const res = await fetch(`https://stg-cms-api.fetaq.com/api/global?populate%5Bheader%5D%5Bpopulate%5D=%2A&populate%5Bfooter%5D%5Bpopulate%5D=%2A&populate%5Bmetadata%5D%5Bpopulate%5D=%2A&populate%5Bfavicon%5D%5Bpopulate%5D=%2A`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
        const json = await res.json()
        // console.log(json)
        this.setState({
            policyAndTerms: json.data.attributes.footer.bottomLinks_footer,
            catelog: json.data.attributes.footer.links_footer
        })
    }

    render() {
        let { catelog, policyAndTerms } = this.state
        return (
            <div className={styles.MFooter}>
                {/* catelog */}
                {
                    catelog.map(item => {
                        return (
                            <Link key={item.id} href={item.url_link}>
                                <div style={{ fontSize: '14px' }} className={styles.MFooterCatelog}>
                                    {item.text_link}
                                </div>
                            </Link>
                        )
                    })
                }
                {/* icons */}
                {/* policyAndTerms */}
                <div className='flexHC mb30' style={{ fontSize: '12px', color: '#7E7E7E' }}>
                    <Image src='/copyright.svg' width={12} height={12} />2022 FETAQ
                </div>
                {
                    policyAndTerms.map(item => {
                        return (
                            <Link key={item.id} href={item.url_link}>
                                <div className='mb30' style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                    {item.text_link}
                                </div>
                            </Link>
                        )
                    })
                }
                <div className='mb30' style={{ fontSize: '12px', color: '#7E7E7E' }}>
                    沪ICP备12000170号
                </div>
                <div className='flexHC mb30' style={{ fontSize: '12px', color: '#7E7E7E' }}>
                    <Image src='/police.png' width={12} height={12} />
                    <span className='ml6'>沪公网安备31011002000170号</span>
                </div>
            </div>
        )
    }

}