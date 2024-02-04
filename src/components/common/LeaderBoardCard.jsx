import React from 'react'
import CustomCard1 from './CustomCard1'
import { Skeleton, Stack, Typography } from '@mui/material'
import LeaderRanking from './LeaderRanking'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LeaderBoardSkeleton from "../../pages/LeaderBoardSkeleton.jsx";
import './LeaderBoardCard.css'
import palette from '../../theme/palette';

const LeaderBoardCard = ({ data, width = '100%', height = '100%' }) => {

    // console.log(data, '--> LeaderBoardCard')

    return (
        <CustomCard1 width={width} height={height}>
            <Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'8px'}>
                    {/* <img src={crownSvg} width={20} height={20} alt='crownSvg'></img> */}
                    <Typography component={'p'} sx={{
                        fontFamily: 'Poppins',
                        fontWeight : 500,
                        fontSize: '20px',
                        color: 'grey.900'
                    }}>Leader Board</Typography>
                    <KeyboardArrowRightIcon />
                </Stack>
                {data ? <Stack gap={'1px'} sx={{marginTop : '21px'}}>
                    {data?.slice(0,6).map((item, index) => <LeaderRanking key={index + 1} data={item} value={item.percentage} index={index + 1} />)}
                </Stack> :
                    <LeaderBoardSkeleton />
                }

            </Stack>
        </CustomCard1>
    )
}

export default LeaderBoardCard


const LeaderPlaceHolder = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem',background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem',background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem',background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem',background: theme => theme.palette.grey[200] }} />
        </Stack>
    )
}