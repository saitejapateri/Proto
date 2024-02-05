import React from 'react'
import CustomCard1 from './CustomCard1'
import { Stack, Typography } from '@mui/material'
import LeaderRanking from './LeaderRanking'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LeaderBoardSkeleton from "../../pages/LeaderBoardSkeleton.jsx";
import './LeaderBoardCard.css'
import palette from '../../theme/palette';

const LeaderBoardCard = ({ data, width = '100%', height = '100%', onClick}) => {

    // console.log(data, '--> LeaderBoardCard')
    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <CustomCard1 width={width} height={height}>
            <Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'8px'}>
                    <Typography component={'p'} sx={{
                        fontFamily: 'Poppins',
                        fontWeight : 500,
                        fontSize: '20px',
                        color: 'grey.900'
                    }}>Leaderboard</Typography>
                    <KeyboardArrowRightIcon />
                </Stack>
                {data ? <Stack gap={'1px'} sx={{marginTop : '21px', cursor : 'pointer'}} onClick={onClick}>
                    {data?.slice(0,6).map((item, index) => <LeaderRanking key={index + 1} data={item} value={item.percentage} index={index + 1} />)}
                </Stack> :
                    <LeaderBoardSkeleton />
                }

            </Stack>
        </CustomCard1>
    )
}

export default LeaderBoardCard

