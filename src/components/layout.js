/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from './Footer'
import "./layout.css"
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  waBtn: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    background: '#0F87E6',
    zIndex: '10',
    '& svg': {
      color: 'white'
    },
    '&:hover': {
      background: '#0e73c3'
    },

    [theme.breakpoints.down(768)]: {
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    }
  }
}))


const redirectWa = (phoneNumber, message) => {

  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank')
}

const Layout = ({ children }) => {

  const classes = useStyles()

  const phoneNumber = '6285226062116'
  const message = 'Halo, Saya tertarik untuk memulai proyek dengan anda. Boleh bicara lebih lanjut?'

  return (
    <>
      <main>{children}</main>
      <Fab className={classes.waBtn} size="large" onClick={e => redirectWa(phoneNumber, message)}>
        <WhatsAppIcon />
      </Fab>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
