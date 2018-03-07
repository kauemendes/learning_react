import React from 'react'
import ReactDOM from 'react-dom'
import Familly from './familly'
import Member from './member'

ReactDOM.render(
    <Familly lastName="Mendes de Freitas">
        <Member name="Kaue" />
        <Member name="Juca" />
        <Member name="Auzelino" />
    </Familly>
, document.getElementById('app'))
