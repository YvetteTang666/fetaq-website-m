import PicWithContent from '../components/picWithContent/PicWithContent'
import TitleWithContent from '../components/titleWithContent/TitleWithContent'
import Button from '../components/button/Button'

export default function Activity() {
    return (
        <div className='pb60'>
            <TitleWithContent></TitleWithContent>
            <PicWithContent></PicWithContent>
            <PicWithContent></PicWithContent>
            <div className='pl20 pr20'>
                <Button shape="rectangular">查看更多活动</Button>
            </div>
        </div>
    )
}
