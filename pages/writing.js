import { getAllPosts } from "../data/posts"
import Link from "next/link";

export default function Writing () {
    const posts = getAllPosts();
    return (
        <div>
            <div>This is my writing page, I'll do an intro at some point</div>
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
        <div>
            {/* <img></img> I didn't want an image but you can add it*/}
            <h2>
                <Link href={`/blog/${data.slug}`}>
                    <a>{data.title}</a>
                </Link>
            </h2>
            <div>{data.publishedDate}</div>
            <p>
                {data.excerpt}
            </p>
            <div>{data.author}</div>
        </div>

    )
}