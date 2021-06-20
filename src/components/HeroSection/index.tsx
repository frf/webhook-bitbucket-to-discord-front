import React from 'react';
import './styles.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

interface SectionProps {
  lightBg:any;
  topLine:any;
  lightText:any;
  lightTextDesc:any;
  headline:any;
  description:any;
  buttonLabel:any;
  img:any;
  alt:any;
  imgStart:any;
  route?:any;
}
const HeroSection: React.FC<SectionProps> = (props)  => {
  return (
    <>
      <div
        className={props.lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: props.imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{props.topLine}</div>
                <h1 className={props.lightText ? 'heading' : 'heading dark'}>
                  {props.headline}
                </h1>
                <p
                  className={
                    props.lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {props.description}
                </p>
                
                {props.buttonLabel !== '' && 
                <Link to={props.route}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {props.buttonLabel}
                  </Button>
                </Link>
                }
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={props.img} alt={props.alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
