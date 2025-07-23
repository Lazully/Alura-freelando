import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '',
        warning: '',
        focus: '',
        primarias: {
            a: '#5754ed',
            b: '',
            c: '',
        },
        secundarias: {
            a: '#ebeaf9',
            b: '',
            c: '',
        },
        neutras: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        dark: {
            a: '',
            b: '',
        }
    },
    espacamentos: {
        xs : '8px',
        s : '16px',
        l : '32px',
        m : '24px',
    },
    fontFamily: {
        montserrat: "'Montserrat, sans-serif'",
        roboto: "'Roboto, sans-serif'",
    }
}

export const ProvedorTema = ({ children }) => {
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}