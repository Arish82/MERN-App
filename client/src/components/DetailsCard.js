import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DetailsCard(props) {
    return (
        <>
            <Grid item xs={2} sm={4} md={4}>
                <Item sx={{"fontFamily": "Quicksand, sans-serif"}} >
                {
                    props.element
                }
                    <Grid item xs>
                        <Typography className='purple-color' sx={{"fontFamily": "Quicksand, sans-serif", fontWeight: "600"}}  gutterBottom variant="h5" component="div">
                            Standard license
                        </Typography>
                        <Typography sx={{"fontFamily": "Quicksand, sans-serif", fontWeight: "600"}} variant="body2" gutterBottom>
                            {8318090814}
                        </Typography>
                    </Grid>
                </Item>
            </Grid>
        </>
    )
}
