import React from 'react';
import './styles.css';

interface TableProps {
}

const Table: React.FC<TableProps> = (props)  => {

  return (
    <table className="table table-striped table-bordered table-responsive">{props.children}</table>
  );
};

export default Table;