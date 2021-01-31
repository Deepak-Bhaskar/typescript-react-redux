import React from 'react';
import { connect, useDispatch } from 'react-redux';

const Landing = ({ count }: { count: number }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex-container'>
      <p className='counter-content'>{`Counter Value: ${count}`}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='btn-content'
          onClick={() => dispatch({ type: 'DECREAMENT' })}
        >
          DECREAMENT
        </button>
        <button
          type='button'
          className='btn-content'
          onClick={() => dispatch({ type: 'INCREAMENT' })}
        >
          INCREAMENT
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  count: state.counter.count
});
export default connect(mapStateToProps)(Landing);
