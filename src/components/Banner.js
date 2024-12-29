import React from 'react'
import PropTypes from 'prop-types'
import { useSiteData } from '../hooks'

const Banner = ({ header, subheader, imageSrc, imageAlt }) => {
  const { name, profileImage } = useSiteData()

  return (
    <div className="pg-width">
      <div className="banner">

        <img
          width={1440}
          height={807}
          className="bg"
          alt={imageAlt}
          src={imageSrc}
        />

        <div className="content-box">
          {!!header && !!profileImage && (
            <img
              width={140}
              height={140}
              className="profile"
              alt={profileImage.alt}
              src={profileImage.src.childImageSharp.fluid.src}
            />
          )}
          {!!header && (
            <h1>{header.split(' ')[0]} {header.split(' ')[1] && (<span>{header.split(' ')[1]}</span>)}</h1>
          )}
          {!!subheader && (
            <p>{subheader}</p>
          )}
        </div>
      </div>
    </div>
  )
}

Banner.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  imageSrc: PropTypes.object,
}

export default Banner