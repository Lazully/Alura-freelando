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
            a: '#373737',
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
        x : '32px',
        xl: '40px',
        xxl: '48px',
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