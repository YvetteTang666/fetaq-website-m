import styles from '../styles/Home.module.css'
import HeroBanner from '../components/heroBanner/HeroBanner'
import TitleWidthContent from '../components/titleWithContent/TitleWithContent'
import TitleWithTwoPic from '../components/titleWith4Pic/TitleWith4Pic'
import TitlePicSubTitle from '../components/titlePicSubTitle/TitlePicSubTitle'

export default function Home() {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <TitleWidthContent></TitleWidthContent>
            <TitleWithTwoPic></TitleWithTwoPic>
            <TitlePicSubTitle></TitlePicSubTitle>
        </div>
    )
}
