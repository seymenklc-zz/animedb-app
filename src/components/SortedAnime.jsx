import React, { useState } from 'react';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton, Avatar, CardActions, CardContent, CardMedia, CardHeader, Card, Collapse, TextField } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 300,
        width: 350,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        marginRight: 0,
        marginLeft: 0,
        marginTop: 5
    },
    media: {
        height: 300,
        maxWidth: '100%',
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#5077be',
        fontSize: '15px'
    },
    conent: {
        display: 'flex',
        justifyContent: 'space-around'
    },
}));

const SortedAnime = ({ title, image, score, url, type, episodes, members, synopsis, truncateOverview }) => {
    const [expanded, setExpanded] = useState(false);

    const classes = useStyles();

    const handleExpandClick = () => setExpanded(!expanded);

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                <CardHeader
                    className={classes.header}
                    avatar={<Avatar variant='square' aria-label="score" className={classes.avatar}>{score}</Avatar>}
                    title={<Typography variant='h6'>{truncateOverview(title, 20)}</Typography>}
                    subheader={`Type: ${type}`}
                />
                <a href={url}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={url}
                    />
                </a>
                <CardContent className={classes.conent}>
                    <Typography variant="body1" color="textSecondary" component="p" >
                        Episodes: {episodes} | Members: {members}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <a href={url}><FindInPageIcon /></a>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <TextField
                            label="Synopsis"
                            defaultValue={synopsis}
                            InputProps={{ readOnly: true }}
                            multiline
                            variant='filled'
                        />
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
    );
};

export default SortedAnime;
