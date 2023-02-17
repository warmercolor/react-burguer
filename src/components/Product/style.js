import styled from 'styled-components';
import { colors } from '../../style/colors';
import { typography } from '../../style/typography';

export const ListDivStyle = styled.div`
    width: 80%;
    margin: 0 auto;

    .product{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 2px solid ${colors.grey20};
        margin: 0 auto;

            &:hover{
                border-color: ${colors.grey50};
            }

            figure{
                width: 100%;
                height: 10rem;
                background-color: ${colors.grey0};
                display: flex;
                justify-content: center;
                
                img{
                    width: 90%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .infomation{
                height: 10rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                padding: 1rem 1.225rem;
                background-color: ${colors.whitePure};

                .title{
                    color: ${colors.grey100};
                    font-size: ${typography.heading3.size};
                    font-weight: ${typography.heading3.weight};
                    line-height: ${typography.heading3.height};
                }

                .category{
                    color: ${colors.grey50};
                    font-size: ${typography.caption.size};
                    font-weight: ${typography.caption.weight};
                    line-height: ${typography.caption.height};
                }

                .price{
                    color: ${colors.colorPrimary};
                    font-size: ${typography.body600.size};
                    font-weight: ${typography.body600.weight};
                    line-height: ${typography.body600.height};
                }

                button{
                    margin-bottom: 0.875rem;
                }
            }
    }`