import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import dummyImg from "../Images/dummyImg.jpg";
import Home from "./home.js";
import AboutMe from "./AboutMe.js";
// import { Button } from "reactstrap";
import Skills from "./skills";
import Education from "./education";
import Work from "./work";
import Contact from "./contact";
import CV from "../NameerWaqas.pdf"

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#F2F3F7", height: "100vh" }}>
            <div className={classes.toolbar} />
            <section id="imgsection">
                <article>
                    <img src={dummyImg} />
                </article>
            </section>
            <article id="detailsArticle" >
                <h2>Nameer Waqas</h2>
                <h4>Front-End Developer</h4>
            </article>


            <List>
                {['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'WORK', 'CONTACT'].map((text, index) => (
                   <ListItem a key={text}>
                       <ListItemText primary={<a href={"#" + index} >{text}</a>}
                         style={{ textAlign: "center", fontSize: "80%" }}  />
                    </ListItem>
                ))}
            </List>

        </div>
    );


    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <AppBar position="fixed" className={classes.appBar} id="appBar">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders" >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content} id="main">
                <div id="0" /> <Home />
                <div id="1"> <AboutMe /></div>
                <div id="2"> <Skills /></div>
                <div id="3"> <Education /></div>
                <div id="4"> <Work /></div>
                <div id="5"> <Contact /></div>
                <a href={CV} download id="CvAnchor">Download CV</a>
            {/* <footer><a href="#0"><h1>^</h1></a></footer> */}
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};


export default ResponsiveDrawer;