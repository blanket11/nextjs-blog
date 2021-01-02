import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}

// ページ生成用
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

// データを受け取る
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}