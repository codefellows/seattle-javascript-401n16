import React from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
} from '@material-ui/core';

function SingleProduct(props) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    style={{ height: '150px', width: '100%' }}
                    image={`https://source.unsplash.com/random?${props.name}`}
                    title={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {props.name}
                    </Typography>
                    <Typography>{props.description}</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' onClick={props.add} color='primary'>
                        Add To Cart
                    </Button>
                    <Button onClick={props.view} size='small' color='primary'>
                        View Details
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default SingleProduct;
