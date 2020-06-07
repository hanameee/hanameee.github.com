/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import Layout from "./layout";
import Title from "./title";
import Listing from "./listing";
import List from "./list";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replaceSlashes";
// @ts-ignore
import Hero from "./hero";
// @ts-ignore
import Bottom from "../texts/bottom";

type PostsProps = {
    posts: {
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        description: string;
        timeToRead?: number;
        tags?: {
            name: string;
            slug: string;
        }[];
    }[];
};

const Homepage = ({ posts }: PostsProps) => {
    const { basePath, blogPath } = useMinimalBlogConfig();

    return (
        <Layout>
            <Hero />
            <Title text="최근 포스트 목록">
                <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
                    모든 글 보기
                </Link>
            </Title>
            <Listing posts={posts} showTags={false} />
            {/* <List>
                <Bottom />
            </List> */}
        </Layout>
    );
};

export default Homepage;
