import styled from 'styled-components';
import { colors } from '../../style/colors';
import { typography } from '../../style/typography';

export const DivStyle = styled.div`
    margin-right: 5%;
    margin-top: 50px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 290px;
        height: 65px;
        background-color: ${colors.colorPrimary};
        border-radius: 5px 5px 0px 0px;
        color: white;
        font-size: ${typography.heading3.size};
        font-weight: ${typography.heading3.weight};
        line-height: ${typography.heading3.height};
    }

    .empty{
        width: 290px;
        height: 158px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: ${colors.grey0};
        border-radius: 0px 0px 5px 5px;

        h3{
            color: ${colors.grey100};
            font-size: ${typography.heading3.size};
            font-weight: ${typography.heading3.weight};
            line-height: ${typography.heading3.height};
        }

        span{
            color: ${colors.grey50};
            font-size: ${typography.caption.size};
            font-weight: ${typography.caption.weight};
            line-height: ${typography.caption.height};
        }
    }

    @media screen and (min-width: 400px){
        width: 100%;
        align-items: center;

        .header{
            width: 385px;
            height: 65px;
        }
        .empty{
            width: 385px;
        }
    }

    @media screen and (min-width: 1024px){
        width: 30%;
        align-items: center;
    }
`

export const UlStyle = styled.ul`
    width: 290px;
    background-color: ${colors.grey0};
    overflow-y: auto;

    ::-webkit-scrollbar{
    width: 0.7rem;
    }
    ::-webkit-scrollbar-track{
    background-color: ${colors.colorPrimary};

    }
    ::-webkit-scrollbar-thumb{
    background-color: ${colors.colorPrimary50};
    border-radius: 5px;
    }

    

    li{
        min-width: 100%;
        display: flex;
        justify-content: space-evenly;
        
        figure{
            display: flex;
            justify-content: center;
            width: 30%;
            background-color: ${colors.grey20};
            margin: 5px;
            border-radius: 50%;

            img{
                width: 100%;
            }

        }

        .information{
            width: 30%;
            margin: 10px;
            display: flex;
            flex-direction: column;
            gap: 3px;

            .title{
                color: ${colors.grey100};
                font-size: ${typography.heading3.size};
                font-weight: ${typography.heading3.weight};
                line-height: ${typography.heading3.height};
                width: 100px;
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 16px;
                white-space: nowrap;
            }
            .category{
                color: ${colors.grey50};
                font-size: ${typography.caption.size};
                font-weight: ${typography.caption.weight};
                line-height: ${typography.caption.height};
            }

            .price{
                margin-top: 20px;
                color: ${colors.colorPrimary};
                font-size: ${typography.body600.size};
                font-weight: ${typography.body600.weight};
                line-height: ${typography.body600.height};
            }
        }

        .btn{
            align-self: center;
        }
    }

    @media screen and (min-width: 400px){
        width: 385px;
        height: 465px;
        max-height: 465px;
    }
`

export const FooterStyle = styled.div`
    width: 290px;
    background-color: ${colors.grey0};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 0px 0px 5px 5px;

    button{
            background-color: ${colors.colorPrimary};
            color: ${colors.whitePure};
            padding: 10px;
            width: 90%;
            margin: 0 auto;
            outline: none;
            border: none;
            border-radius: 5px;
            font-size: ${typography.heading4.size};
            font-weight: ${typography.heading4.weight};
            line-height: ${typography.heading4.height};
            margin-bottom: 20px;

            &:hover{
                background-color: ${colors.colorPrimary50};
            }
        }

    hr{
        width: 85%;
        border: 1px solid ${colors.greyBtn};
        border-radius: 10px;
    }

    div{
        display: flex;
        justify-content: space-between;
        padding: 20px;

        h3{
            color: ${colors.colorPrimary};
                font-size: ${typography.heading3.size};
                font-weight: ${typography.heading3.weight};
                line-height: ${typography.heading3.height};
        }
    }

    @media screen and (min-width: 400px){
        width: 385px;
    }
    `