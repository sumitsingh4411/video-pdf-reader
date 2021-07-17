import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function NavbarStyle() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link href="/" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Link>
                    <Link href="/pdf" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h7" color="inherit" style={{ marginLeft: '1vw' }}>
                            Pdf Reader
                        </Typography>
                    </Link>
                    <Link href="/video" style={{ textDecorationLine: 'none', color: 'white', cursor: 'pointer' }}>
                        <Typography variant="h7" color="inherit" style={{ marginLeft: '1vw' }}>
                            Video Recorder
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavbarStyle
