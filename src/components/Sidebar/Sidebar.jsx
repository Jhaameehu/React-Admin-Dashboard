import React from 'react';
import './Sidebar.css';

import Overview from '../../Images/overview.png';
import AllPayment from '../../Images/allPayment.png';
import ReconcilePayment from '../../Images/reconcilePayment.png';
import UnreconcilePayment from '../../Images/UnreconcilePayment.png';
import ManualSettlement from '../../Images/manualSettlement.png';
import AllOrders from '../../Images/AllOders.png';
import reconcilledOrders from '../../Images/reconcilledOders.png';
import pendingOrders from '../../Images/pendingOrders.png';





const Sidebar = () => {
    return (
        
        <div className='sideBar'>
            <div className='invoice'>
            <h1>GENERATE INVOICE</h1>
            </div>
            
            <div className='sidebarMenu'>
                <p>Main</p>
            </div>
                    <div className= 'OverviewDetails'>
                    <img src={Overview} alt='' />
                    <p>Overview</p>
                    </div>

                    <br/>
                    <br/>
                    <p className='payment'>Payments</p>

                    <div className= 'payment'>
                    <img src={AllPayment} alt='' />
                    <p>All Payments</p>
                    </div>
                    
                    <div className= 'payment'>
                    <img src={ReconcilePayment} alt='' />
                    <p>Reconcilled Payments</p>
                    </div>
                    
                    <div className= 'payment'>
                    <img src={UnreconcilePayment} alt='' />
                    <p>Un-Reconcilled Payments</p>
                    </div>
                    
                    <div className= 'payment'>
                    <img src={ManualSettlement} alt='' />
                    <p>Manual Settlement</p>
                    </div>
                    <br/>
                    <br/>
                    <p className='payment'>Orders</p>

                    <div className= 'payment'>
                    <img src={AllOrders} alt='' />
                    <p>All Orders</p>
                    </div>
                    
                    <div className= 'payment'>
                    <img src={pendingOrders} alt='' />
                    <p>Pending Orders </p>
                    </div>
                    
                    <div className= 'payment'>
                    <img src={reconcilledOrders} alt='' />
                    <p>Reconcilled Orders </p>
                    </div>
            
        </div>
    )
}

export default Sidebar
