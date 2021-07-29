import styled from 'styled-components'
import { Grid, Box } from 'leek-uikit'

export const NameColumn = styled(Box).attrs({ alignItems: 'center' })`
  grid-area: name;
`

export const AumColumn = styled(Box)`
  grid-area: aum;
`

export const TopAssetsColumn = styled(Box)`
  grid-area: topAsset;
`

export const InceptionColumn = styled(Box)`
  grid-area: inception;
`

export const MonthColumn = styled(Box)`
  grid-area: month;
`

export const DayColumn = styled(Box)`
  grid-area: day;
`

export const WeekColumn = styled(Box)`
  grid-area: week;
`

const Row = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  grid-gap: 10px;
  grid-template-areas: 'name aum topAsset inception month day week';
  grid-template-columns: 1.3fr 1.2fr 2fr 1fr 1fr 1fr 1fr;
  padding: 8px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 20px;
    padding: 20px 24px;
  }
`

export default Row