import HeroBanner from '../components/heroBanner/HeroBanner'
import TitleWidthContent from '../components/titleWithContent/TitleWithContent'
import TitleWithTwoPic from '../components/titleWith4Pic/TitleWith4Pic'
import TitlePicSubTitle from '../components/titlePicSubTitle/TitlePicSubTitle'
import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        // Home Data
        const homeRes = await fetch(`https://stg-cms-api.fetaq.com/api/home?populate[metadata][populate]=*&populate[content][populate][0]=media_hero.videoPoster_largeMedia&populate[content][populate][1]=media_hero.video_largeMedia&populate[content][populate][2]=media_hero.image_largeMedia&populate[content][populate][3]=title_paragraphWithTitle&populate[content][populate][4]=subTitle_paragraphWithTitle&populate[content][populate][5]=title_paragraphWithTitle&populate[content][populate][6]=body_paragraphWithTitle&populate[content][populate][7]=images_twoMedia.image_blockMedia&populate[content][populate][8]=medium_oneMedium.video_largeMedia&populate[content][populate][9]=medium_oneMedium.videoPoster_largeMedia&populate[content][populate][10]=medium_oneMedium.image_largeMedia&populate[content][populate][11]=description_oneMedium&populate[content][populate][12]=images_fourMedia.image_blockMedia`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
        const homeJson = await homeRes.json()
        console.log(homeJson)
    }

    render() {
        return (
            <div>
                <HeroBanner></HeroBanner>
                <TitleWidthContent></TitleWidthContent>
                <TitleWithTwoPic></TitleWithTwoPic>
                <TitlePicSubTitle></TitlePicSubTitle>
            </div>
        )
    }
}
