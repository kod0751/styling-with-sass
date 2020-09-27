import React from 'react';
import './Button.scss';
import classNames from 'classnames';

//size: large, medium, small
//color: blue, pink, gray
function Button({children, size, color, outline, fullWidth, className, ...rest}) {
    return (
        <button className={classNames('Button', size, color, {
            outline,
            fullWidth,
        }, className)}
        {...rest}
        >{children}</button>
    );
}

Button.defaultProps = {
    size : 'medium',
    color: 'blue'
}

export default Button;