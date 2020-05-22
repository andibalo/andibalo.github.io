import React from 'react'

import { Box, Typography, IconButton, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    footerWrapper: {
        backgroundColor: "#0F87E6"
    },
    footerInner: {
        padding: theme.spacing(2.5, 0)
    },
    footerIcons: {
        margin: theme.spacing(1, 0)
    },
    footerIcon: {
        fill: "#0F87E6"
    },
    IconButton: {
        backgroundColor: 'white',
        margin: theme.spacing(0, 1),
        padding: "6px",
        "&:hover": {
            backgroundColor: '#dcdcdb'
        }
    }
}))



const Footer = () => {

    const classes = useStyles()

    const iconClick = (link) => {
        window.open(link, '_blank')
    }

    return (

        <Box display="flex" justifyContent="center" className={classes.footerWrapper}>
            <Container>
                <Box className={classes.footerInner}>
                    <Typography component="h4" align="center" style={{ fontFamily: "Open Sans", color: "white", fontWeight: "600" }}>Find Me On</Typography>
                    <Box display="flex" justifyContent="center" className={classes.footerIcons}>
                        <IconButton className={classes.IconButton} onClick={e => iconClick('https://www.linkedin.com/in/andi-balo-284707182/')}>
                            <LinkedInIcon className={classes.footerIcon} />
                        </IconButton>
                        <IconButton className={classes.IconButton} onClick={e => iconClick('https://github.com/andibalo')}>
                            <GitHubIcon className={classes.footerIcon} />
                        </IconButton>
                        <IconButton className={classes.IconButton} onClick={e => iconClick('https://www.instagram.com/andibalo213/')}>
                            <InstagramIcon className={classes.footerIcon} />
                        </IconButton>
                    </Box>
                    <Typography align="center" style={{ fontWeight: "400" }}>&copy; {new Date().getFullYear()} By Andi Usman Balo. All Rights Reserved</Typography>
                </Box>
            </Container>
        </Box>


    )
}

export default Footer
