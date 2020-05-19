import React, { Fragment } from "react"
import { Box, Heading, Text, Paragraph } from "grommet"
import DefaultLayout from "../components/default-layout"
import { ResponsiveImage } from "../components/atomic/ResponsiveImage"
import { Link, ExternalLink } from "../components/atomic/TattleLinks"

/**
 * @author
 * @function Index
 **/

const Index = props => {
  return (
    <DefaultLayout>
      <Fragment>
        <ResponsiveImage />
        <Heading level={2}>Accurate Information to the People</Heading>
        <Box direction={"column"} gap={"small"}>
          <Text>
            Tattle is a civic tech project that aims to make accurate
            information more accessible to mobile first users, in languages that
            they are comfortable with.
          </Text>
          <Text>
            To this end, Tattle is creating an open archive of content
            circulated on chat apps; and building open source data collection
            tools and APIs to index and query the multimedia archive.
          </Text>
          <Text>
            You can read more about the project{" "}
            <Link to={"/faq"}>
              {" "}
              <Text>here</Text>{" "}
            </Link>
            .
          </Text>
          <Text>
            Tattle was one of the winners of the{" "}
            <ExternalLink
              href={
                "https://aiethicsinitiative.org/news/2019/3/12/announcing-the-winners-of-the-ai-and-the-news-open-challenge"
              }
              target="_blank"
            >
              <Text>
                AI and the News Open Challenge which has enabled the project to
                scale faster.
              </Text>
            </ExternalLink>
          </Text>
        </Box>
      </Fragment>
    </DefaultLayout>
  )
}

export default Index