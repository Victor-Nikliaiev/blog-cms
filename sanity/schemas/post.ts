import { Rule } from "sanity";

export const post = {
    name: "post",
    title: "Post",
    type: "document",

    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: Rule) =>
                Rule.required().error("This field is required"),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: Rule) =>
                Rule.required().error("This field is required"),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            validation: (Rule: Rule) =>
                Rule.max(200).error("Excerpt must be less than 200 characters"),
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            name: "alt",
                            type: "text",
                            title: "Alternative text",
                        },
                    ],
                },
            ],
        },
    ],
};
