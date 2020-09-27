import React from 'react';
import './Button.scss';
import classNames from 'classnames';

//size: large, medium, small
//color: blue, pink, gray
function Button({children, size, color}) {
    return (
        <button className={classNames('Button', size, color)}>{children}</button>
    );
}

Button.defaultProps = {
    size : 'medium',
    color: 'blue'
}

export default Button;