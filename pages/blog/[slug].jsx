import { getAllSlugs, getPostData } from "../../data/posts";
import style from "../../scss/posts.module.scss"

export default function BlogPost(props) {
    const {postData} = props;

    return (
        <div className={`${style.pageStyle}`}>
            <div className={`${style.title}`}>{postData.title}</div>
            <div className={`${style.date}`}>By <a className={`${style.link}`} href="https://twitter.com/GrahamSabin" target="_blank">@grahamsabin</a> // {postData.publishedDate}</div>
            <div className={`${style.divideBar}`}></div>
            <div className={`${style.contentText}`}>{postData.content}</div>
        </div>
        
        

    )
}

export const getStaticPaths = () => {
    const paths = getAllSlugs();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = ({params}) => {
    const postData = getPostData(params.slug);
    return {
        props: {
            postData,
        }
    }
}