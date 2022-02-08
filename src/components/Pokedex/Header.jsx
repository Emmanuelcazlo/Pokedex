import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  HeaderIcon,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './styles';
import pikachuImg from '../../assets/pikachu.png';
import navigator from '../../assets/navigator.png';
import egg from '../../assets/egg.png';

function PokedexHeader({ action, shuffle }) {
  return (
    <Header>
      <HeaderIcon src={pikachuImg} />
      Pokedex
      <SearchContainer>
        <SearchInput onChange={action} placeholder="Busqueda por nombre o número" />
        <SearchButton src={navigator} />
      </SearchContainer>
      <HeaderIcon onClick={shuffle} src={egg} on />
    </Header>
  );
}

PokedexHeader.propTypes = {
  action: PropTypes.func.isRequired,
  shuffle: PropTypes.func.isRequired,
};
export default PokedexHeader;
