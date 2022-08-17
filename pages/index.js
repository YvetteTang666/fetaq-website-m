import styles from '../styles/Home.module.css'
import HeroBanner from '../components/heroBanner/HeroBanner'
import TitleWidthContent from '../components/titleWithContent/TitleWithContent'

export default function Home() {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <TitleWidthContent></TitleWidthContent>
        </div>
    )
}
