import { Button } from '../Button'
import { HeaderStyle } from './style'
import BurguerKenzie from '../../assets/BurguerKenzie.svg'

export const Header = ({handleFilter}) => {
    

    return (
        <HeaderStyle>
            <div className='bg'>
                <div className='container'>
                    <figure>
                        <img src={BurguerKenzie} alt='logo' />
                    </figure>
                    <div className='search'>
                        <input 
                        onChange={(event) => handleFilter(event.target.value)}
                        placeholder='Digite sua Pesquisa' />
                        <Button>Pesquisar</Button>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}