import styled from 'styled-components';

export const UlStyle = styled.ul`
    overflow-x: auto;
    display: flex;
    gap: 1.8rem;
    padding: 5px 15px;
        &::-webkit-scrollbar {
            display:none;
        }
    li{
        min-width: 300px;
        min-height: 346px;
    }

    @media screen and (min-width: 1024px){
    display: flex;
    width: 80%;
    justify-content: flex-start;
    flex-wrap: wrap;
    li{
        max-width: 190px;
    }
    }`