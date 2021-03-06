import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#1e88e5",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              listStyleType: "none",
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography variant="h6" className={classes.title}>
              BlogSite
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
