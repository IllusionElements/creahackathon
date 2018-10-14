import React from 'react'
import { LinearProgress, Typography } from '@material-ui/core'
import title from 'title-case'

export const Progress = ({ stats: { lifestyle } }) => lifestyle.map(({ category, scoreRatio }) => (
    <React.Fragment key={category}>
      <Typography variant="subtitle2" style={{ color: 'red' }}>
        {title(category.replace(/_/, ' '), 'en')}
      </Typography>
      <LinearProgress variant="determinate" value={scoreRatio} style={{ marginBottom: 10 }} />
    </React.Fragment>
))
