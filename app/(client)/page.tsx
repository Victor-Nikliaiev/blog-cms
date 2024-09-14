import { client } from "@/sanity/lib/client";
import { Header } from "../components/Header";
import { PostInterface } from "../utils/Interfaces";
import { PostComponent } from "../components/PostComponent";

async function getPosts() {
    const query = `
*[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
  }
}
`;

    const data = await client.fetch(query, { all: true });
    return data;
}

export const revalidate = 60;

export default async function Home() {
    const posts: PostInterface[] = await getPosts();
    const hasPosts = posts?.length > 0;
    // const postsArray = hasPosts
    //     ? posts.map(post => <PostComponent key={post._id} post={post} />)
    //     : null;

    console.log(posts);
    return (
        <div>
            <Header title='Articles' />
            <div>
                {hasPosts
                    ? posts?.map(post => (
                          <PostComponent key={post.slug.current} post={post} />
                      ))
                    : null}
            </div>
        </div>
    );
}
