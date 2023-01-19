const posts = [
    {
        id: 1,
        title: "Random Blog TItle",
        publishedDate: "January 5th, 2021",
        author: "Graham Sabin",
        coverImage: "",
        excerpt: 
            "In todays news, we will be straight up chilklers writing this blog post thing to make it dope as shit.",
        content:
            "My entire blog is  right here",
        slug:"random-blog-title", 
    },
    {
        id: 2,
        title: "Big Boy Blog",
        publishedDate: "2023-19-06",
        author: "Graham Sabin",
        coverImage: "",
        excerpt: 
            "In todays news, we will be straight up chilklers writing this blog post thing to make it dope as shit.",
        content:
            "My entire blog is written right here",
        slug:"big-boy-blog", 
    },
    {
        id: 3,
        title: "Epic Writing time",
        publishedDate: "2023-17-05",
        author: "Graham Sabin",
        coverImage: "",
        excerpt: 
            "In todays news, we hat to writing this blog post thing to make it dope as shit.",
        content:
            "My entire blog is written right here",
        slug:"epic-writing-time", 
    },

]

export function getAllPosts() {
    return posts;
}

export function getAllSlugs () {
    let slugs = [];
    getAllPosts().map(p => slugs.push(`/blog/${p.slug}`));
    return slugs;
}

export function getPostData (slug) {
    let post = null;
    getAllPosts().map((p) => {
        if (p.slug === slug) {
            post = p;
            return;
        }
    });
    return post;
}