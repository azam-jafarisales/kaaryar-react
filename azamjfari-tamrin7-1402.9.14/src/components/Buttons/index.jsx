import './style.css'
import Button from "../Button/index.jsx";
// import { useState } from 'react';

function buttons() {
    return (
        <div className="buttons">
            <Button look={Button.LOOKS.PRIMARY} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM} >primary</Button>
            <Button look={Button.LOOKS.SECONDARY} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>secondary</Button>
            <Button look={Button.LOOKS.SUCCESS} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>Success</Button>
            <Button look={Button.LOOKS.DANGER} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>Danger</Button>
            <Button look={Button.LOOKS.WARNING} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>Warning</Button>
            <Button look={Button.LOOKS.INFO} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>Info</Button>
            <Button look={Button.LOOKS.DARK} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>Dark</Button>
            <Button look={Button.LOOKS.PRIMARY} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM}>Primary</Button>
            <Button look={Button.LOOKS.SECONDARY} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM}>secondary</Button>
            <Button look={Button.LOOKS.SUCCESS} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM}>Success</Button>
            <Button look={Button.LOOKS.DANGER} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM}>Danger</Button>
            <Button look={Button.LOOKS.WARNING} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM}>Warning</Button>
            <Button look={Button.LOOKS.INFO} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM} type="submit" disabled={true} onClick={() => { console.log('is clicked') }} >Info</Button>
            <Button look={Button.LOOKS.DARK} variant={Button.VARIANTS.OUTLINED} size={Button.SIZE.MEDIUM} href="https://google.com" as="a" target="_blank" >Dark</Button>
            <Button look={Button.LOOKS.WARNING} variant={Button.VARIANTS.FILLED} size={Button.SIZE.LARGE}>Button lg</Button>
            <Button look={Button.LOOKS.WARNING} variant={Button.VARIANTS.FILLED} size={Button.SIZE.MEDIUM}>Button</Button>
            <Button look={Button.LOOKS.WARNING} variant={Button.VARIANTS.FILLED} size={Button.SIZE.SMALL}>Button sm</Button>
        </div>
    )
}

export default buttons;