import { render, screen, cleanup } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import { GET_POSTS_PAGINATED_QUERY, PostsPaginated } from '../lib/graphqlQuery';
import Home, { HomeProps, getStaticProps } from '../pages/index'
import posts from "./index-post-page.json";
import '@testing-library/jest-dom'


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

describe('Home', () => {
    it('Should renders a heading', async () => {
        render(<Home postsData={{}} />);
        const heading = screen.getByRole('heading', {
            name: /Fhillip Castillo/i,
        });

        expect(heading).toBeInTheDocument();
    })

    it('Should render New Post button and redirect', async () => {
        render(<Home postsData={{}} />);
        const newPostBtn = await screen.findByText("New Post");
        expect(newPostBtn).toBeInTheDocument();
    })

    it('Should render a list of posts', async () => {
        const staticProps = await getStaticProps({}) as { props: HomeProps };
        expect(staticProps.props).toBeDefined();

        render(
            <MockedProvider mocks={mocks}>
                <Home postsData={staticProps.props.postsData as unknown as PostsPaginated} />
            </MockedProvider>
        );
        const postsList = await screen.findByRole('list', {});
        expect(postsList.children.length).toBe(posts.data.posts.data.length);
    })
})
