import { ButtonStyle } from './style'

export const Button = ({children, onClick, id}) => {
    return (
        <ButtonStyle onClick={onClick} id={id}>
            {children}
        </ButtonStyle>
    )
}