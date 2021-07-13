import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import SingleFavorite from '../../components/SingleFavorite';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        width: 390,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        marginRight: 0,
        marginLeft: 0,
        marginTop: 5,
    }
});

const SinglePopulerAnime = ({ favorites, truncateOverview, removeFavorite, }) => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2} direction='row'>
                {favorites ? (favorites.map(fav => (
                    <div key={fav.id} className={classes.root}>
                        <SingleFavorite
                            removeFavorite={removeFavorite}
                            truncateOverview={truncateOverview}
                            rank={fav.rank}
                            title={fav.title}
                            image={fav.image}
                            score={fav.score}
                            url={fav.url}
                            type={fav.type}
                            startDate={fav.startDate}
                            endDate={fav.endDate}
                            episodes={fav.episodes}
                            members={fav.members}
                            id={fav.id}
                        />
                    </div>
                ))) : <Typography variant='h6'>There is no favorite.</Typography>}
            </Grid>
        </Container>
    );
};

export default SinglePopulerAnime;
