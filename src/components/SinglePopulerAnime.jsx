import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton, Avatar, CardActions, CardContent, CardMedia, CardHeader, Card } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FindInPageIcon from '@material-ui/icons/FindInPage';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 300,
        maxWidth: '100%',
        paddingTop: '56.25%', // 16:9
    },
    rank: {
        marginLeft: 'auto',
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

const SinglePopulerAnime = (props) => {
    const classes = useStyles();

    const {
        rank,
        title,
        image,
        score,
        url,
        type,
        startDate,
        endDate,
        episodes,
        members,
        truncateOverview,
        handleFavoritesClick,
        id,
    } = props;

    const details = { rank, title, image, score, url, type, startDate, endDate, episodes, members, id };

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                <CardHeader
                    avatar={<Avatar variant='square' aria-label="score" className={classes.avatar}>{score}</Avatar>}
                    title={<Typography variant='h6'>{truncateOverview(title, 20)}</Typography>}
                    subheader={`Type: ${type} | ${startDate} - ${endDate}`}
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
                    <IconButton aria-label="add to favorites" onClick={() => handleFavoritesClick(details)}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="view">
                        <a href={url}>
                            <FindInPageIcon />
                        </a>
                    </IconButton>
                    <Typography className={classes.rank} variant='button' color='primary'>MyAnimeList Rank: {rank}</Typography>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default SinglePopulerAnime;
