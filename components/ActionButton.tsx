
import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const ActionButton = styled(Button)((({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    },
})));
