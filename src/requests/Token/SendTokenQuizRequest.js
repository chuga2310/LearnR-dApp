import check from 'express-validator';

let validate = () => {
    return [ 
      check('received_address', 'Địa chỉ ví user không được bỏ trống').not().isEmpty(),
    ]; 
  }

export default validate;