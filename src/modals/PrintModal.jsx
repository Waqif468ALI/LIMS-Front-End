import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dialog from '@mui/material/Dialog';

function PrintModal({ show, onHide, children,title }) {
  return (
    <Dialog open={show} onClose={onHide}>
        <div>
            {children}
        </div>
    </Dialog>
  );
}

export default PrintModal
