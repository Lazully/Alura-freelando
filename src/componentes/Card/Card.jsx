import styled from '@emotion/styled';

const DivEstilizada = styled.div`
    background: ${props => props.theme.cores.secundarias.a}; 
    padding: ${props => props.theme.espacamentos.l};
    border-radius: ${props => props.theme.espacamentos.xs};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    `

export const Card = ({ children }) => {
    return (
        <DivEstilizada>
            {children}
        </DivEstilizada>
    )
}