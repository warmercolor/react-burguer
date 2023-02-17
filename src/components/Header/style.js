import styled from 'styled-components';
import { colors } from '../../style/colors';
import { typography } from '../../style/typography';

export const HeaderStyle = styled.header`
    background-color: ${colors.grey0};
    padding: 1.625rem 0;

    .bg{
        width: 100%;
        margin: 0 auto;
    }

        .container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0.875rem 0.875rem;
        gap: 0.875rem;
    
        .search{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid ${colors.grey20};
        border-radius: 8px;
        background-color: ${colors.whitePure};
        padding: 0.625rem;
        width: 80%;

        input{
            background-color: transparent;
            border: none;
            outline: none;
            color: ${colors.grey100};
            font-size: ${typography.headline.size};
            line-height: 1.188rem;
            width: 50%;

            &::placeholder {
            color: ${colors.grey20};
            }       
        }
            &:focus-within{
                border: 2px solid ${colors.grey50};
                
                input::placeholder{
                color: ${colors.grey50};
                }
            }
    }
    @media screen and (min-width: 608px){
        flex-direction: row;
        .search{
            width: 365px;
            input{
                width: 65%;
            }
        }
    }
    }
`