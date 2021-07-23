import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled, { ThemeProvider as SCTHemeProvider } from 'styled-components';

import theme from './theme';

const GridContainer = styled(Grid)`
  height: 100vh;
`

const CompanyTitle = styled(Typography)`
${({theme}) => `
  text-align: center;
  color: ${theme.palette.primary.main}
  `}
`

const Tagline = styled(Typography)`
${({theme}) => `
  text-align: center;
  color: ${theme.palette.secondary.main}
  `}
`

const CenteredHeadline = styled(Typography)`
  text-align: center;
`

const Link = styled.a`
${({theme}) => `
  text-decoration: none;
  color: ${theme.palette.text.primary}
  `}
`

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SCTHemeProvider theme={theme}>
          <CssBaseline />
          <GridContainer
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <CompanyTitle variant="h1">
                deboint
              </CompanyTitle>
              <Tagline variant="subtitle1">
                Solutions Engineered
              </Tagline>
              <CenteredHeadline variant="subtitle2">
                <Link href="https://github.com/deboint">
                  <GitHubIcon />
                </Link>
              </CenteredHeadline>
              <CenteredHeadline variant="subtitle2">
                <Link href="mailto:chuck@deboint.com">
                  <MailOutlineIcon />
                </Link>
              </CenteredHeadline>
            </Grid>
          </GridContainer>
        </SCTHemeProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
