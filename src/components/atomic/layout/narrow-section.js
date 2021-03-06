import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
/**
 * @author
 * @function NarrowSection
 * type : 'top'
 **/

const NarrowSection = ({ children, topSpace, bottomSpace, type }) => {
  const size = useContext(ResponsiveContext)
  const Section = () => (
    <Box width={"100%"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )

  const SmallSection = ({ children }) => (
    <Box width={"100%"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )

  const MediumSection = ({ children }) => (
    <Box width={"100%"} alignSelf={"center"}>
      <Box height={"xxsmall"} />
      <Box>{children}</Box>
      <Box height={"xxsmall"} />
    </Box>
  )
  return size === "small" ? (
    <SmallSection>{children}</SmallSection>
  ) : size === "medium" ? (
    <MediumSection>{children}</MediumSection>
  ) : (
    <Section>{children}</Section>
  )
}

export default NarrowSection
