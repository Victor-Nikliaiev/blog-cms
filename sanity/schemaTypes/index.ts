import { type SchemaTypeDefinition } from "sanity";
import { post, tag } from "../schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, tag],
};
