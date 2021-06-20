import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { useSnackbar } from "notistack";
import { Table, Space } from "antd";

// import FormLogin from '../../components/FormLogin';
import SVG from '../../assets/images/svg-7.svg';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Title',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Application',
    dataIndex: 'application',
    key: 'application',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: any) => (
      <Space size="middle">
       <Link to={`/webhook/${record.key}`}>Show</Link>
      </Space>
    ),
  },
];

function Webhook() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [docs, setDoc] = useState<any>([]);
    useEffect(() => {
      async function getDocs() {
        const response = await api.get('/webhooks');
        setDoc(response.data.data);
      }

      getDocs()
    }, [enqueueSnackbar]);

  return (
    <div className={'content'}>
      <div className={'container'}>
        <div className='row'>
          <div className='col register-center'>
            <Table dataSource={docs} columns={columns} />
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

export default Webhook;
