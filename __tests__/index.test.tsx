import { render, screen } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import { GET_POSTS_PAGINATED_QUERY } from '../lib/graphqlQuery';
import { PostsPaginated } from '../lib/dataTypes';
import Home, { getStaticProps } from '../pages/index'
import posts from "./index-post-page.json";
import '@testing-library/jest-dom'
import * as nextRouter from "next/router";
import { mockRouter } from "../__mocks__/routers";
import { HomeLayoutProps } from '../components/HomeLayout';

const mocks = [
    {
        request: {
            query: GET_POSTS_PAGINATED_QUERY,
            variables: {
                page: 1,
                limit: 9
            }
        },
        result: posts
    }
];

jest.spyOn(nextRouter, 'useRouter').mockReturnValue(mockRouter);

describe('Home', () => {
    it('Should renders a heading', async () => {
        render(
            <Home postsData={{}} />
        );
        const heading = screen.getByRole('heading', {
            name: /Fhillip Castillo/i,
        });

        expect(heading).toBeInTheDocument();
    })

    it('Should render New Post button', () => {
        render(<Home postsData={{}} />);
        const newPostBtn = screen.getByRole("link", { name: /New Post/i });
        expect(newPostBtn).toBeInTheDocument();
        expect(newPostBtn)
    })

    it('Should render a list of posts', async () => {
        const staticProps = await getStaticProps({}) as { props: HomeLayoutProps };
        expect(staticProps.props).toBeDefined();
        const data = staticProps.props.postsData as unknown as PostsPaginated;
        expect(typeof data).toBe(typeof []);
        render(
            <MockedProvider mocks={mocks}>
                <Home postsData={data} />
            </MockedProvider>
        );
        const postsList = await screen.getByTestId('page-posts', {});
        expect(postsList.children.length).toBe(posts.data.posts.data.length);
    })
})
