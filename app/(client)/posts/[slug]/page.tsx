import { Header } from "@/app/components/Header";
import { PostInterface } from "@/app/utils/Interfaces";
import { postPageStyle, richTextStyle } from "@/app/utils/Styles";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ParamsInterface {
    params: {
        slug: string;
    };
}
async function getPost(slug: string) {
    const query = `
*[_type == "post" && slug.current == "${slug}"][0] {
  title,
  slug,
  publishedAt,
  except,
  _id,
  body,
  tags[]-> {
    _id,
    slug,
    name
  }
}
    `;

    const post: PostInterface = await client.fetch(query);
    return post;
}

const page = async ({ params }: ParamsInterface) => {
    const post = await getPost(params?.slug);
    console.log(post);

    return (
        <div>
            <Header title={post?.title} />
            <div className='text-center'>
                <span className={postPageStyle.postDateStyle}>
                    <span>{new Date(post?.publishedAt).toDateString()}</span>{" "}
                    <span>
                        {new Date(post?.publishedAt).toLocaleTimeString()}
                    </span>
                </span>

                <div className='mt-5'>
                    {post.tags?.map(tag => (
                        <Link
                            key={tag?._id}
                            href={`/tag/${tag?.slug?.current}`}
                        >
                            <span className={postPageStyle.postTagStyle}>
                                #{tag?.name}
                            </span>
                        </Link>
                    ))}
                </div>
                <div className={richTextStyle}>
                    <PortableText
                        value={post?.body}
                        components={myPortableTextComponents}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;

const myPortableTextComponents = {
    types: {
        image: ({ value }: { value: any }) => (
            <Image
                src={urlFor(value).url()}
                alt='Post'
                width={700}
                height={700}
            />
        ),
    },
};
