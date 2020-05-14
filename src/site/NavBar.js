import React, { useState } from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Favorites from "./Favorites";
import { ListItem, MenuList } from "@material-ui/core";
import Home from "./Home";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigations(props) {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "left" || anchor === "right",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <MenuList>
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/favorites">
            Favorites
          </MenuItem>
        </MenuList>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {[""].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)}>
                {anchor}
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          <Typography variant="h6" className={classes.title}>
            Movie App
          </Typography>
          <Button color="inherit" onClick={props.clearToken}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
