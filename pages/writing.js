import { getAllPosts } from "../data/posts"
import Link from "next/link";
import style from "../scss/writing.module.scss"
import { FaTwitter, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';

export default function Writing () {
    const posts = getAllPosts();
    return (
        <div className={`${style.pageStyle}`}>
            <div className={`${style.topBar}`}>
                <FaArrowRight size={20} icon="fa-solid fa-arrow-right" className={`${style.rightArrow}`}></FaArrowRight>
                <h1 className={`${style.featured}`}>First Draft Blog</h1>
                <div className={`${style.divideBar}`}></div>
            </div>
            <div>
                {posts.map((p) => (
                    <BlogPostPreview key={p.id} data={p} />
                ))}

            </div>

        </div>
    )
}

const BlogPostPreview = (props) => {
    const {data} = props;
    return (
        <div className={`${style.blogPreview}`}>
            {/* <img></img> I didn't want an image but you can add it*/}
            <p className={`${style.date}`}>{data.publishedDate}</p>
            <h2>
                <Link href={`/blog/${data.slug}`}>
                    <a className={`${style.titles}`}>{data.title}</a>
                </Link>
            </h2>
            <p className={`${style.excerpt}`}>
                {data.excerpt}
            </p>
            <div className={`${style.divideBar}`}></div>

        </div>

    )
}