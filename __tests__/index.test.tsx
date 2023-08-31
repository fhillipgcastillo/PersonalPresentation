import { render, screen, cleanup } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import '@testing-library/jest-dom'

import { GET_POSTS_PAGINATED_QUERY, PostsPaginated } from '../lib/graphqlQuery';
import Home, { getStaticProps } from '../pages/index'
import posts from "./index-post-page.json";
// import { act } from 'react-dom/test-utils';
import Button from "../components/Button";

const mocks = [
    {
        request: {
            query: GET_POSTS_PAGINATED_QUERY,
            variables: {
                page: 1,
                limit: 10
            }
        },
        result: posts
    }
];

afterEach(cleanup);

const button = (<Button>Hello</Button>);
describe('Home', () => {
    it('should renders a heading', async () => {
        render(<Home postsData={{}} />);
        const heading = screen.getByRole('heading', {
            name: /Fhillip Castillo/i,
        });

        expect(heading).toBeInTheDocument();
    })

    it('Render New Post button and redirect', async () => {
        const { findByText } = render(<Home postsData={{}} />);
        const newPostBtn = await findByText("New Post");
        expect(newPostBtn).toBeInTheDocument();
    })

    it('Should render a list of posts', async () => {
        const { findByRole } = render(<Home postsData={posts.data.posts as unknown as PostsPaginated} />);
        const postsList = await findByRole('list', {});
        expect(postsList.children.length).toBe(posts.data.posts.data.length);
    })
})
