import React from "react";
import { PostInterface } from "../utils/Interfaces";
import Link from "next/link";
import {
    cardContainerStyleSheet,
    dateStyle,
    excerptStyle,
    tagStyle,
    titleStyle,
} from "../utils/Styles";

interface postProps {
    post: PostInterface;
}
export const PostComponent = ({ post }: postProps) => {
    return (
        <div className={cardContainerStyleSheet}>
            <Link href={`/post/${post?.slug?.current}`}>
                <h2 className={titleStyle}>{post?.title}</h2>
                <p className={dateStyle}>
                    {new Date(post?.publishedAt).toDateString()}
                </p>
                <p className={excerptStyle}>{post?.excerpt}</p>
            </Link>

            {/* TAGS */}
            <div>
                {post?.tags?.map(tag => (
                    <span className={tagStyle} key={tag?._id}>
                        #{tag?.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
