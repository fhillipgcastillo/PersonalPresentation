import { render, screen, cleanup } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import '@testing-library/jest-dom'

import { GET_POSTS_PAGINATED_QUERY } from '../lib/graphqlQuery';
import Home, { getStaticProps } from '../pages/index'
import posts from "./index-post-page.json";


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

describe('Home', () => {
    it('renders a heading', async () => {
        await render(
            <MockedProvider mock={mocks} addTypename={false}>
                <Home {...getStaticProps({})} />
            </MockedProvider>
        );

        const heading = screen.getByRole('heading', {
            name: /Fhillip Castillo/i,
        })

        expect(heading).toBeInTheDocument()
    })
})