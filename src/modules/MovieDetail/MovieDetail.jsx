import React from "react";
import GoBackButton from "./components/GoBackButton";
import MovieTitle from "./components/MovieTitle";
import InfoTags from "./components/InfoTag";
import "./MovieDetail.scss";

class MovieDetail extends React.Component {

  componentDidMount = () => {
    console.log(this.props);
    this.props.getMovieDetail(this.props.match.params.movieId);
  }

  prepareGenreArrayFromObject = (genres) => {
    return genres.map((genre) => {
      return genre.desc;
    })
  }

  prepareRoles = (roles) => {
    const rolesTypes = {};
    roles.flat().forEach((item) => {
      rolesTypes[item.name.toLowerCase()] = item.talents.talent;
    });
    if (!rolesTypes.hasOwnProperty('actor')) { rolesTypes.actor = [] }
    if (!rolesTypes.hasOwnProperty('director')) { rolesTypes.director = [] }
    if (!rolesTypes.hasOwnProperty('writer')) { rolesTypes.writer = [] }
    if (!rolesTypes.hasOwnProperty('producer')) { rolesTypes.producer = [] }
    return rolesTypes;
  }

  prepareRolesArrayfromObject = (roles, type) => {
    const rolesTypes = this.prepareRoles(roles);
    const { actor, director, writer, producer } = rolesTypes;

    switch (type) {
      default:
      case 'actor':
        return actor.map((person) => person.fullname);

      case 'director':
        return director.map((person) => person.fullname);

      case 'writer':
        return writer.map((person) => person.fullname);

      case 'producer':
        return producer.map((person) => person.fullname);
    }
  }

  render() {
    const { details } = this.props;
    if (details && details.hasOwnProperty('extendedcommon')) {
      const { details } = this.props;
      const { title, description, extendedcommon, image_large, image_base_vertical } = details;
      const { media, genres, roles } = extendedcommon;
      const { publishedyear, duration, rating, originaltitle } = media;
      return (
        <section className="movies-detail-view">
          <GoBackButton />
          <MovieTitle title={title} />
          <section className='movies-detail-view__content-section'>
            <section className='movies-detail-view__image-container'>
              <span
                className="movies-detail-view__image"
                style={{ backgroundImage: `url(${image_large})` }}
              >
                <span className="movies-detail-view__image__mask" />
              </span>
            </section>
            <section className='movies-detail-view__vertical-image-container '>
              <span
                className="movies-detail-view__image-vertical"
                style={{ backgroundImage: `url(${image_base_vertical})` }}
              >
                <span className="movies-detail-view__image-vertical__mask" />
              </span>
            </section>
            <section>
              <span className='movies-detail-view__description'>Duration: {duration}  Clasificación: {rating.code} {publishedyear}</span>
              <p className='movies-detail-view__description'>{description}</p>
              <InfoTags
                infoTitle="Genero"
                content={this.prepareGenreArrayFromObject(genres.genre)}
              />
              <InfoTags
                infoTitle="Actor"
                content={this.prepareRolesArrayfromObject(roles.role, 'actor')}
              />
              <InfoTags
                infoTitle="Director"
                content={this.prepareRolesArrayfromObject(roles.role, 'director')}
              />
              <InfoTags
                infoTitle="Escritor"
                content={this.prepareRolesArrayfromObject(roles.role, 'writer')}
              />
              <InfoTags
                infoTitle="Productor"
                content={this.prepareRolesArrayfromObject(roles.role, 'producer')}
              />
              <InfoTags
                infoTitle="Titulo original"
                content={[originaltitle]}
              />
            </section>
          </section>
        </section>
      );
    } else {
      return <p>Loading...</p>
    }
  }
}

export default MovieDetail;
