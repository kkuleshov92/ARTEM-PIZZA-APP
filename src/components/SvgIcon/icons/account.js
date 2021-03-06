import React from 'react';


const account = ({color = '#4B4B7C', ...props}) => {
  return (
    <svg {...props} viewBox="0 0 16 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 10.1111 14.0655 12.0039 12.5876 13.2873C12.3503 13.4934 12 13.3143 12 13C12 10.7909 10.2091 9 8 9C5.79086 9 4 10.7909 4 13C4 13.3143 3.64971 13.4934 3.41242 13.2873C1.93451 12.0039 1 10.1111 1 8ZM8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4Z"
            fill={color}/>
    </svg>

  )
}

export default account;