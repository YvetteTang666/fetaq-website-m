import MyHead from '../components/MyHead'
import Layout from '../components/Layout'
import styles from '../styles/Page.module.css'

export default function Page() {
    return (
        <Layout>
            <MyHead></MyHead>
            <div className={styles.page}>
                <p>hahahah</p>
            </div>
            <style jsx>{`
             .p{
                 color: red;
             }
            `}</style>
        </Layout>
    )
}