import { getAllSlugs, getPostData } from "../../data/posts";

export default function BlogPost(props) {
    const {postData} = props;

    return (
        <>
            <div>{postData.title}</div>
            <div>{postData.content}</div>
        </>
        
        

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