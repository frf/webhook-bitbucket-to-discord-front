import React from 'react';
import './styles.css';
import FormRegister from '../../components/FormRegister';
import SVG from '../../assets/images/svg-7.svg';

function Register() {
  return (
    <div className={'content'}>
      <div className={'container'}>
        <div className='row'>
          <div className='col register-center'>
            <FormRegister />
          </div>
          <div className='col'>
            <div className={'img-wrapper'}>
                  <img src={SVG} alt={'Login'} className={'hero-img'} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
