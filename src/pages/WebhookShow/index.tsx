import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { useSnackbar } from "notistack";
import { Table, Space } from "antd";

import SVG from '../../assets/images/svg-7.svg';
import { Link } from 'react-router-dom';


const columns = [
  {
    content: 'Actor',
    dataIndex: 'content',
    key: 'Actor',
    render: (content: { actor: any; }) => content?.actor
  },
  {
    content: 'Branch',
    dataIndex: 'content',
    key: 'Branch',
    render: (content: { branch_name: any; }) => content?.branch_name
  },
  {
    content: 'Repository',
    dataIndex: 'content',
    key: 'Repository',
    render: (content: { repository: any; }) => content?.repository
  },
  {
    content: 'Type',
    dataIndex: 'content',
    key: 'type',
    render: (content: { type: any; }) => content?.type
  },
];
function WebhookShow() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [docs, setDoc] = useState<any>([]);
    useEffect(() => {
      async function getDocs() {
        const response = await api.get('/webhooks/d4dfe0d38ada1ffdd72cdaa569078a61/histories');
        setDoc(response.data.data);
      }

      getDocs()
    }, [enqueueSnackbar]);

  return (
    <div className={'content'}>
      <div className={'container'}>
        <div className='row'>
          <div className='col-12'>
            <Table dataSource={docs} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebhookShow;
