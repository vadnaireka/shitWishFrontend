import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import Table from 'react-bootstrap/Table';


const CartTableHeader = () => {

        return (
            <div>
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th class="tableheader" style={{width: `30%`}}>Item</th>
                        <th class="tableheader" style={{width: `40%`}}>Picture</th>
                        <th class="tableheader" style={{width: `15%`}}>Price</th>
                        <th class="tableheader" style={{width: `15%`}}>#</th>
                    </tr>
                    </thead>
                </Table>
            </div>
        );
    }

export default CartTableHeader;