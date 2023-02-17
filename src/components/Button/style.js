import styled from 'styled-components'
import { colors } from '../../style/colors'
import { typography } from '../../style/typography'

export const ButtonStyle = styled.button`
    padding: 0.719rem 1.25rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${colors.colorPrimary};
    color: ${colors.whitePure};
    font-size: ${typography.button.size};
    font-weight: ${typography.button.weight};
    line-height: ${typography.button.height};
    cursor: pointer;

        &:hover{
            background-color: ${colors.colorPrimary50} ;
        }
`