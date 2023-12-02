import Layout from '../components/Layout';
import { Grid, ThemeProvider, Typography, styled } from '@mui/material';
import homeTheme from '../lib/homeTheme';
import { ActionButton } from '../components/ActionButton';
import { Link as ScrollLink } from "react-scroll";

const Section = styled(Grid)(({ theme }) => ({
  padding: "0px",
  height: "100vh",
}));

const pageNavItems = [
  {
    title: "About me",
    scrollTo: "about-me"
  },
  {
    title: "Projects",
    scrollTo: "projects"
  },
  {
    title: "Find me",
    scrollTo: "contact-me"
  },
];

const Home = () => {
  return (
    <ThemeProvider theme={homeTheme}>
      <Layout home siteTitle='Fhillip Castillo' pageNavItems={pageNavItems} >
        <Section sx={(theme) => ({ /*color: "white", backgroundColor: theme.palette.primary.main */ })}>
          <Grid container height={"50vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <Typography sx={{ fontSize: "2.1rem" }}>
                Hi There! I'm
              </Typography>
              <Typography variant="h1" fontWeight={800} sx={(theme) => ({ color: theme.palette.primary.main })}>Fhillip Castillo</Typography>
              <Typography sx={{ fontSize: "2.1rem" }}>
                Full-stack Web Developer.
              </Typography>

              <Grid container marginTop={4} justifyItems={"center"} md={6} lg={6} alignSelf={"center"}>
                <ActionButton
                  sx={{
                    fontSize: "1.3rem"
                  }}>
                  <ScrollLink to="contact-me" smooth={true} duration={1000}>
                    Contact me
                  </ScrollLink>
                </ActionButton>
              </Grid>
            </Grid>
          </Grid>
        </Section>

        <Section container sx={(theme) => ({ backgroundColor: theme.palette.primary.main, color: "#fff" })} alignItems={"center"}>
          <Grid container height={"50vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid container item xs={10} md={6} lg={6} spacing={1}>
              <Typography
                variant='h2'
                id={"about-me"}
                fontWeight={700}
                sx={(theme) => ({ color: theme.palette.secondary.main })}
              >
                About Me
              </Typography>
              <Grid container rowSpacing={1}>
                <Typography variant="body1">
                  Passionate about crafting seamless and engaging web experiences, I am a versatile Full-Stack Web Engineer with a rich frontend web engineering history and a solid full-stack foundation dating back to 2015.
                </Typography>
                <Typography variant="body1">
                  I am eager to explore exciting opportunities where I can contribute my versatile expertise and collaborate with innovative teams. Let's connect and discuss how my skills can bring value to your projects.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Grid container height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={10} md={6} lg={6} >
              <Typography
                variant='h2'
                id={"projects"}
                fontWeight={700}
                sx={(theme) => ({ color: theme.palette.primary.main })}
              >
                Projects
              </Typography>

            </Grid>
          </Grid>
        </Section>

        <Section sx={(theme) => ({ backgroundColor: theme.palette.primary.main, color: "#fff", })}>
          <Grid container height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                variant='h2'
                id={"contact-me"}
                fontWeight={700}
                sx={(theme) => ({ color: theme.palette.secondary.main })}
              >
                Where to find me
              </Typography>

            </Grid>
          </Grid>
        </Section>

      </Layout>
    </ThemeProvider>
  )
}
export default Home;

// export const getStaticProps: GetStaticProps<HomeLayoutProps> = async ({ preview, params }) => {

//   const data: { posts: PostsPaginated } = await getPostsPaginated();
//   return {
//     props: {
//       postsData: data.posts,
//     }
//   }
// }

/**
 * This is an example if we want to use serside rendering
 * export const getServerSideProps: GetServerSideProps = async (context){
    return {
      props: {
        // props for your component
      },
    };
  }
 */