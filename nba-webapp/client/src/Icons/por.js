import React from 'react';
import PropTypes from 'prop-types';

const POR = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#061922"
          d="M110.935 51.49c-1.542-2.282-3.313-4.427-5.263-6.378l-2.643-2.433L122.207 23.5H66.335L44.727 45.11c-1.95 1.95-3.72 4.096-5.262 6.378a43.15 43.15 0 0 0-3.973 7.32c-2.248 5.313-3.387 10.957-3.387 16.775s1.14 11.46 3.387 16.774a43.15 43.15 0 0 0 3.973 7.32 43.37 43.37 0 0 0 5.262 6.378 43.1 43.1 0 0 0 2.652 2.439l-19.172 19.172h55.856l21.65-21.653c1.934-1.94 3.69-4.07 5.222-6.336a43.15 43.15 0 0 0 3.973-7.32c2.247-5.313 3.385-10.956 3.385-16.774s-1.138-11.462-3.385-16.775a43.15 43.15 0 0 0-3.973-7.32"
        />
        <path
          stroke="#fff"
          d="M110.935 51.49c-1.542-2.282-3.313-4.427-5.263-6.378l-2.643-2.433L122.207 23.5H66.335L44.727 45.11c-1.95 1.95-3.72 4.096-5.262 6.378a43.15 43.15 0 0 0-3.973 7.32c-2.248 5.313-3.387 10.957-3.387 16.775s1.14 11.46 3.387 16.774a43.15 43.15 0 0 0 3.973 7.32 43.37 43.37 0 0 0 5.262 6.378 43.1 43.1 0 0 0 2.652 2.439l-19.172 19.172h55.856l21.65-21.653c1.934-1.94 3.69-4.07 5.222-6.336a43.15 43.15 0 0 0 3.973-7.32c2.247-5.313 3.385-10.956 3.385-16.774s-1.138-11.462-3.385-16.775a43.15 43.15 0 0 0-3.973-7.32"
        />
        <path
          d="M103.147 47.6l-2.617-2.396-23.45 23.45c1.155.325 2.245.94 3.154 1.847l.006.007c2.832 2.832 2.832 7.423 0 10.255l-43.435 43.435h5.09l40.89-40.89C87 79.072 87.022 72.23 82.823 68l2.544-2.544a14.45 14.45 0 0 1-.038 20.394L46.98 124.187h5.1l35.803-35.803a18.05 18.05 0 0 0 .038-25.482l2.545-2.545c8.415 8.456 8.4 22.132-.04 30.572L57.16 124.187h5.1l30.712-30.713c9.846-9.845 9.86-25.8.04-35.662l2.545-2.544c11.226 11.266 11.213 29.5-.04 40.75L67.34 124.187h5.09l25.624-25.624c12.657-12.655 12.67-33.168.038-45.84l2.56-2.562c14.046 14.087 14.033 36.892-.037 50.964L77.55 124.187h5.1l20.52-20.517-.012-.012c15.483-15.483 15.483-40.586 0-56.068"
          fill="#fff"
        />
        <path
          d="M47.275 103.614L49.892 106l23.45-23.45c-1.154-.325-2.244-.94-3.153-1.846l-.007-.007c-2.832-2.832-2.832-7.424 0-10.255l43.495-43.495h-5.09l-40.95 40.95c-4.224 4.225-4.237 11.066-.037 15.307l-2.544 2.544a14.45 14.45 0 0 1 .037-20.394L103.5 26.957h-5.1L62.548 62.82a18.05 18.05 0 0 0-.037 25.482l-2.544 2.545c-8.416-8.456-8.403-22.132.037-30.572L93.32 26.957h-5.09L57.46 57.73c-9.846 9.846-9.86 25.8-.038 35.662l-2.545 2.545c-11.226-11.266-11.214-29.5.038-40.752l28.227-28.227h-5.09L52.37 52.64c-12.657 12.657-12.67 33.168-.038 45.84l-2.56 2.56C35.725 86.956 35.738 64.15 49.81 50.08L72.93 26.957h-5.1L47.275 47.545c-15.483 15.483-15.483 40.586 0 56.07"
          fill="#e03a3e"
        />
      </g>
    </svg>
  );
};

POR.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

POR.defaultProps = {
  size: '100'
};

export default POR;
