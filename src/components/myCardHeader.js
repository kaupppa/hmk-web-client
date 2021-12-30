import React, { Component } from 'react';
import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

class MyCardHeader extends Component {
    render() {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                alignContent: 'flex-start',
                marginBottom: '16px'
            }}>
                <Avatar variant="square" alt={this.props.alt} src={this.props.src} sx={{
                    width: 40,
                    height: 40,
                    marginRight: '16px'
                }} />
                <Typography variant="h2"  >
                    {this.props.title}
                </Typography>
            </Box>
        )
    }
}
export default MyCardHeader;