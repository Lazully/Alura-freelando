import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFF',
        warning: '',
        focus: '#B009FF',
        primarias: {
            a: '#5754ed',
            b: '#D93114',
            c: '',
        },
        secundarias: {
            a: '#F8F8FD',
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
            b: '#B61B00',
        }
    },
    espacamentos: {
        xs : '8px',
        s : '16px',
        l : '32px',
        m : '24px',
        x : '32px',
        xl: '48px',
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}