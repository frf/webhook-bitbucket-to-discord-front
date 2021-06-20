import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { useSnackbar } from "notistack";

// import FormLogin from '../../components/FormLogin';
import SVG from '../../assets/images/svg-7.svg';

function NumberList(props: any) {
  const numbers = props.numbers;
  const listItems = numbers.map((file: any) =>
    <li key={file.id}>{file.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function Upload() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [docs, setDoc] = useState<any>([]);
    useEffect(() => {
      async function getDocs() {
        const response = await api.get('/files');
        // response.catch(error => {
        //   enqueueSnackbar('Falha conectar no servidor', { 
        //       variant: 'error',
        //   });
        // });
        setDoc(response.data.data);
      }

      getDocs()
    }, [enqueueSnackbar]);

  return (
    <div className={'content'}>
      <div className={'container'}>
        <div className='row'>
          <div className='col register-center'>
            <h4>Upload de arquivos </h4>
            <div >
              <NumberList numbers={docs} />
            </div>
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

export default Upload;
