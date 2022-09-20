import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className="card-wrapper">
    <ContentLoader
      speed={2}
      width={251}
      height={480}
      viewBox="0 0 251 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="125" cy="125" r="125" />
      <rect x="0" y="293" rx="5" ry="5" width="250" height="20" />
      <rect x="128" y="433" rx="30" ry="30" width="120" height="46" />
      <rect x="0" y="333" rx="5" ry="5" width="250" height="83" />
      <rect x="1" y="446" rx="5" ry="5" width="100" height="25" />
    </ContentLoader>
  </div>
);

export default Skeleton;
