import { PropTypes } from 'prop-types'

export const Card = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="card-container bg-white w-60 rounded-lg shadow-xl flex flex-col my-2">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img rounded-t-lg" />
      )}
      {title && <h1 className="card-title mt-2 ml-4 mr-4">{title}</h1>}
      {description && (
        <p className="card-description mt-2 ml-4 mr-4">{description}</p>
      )}
    </div>
  )
}


Card.propTypes = {
  imgSrc: PropTypes.any,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}