import React from 'react';


const cross = ({color = '#4B4B7C', ...props}) => {
  return (
    <svg {...props} viewBox="0 0 16 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M1.34124 1.35581C1.5598 1.13732 1.8562 1.01457 2.16524 1.01457C2.47429 1.01457 2.77069 1.13732 2.98925 1.35581L7.99271 6.35928L12.9962 1.35581C13.1037 1.2445 13.2323 1.15571 13.3745 1.09462C13.5167 1.03354 13.6696 1.00139 13.8244 1.00004C13.9791 0.998699 14.1326 1.02819 14.2758 1.08679C14.4191 1.14539 14.5492 1.23193 14.6586 1.34137C14.7681 1.4508 14.8546 1.58093 14.9132 1.72416C14.9718 1.8674 15.0013 2.02087 15 2.17562C14.9986 2.33037 14.9665 2.48331 14.9054 2.62551C14.8443 2.7677 14.7555 2.89631 14.6442 3.00382L9.64072 8.00728L14.6442 13.0107C14.8565 13.2306 14.974 13.525 14.9713 13.8306C14.9687 14.1361 14.8461 14.4285 14.63 14.6446C14.4139 14.8607 14.1216 14.9832 13.816 14.9859C13.5104 14.9885 13.216 14.8711 12.9962 14.6588L7.99271 9.65529L2.98925 14.6588C2.76943 14.8711 2.47503 14.9885 2.16944 14.9859C1.86385 14.9832 1.57153 14.8607 1.35544 14.6446C1.13935 14.4285 1.01677 14.1361 1.01412 13.8306C1.01146 13.525 1.12894 13.2306 1.34124 13.0107L6.34471 8.00728L1.34124 3.00382C1.12274 2.78526 1 2.48886 1 2.17982C1 1.87077 1.12274 1.57437 1.34124 1.35581Z"
            fill={color}/>
    </svg>
  )
}

export default cross;