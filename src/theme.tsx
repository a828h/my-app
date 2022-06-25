import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

const theme = (mode: PaletteMode | undefined) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#93de21',
            },
            secondary: {
                main: '#f50057',
            },
        },
    })
}
export default theme
