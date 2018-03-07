import React from 'react'
import ReactDOM from 'react-dom'
import Familly from './familly'
import Member from './member'

ReactDOM.render(
    <Familly>
        <Member name="Kaue" lastName="Mendes" />
    </Familly>
, document.getElementById('app'))
