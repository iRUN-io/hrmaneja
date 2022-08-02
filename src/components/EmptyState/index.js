// empty state
import React from 'react';
import Image from "../elements/Image";


const EmptyState = () => (
    <div>
        <div className='mx-auto center' style={{textAlign: 'center', margin: '30px'}}>
            <Image
                src={require("../../assets/images/noData.svg")}
                alt="Empty Data"
                className="img-fluid"
                width={200} />
        </div>
    </div>
);


export default EmptyState;